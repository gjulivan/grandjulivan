import React, { Component } from 'react';
import './Experience.css';
import {Modal, Button} from 'react-bootstrap'

class Project extends Component {
  render() {
  	const {experience}= this.props;
  	
    return (
		<Modal {...this.props}>
        <Modal.Header closeButton>
          {experience && <Modal.Title id="contained-modal-title-sm">
          					<div className="row">
		          				  <div className="col-xs-12">
		          					{experience.title}
		          				  </div>
		          				  <div className="col-xs-12">
		          						<a href={experience.url} target="_blank" rel="noopener noreferrer"> {experience.company} </a>
		          					<span className="pull-right">
		          						{experience.start}  {experience.end? `- ${experience.end}` : "- Present"}
		          					</span>
		          				  </div>
		          			</div>
          				</Modal.Title>}
        </Modal.Header>

        <Modal.Body>
        {
        	experience && <div className="row">
        		<div className="col-xs-12">
        			Projects involved :
        		</div>
        		<div className="row projects">
					{
						experience.projects && experience.projects.map((project, count)=>{
							return(
							<div className="row" key={`project_${count}`}>
								<div className="col-xs-2 text-right">
									<i className="fa fa-code"></i>
								</div>
								<div className="col-xs-10">
									<div className="row">{project.label}</div>
									{
										project.role && <div className="row">
										<div className="col-md-4 col-xs-12">
										    Role: 
										</div>
										<div className="col-md-8 col-xs-12">
											{project.role}
										</div>
									</div>
									}
									
									<div className="row">
										<div className="col-md-4 col-xs-12">
										    Technology Used: 
										</div>
										<div className="col-md-8 col-xs-12">
											{project.tech}
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
        	</div>
        }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Project;