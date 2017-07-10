export function getContactDetail () {
	return  [
		{"label" : "Address", "value" : "Surakarta, Central Java, Indonesia"},
		{"label" : "Phone", "value" : "+62-819-3854-1722"},
		{"label" : "Email", "value" : "grandjulivan@gmail.com"},
		{"label" : "Skype", "value" : "gjulivan"}
	]
}

export function getSkills () {

	return  [
		{"label" : "Javascript", "value" : 85},
		{"label" : "ReactJS", "value" : 83},
		{"label" : "HTML", "value" : 90, "class": "info"},
		{"label" : "CSS", "value" : 80, "class": "info"},
		{"label" : "C#", "value" : 90, "class": "success"},
		{"label" : "WPF", "value" : 75, "class": "success"},
		{"label" : "Project Management", "value" : 50, "class": "warning"}
	]
}

export function getExperiences(){

	return [
		{"company" : "Formulatrix", "start" : "September 2014", "title" : "Senior RnD Software Engineer", 
			"url":"http://formulatrix.com/",
			"img" : "fmlx.png",
		"projects" : [
			{"label" : "Liquid Handling Robot" , "tech" : "ReactJS/Redux (User App), WPF + C# (robotcontroller), SignalR (self-hosted service)"},
			{"label" : "Protein Crystallization Robot" , "tech" : "Windows Form"},
			{"label" : "Digital Polymerase Chain Reaction Robot" , "tech" : "ReactJS/Redux, WPF, C#, WCF"},
			{"label" : "Crystallography Control Center Web App" , "tech" : "ASP MVC, Angularjs, SignalR, jQuery"}
		]},
		{"company" : "Zettabyte", "start" : "March 2017", "title" : "Freelance Front End Developer", "url":"https://www.zettabyte.sg/",
		"img" : "zettabyte.svg",
		"projects" : [
			{"label" : "Student Academic Registration Web Application" , "tech" : "ReactJS, NodeJS",
			 "role" : "Managed front-end development, optimization, deployment to staging, and testing",
		     "url" : "https://apbprive.fr/start"}
		]},
		{"company" : "Mitrais", "start" : "August 2010", "end" : "September 2014" , "title" : "Software Engineer", "url":"https://www.mitrais.com/",
		"img" : "mitrais.png",
		"projects" : [
			{"label" : "Australian Mining Solution" , "tech" : "WPF + DevExpress + Caliburn Micro, RhinoMocks + MSTest"},
			{"label" : "Cataloguing Tools" , "tech" : "ASP MVC 2, jQuery"},
			{"label" : "Australian Intelligence Transport System" , "tech" : "Windows Form, XML, C#"},
			{"label" : "Indonesian Beverages Products Manufacturer and Distributor" , "tech" : "Silverlight, SQL CE, Windows Mobile 6"}
		]
		},
		{"company" : "Institut Teknologi Sepuluh Nopember", "start" :"2006", "end" :"2010", "title" :"Bachelor Degree",
	         "url" : "http://www.its.ac.id" , "type" : "student", "img" : "its.png",
	         "projects": [{"label" : "Cumlaude Graduates"}, {"label" : "GPA 3.56 out of 4.0"}]}
	]
}