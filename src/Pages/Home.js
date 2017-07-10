import React, { Component } from 'react';
import './Home.css';
import ScrollableAnchor, {removeHash,configureAnchors  } from 'react-scrollable-anchor'
import {Jumbotron, Navbar, NavItem, Nav, ProgressBar, NavDropdown, MenuItem, Button, Well} from 'react-bootstrap'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { SocialIcon } from 'react-social-icons';
import Experience from './Experience';
import * as commonApi from '../API/commonApi';
//import {translate} from 'react-i18next';

removeHash();
configureAnchors({offset: -60, scrollDuration: 200});

//@translate(['home'], {wait: true})
class Home extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	     jobtitle : "Front End Developer",
	     intervalCounter : 1,
	     currentJobtitle : "",
	     startTime : new Date(2010,7),
	     endTime : new Date(),
	     mycontact : [],
	     myskills : []
	    }
   }
  componentDidMount() {
  	let _this = this;
    this.setState({mycontact :  commonApi.getContactDetail(), myskills : commonApi.getSkills()});
    //let currentSchoolData = $.grep(this.props.tableData, function(n, i) {return (n.school._id === );});
    setInterval(()=>{
    	_this.setState({currentJobtitle : _this.state.jobtitle.substr( 0 , _this.state.intervalCounter),
    							 intervalCounter : _this.state.intervalCounter+1>_this.state.jobtitle.length +5? 1 : _this.state.intervalCounter+1 });
    		}, 200);

  }

  render() {
  	const {t}= this.props;
    return (
    	<div>
    	  <Navbar className="navbar navbar-fixed-top  hidden-tablet hidden-phone">
	    <Navbar.Header>
		
	      <Navbar.Brand>
	        <a href="#first"><i className="fa fa-user-circle"></i>Grand Julivan</a>
	      </Navbar.Brand>
	     
	    </Navbar.Header>
	    <Nav>
	    	<NavDropdown eventKey={3} title={ <a href="#first"><i className="fa fa-user-circle"></i>Grand Julivan</a>} id="basic-nav-dropdown">
	        <MenuItem eventKey={3.1} href="#about">About</MenuItem>
	        <MenuItem eventKey={3.2} href="#skills">Skills & Expertise</MenuItem>
	        <MenuItem eventKey={3.3} href="#experience">Experience</MenuItem>
	        <MenuItem eventKey={3.4} href="#contact">Contact</MenuItem>
	      </NavDropdown>
	    </Nav>
	    <Nav className="navbar-right">
	      <NavItem eventKey={1} href="#about" className="navbar-link">About</NavItem>
	      <NavItem eventKey={2} href="#skills" className="navbar-link">Skills & Expertise</NavItem>
	      <NavItem eventKey={2} href="#experience" className="navbar-link">Experience</NavItem>
	      <NavItem eventKey={2} href="#contact" className="navbar-link">Contact</NavItem>
	  
	      
	     
	    </Nav>
	  </Navbar>
	     <ScrollableAnchor id={'first'}>
			<Jumbotron id={'header'}>
			   <div className="wrapper">
				 <h1>Hello, I'm Grand Julivan</h1>
				    <h2>
				     {this.state.currentJobtitle}</h2>
				    <p><a href="#about" className="btn btn-primary">More</a></p>
			   </div>
			   <div className="border"></div>
			</Jumbotron>
		</ScrollableAnchor>
		<ScrollableAnchor id="about">
		     <div className="container">
				<div className="row">
					<div className="col-md-3">
						<img src="/images/avatar.png" className="img-circle" alt="About Me" />
					</div>
					<div className="col-md-9">
						<div className="row about-content">
							  <h2>About Me</h2>
							 <div className="col-xs-12">
								    <div>Hello, I'm a&nbsp; 
								    		<span>Front End Developer</span> from <span>Indonesia.</span>
								    </div>
								    <div>I hold a Bachelor Degree in  <span>Informatics</span> from&nbsp; 
								    		<span><a href="http://its.ac.id/" target="_blank" rel="noopener noreferrer">Institut Teknologi Sepuluh Nopember</a></span>,
								    </div>
								    <div>And a&nbsp;
								    		<span><a href="https://mcp.microsoft.com/Anonymous/Transcript/Validate" target="_blank" rel="noopener noreferrer">Microsoft Professional Certification</a></span> on .Net 4.0.
								    </div>
								    <div>I started my Professional carreer in 2010 (Hey it is {this.state.endTime.getMonth() - this.state.startTime.getMonth()<0 ? "almost" : ""} {this.state.endTime.getYear() - this.state.startTime.getYear()} years!)</div>
							</div>
							<div className="col-xs-12 social-button">
								<SocialIcon url="http://linkedin.com/in/gjulivan/"  style={{ height: 25, width: 25 }} />
								<SocialIcon url="https://github.com/gjulivan"  style={{ height: 25, width: 25 }} />
								<SocialIcon url="https://stackoverflow.com/cv/gjulivan"  style={{ height: 25, width: 25 }}/>
								<a href="https://docs.google.com/document/d/12fflYuhLTFuU6VdSxMgn1g-3Qo_kpTil9Oe9YceYzHk/edit?usp=sharing"
								 target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume</a>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
		<ScrollableAnchor id="skills">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-xs-12">
							<div className="row">
								<h2>Contact Information</h2>
							</div>
							<div className="row contact">
								<Well>
								
								   {
								   	 this.state.mycontact && this.state.mycontact.length>0 && Array.isArray(this.state.mycontact) 
								   	 && this.state.mycontact.map((contact,idx)=>{
								   	 	return (
								   	 	   <div className="row" key={`contact_${idx}`}>
								   	 		 <div className="col-xs-3 text-right">
								   	 		 		{contact.label}
								   	 	      </div>
								   	 	      <div className="col-xs-1 text-center">
								   	 	      		:
								   	 	      </div>
								   	 	      <div className="col-xs-8 text-left">
								   	 	      	    {contact.value}
								   	 	      </div>
								   	 	   </div>
								   	 	)
								   	 })
								   }
								</Well>
							</div>
						</div>
						<div className="col-md-6 col-xs-12">
							<div className="row">
								<h2>Skills and Expertise</h2>
							</div>
							<div className="row">
								<div className="col-xs-12">
								{
									this.state.myskills && this.state.myskills.map((skill,idx)=>{
										return (<ProgressBar key={`skill_${idx}`} bsStyle={skill.class} active now={skill.value} label={skill.label}/>)
									})
								}
								
								</div>
							</div>
						</div>
					</div>
					
					</div>
		</ScrollableAnchor>
		<ScrollableAnchor id="experience">
			<Experience/>	
		</ScrollableAnchor>
		</div>
    );
  }
}

export default Home;
