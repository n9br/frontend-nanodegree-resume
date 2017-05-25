/*
This is empty on purpose! Your code to build the resume will go here.
 */



var skills = ["VMware Automation and Performance Tuning", "SAN Management + Troubleshooting", "Proxmox VE", "Microsoft Active Directory", "Microsoft GPO",
      "Linux Operating Systems", "Windows Operating Systems",
      "Bash Scripting", "Python Scripting", "Powershell Scripting", "opsi scripting",
      "opsi Operating System Deployment", "Icinga systems monitoring"]

// $("#main").append(skills[8]);


var bio = {
  "name" : "Andre Neugebauer",
  "age" : 38 ,
  "role" : "Systems Administrator",
  "contacts" : {
    "mobile" : "+49 179 2044869",
    "email" : "ngbr@gmx.net",
    "location" : "Mainz"
    },
  "bioPic" : "",
  "welcomeMsg" : "Hi there welcome to my resume",
  "skills" : skills
};

$("#main").append(bio.name);

var work = {};
work.position = "Administrator";
work.employer = "uib gmbh";
work.yrsworked = 2;
work.city = "Mainz";

var education = {
  "schools": [
    {
      "name": "Staatliche Technikerschule Berlin",
      "city": "Berlin, Deutschland",
      "degree": "Staatlich geprüfter Industrietechnologe"
    },
    {
      "name": "St. Benno Gymnasium Dresden",
      "city": "Dresden, Sachsen, Deutschland",
      "degree": "A-Levels",
      "major": ["English","Geography"]
    }
  ]
} ;

$("#main").append("<br>" + work["position"] + " from " + education.schools[0].name)
