import React, { Component } from 'react';
import Project from './Project'
import './Experience.css';
import * as commonApi from '../API/commonApi';
require('./timeline.css');

class Experience extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	    	showModal : false,
	    	experience: null,
	    	experiences : []
	    }
	    this.hideModal = this.hideModal.bind(this);
   }
   componentDidMount() {
  	let _this = this;
    this.setState({experiences :  commonApi.getExperiences()});
    
  }
   hideModal(){
   	this.setState({showModal : false});
   }
  render() {
  	const {t}= this.props;
  	//let myexperience = t('home:myexperience',{ returnObjects: true });
    return (
				<div className="container">
				<Project show={this.state.showModal==="project"} onHide={this.hideModal} experience={this.state.experience}/>
					<div className="row">
						<div className="col-md-12">
							<h2>Experience</h2>
						</div>
					</div>
					<div className="row">
						<section className="cd-container" id="cd-timeline">
						{
							this.state.experiences && this.state.experiences.length>0 && Array.isArray(this.state.experiences) 
							&& this.state.experiences.map((experience,idx)=>{
								return(
									<div className="cd-timeline-block" key={`experience_${idx}`}>
										<div className="cd-timeline-img cd-picture">
										
											<img src={experience.img ? `/images/company/${experience.img}` : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"} alt="Company Logo" />
										
										</div>

										<div className="cd-timeline-content">
											<h2>{experience.title}</h2>
											{experience.type!=="student" && <div>Projects : </div>}
											<div className="row projects">
												{
													experience.projects && experience.projects.map((project, count)=>{
														return(
														<div className="col-xs-12" key={`project_${count}`}>
															<i className="fa fa-code"></i> {project.label}
														</div>
														)
													})
												}
											</div>

											{experience.type!=="student" && <div href="#0" className="btn btn-info cd-read-more" onClick={()=>this.setState({ showModal: "project" , experience: experience})}>Read more</div>}
											<span className="cd-date">
												<div className="row">
													<div className="col-xs-12">
														{experience.start} {experience.end? `- ${experience.end}` : ""}
												    </div>
												    <div className="col-xs-12 company">
														<a href={experience.url} target="_blank" rel="noopener noreferrer"> {experience.company} </a>
												    </div>
												</div>
											</span>

										</div> 
									</div> 
								)
							})
						}
						</section>
					</div>
					
				</div>
    );
  }
}

export default Experience;