/*
This is empty on purpose! Your code to build the resume will go here.
 */

var myString = 'audacity';
console.log(myString);

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.slice('1');
    console.log(s);
    s = s.replace('u','U');

    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(myString));

var skills = ["Linux Operating Systems", "Windows Operating Systems", "bash scripting", "shell scripting", "opsi Operating System Deployment", "opsi scripting", "systems monitoring", "storage systems", "virtualization"]

// $("#main").append(skills[8]);
// $("#main").append(skills.length);
console.log("Length of skills is " + skills.length);

var incrementLastArrayElement = function(_array) {
  var lastValue = _array.pop()+1;
  _array.push(lastValue)
  return _array;
};

var simpleArray = [0, 3, 7];


console.log(simpleArray);

var fullName = "dInGs BuMs";
var firstName = fullName.split(" ")[0].toLowerCase();
var lastName = fullName.split(" ")[1].toUpperCase();
// console.log(firstName + " phantasy " + lastName)

var firstChar = firstName.slice(0,1);
firstName=firstName.slice(1);   //slice to keep rest of string
console.log(firstName);
firstName=firstChar.toUpperCase()+firstName;
console.log(firstName + " " + lastName);

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

var education = {};
// education["name"] = "Staatlich geprüfter Industrietechnologe";
education["name"] = "Staatliche Technikerschule Berlin";
education["years"] = "2yrs";
education["city"] = "Berlin";

$("#main").append("<br>" + work["position"] + " from " + education.name)
