const inquirer = require('inquirer');
const fs = require('fs')
const path =require('path')
const Employee = require("./lib/employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/intern")
//need any empty array to capture names?
const employeeArray = [];

// function start(){ inquirer.prompt([
//   {//manager is first 
//   type : "input",
//   message: "Team Manager, please enter your name?:",
//   name: "name",},

//   { 
//   type : "input",
//   message: "What is your employee id?",
//   name: "id",},
//   {
//    type : "input",
//    message: "What is your email?",
//    name: "email",},
      

// }
// function menu() {
//   function createManager() {
//      console.log ("Please build your team")
//     inquirer.prompt([
//     {//manager is first 
//     type : "input",
//     message: "Team Manager, please enter your name?:",
//     name: "name",},

//     { 
//     type : "input",
//     message: "What is your employee id?",
//     name: "id",},
//     {
//      type : "input",
//      message: "What is your email?",
//      name: "email",},
        
//     {
//      type : "input",
//      message: "What is your office number?",
//      name: "officeNumber",},])
// //can i do .then.push(answers)array?
//     .then (answers=> { // I need to push into an array here? 
//      switch (new.Employee) {
//           case "Engineer":
//             break;
//             case "Intern":
//             break;
//           default: createTeam()

//               }


//             })
    
//         }
        //should this be within my .then?
   function createTeam (){
    inquirer.prompt([
      {

      type : "list",
      message: "Please pick your role:",
      name: "role",
    choices: [ "Manager", "Engineer", "Intern" ]
    },
    {
      type : "input",
      message: "Please enter  name:",
      name: "name",
    },{
      type : "input",
      message: "Please enter  id:",
      name: "id",
    },{
      type : "input",
      message: "Please enter email:",
      name: "email",
    },

  ])
.then(function(emplObj){

  console.log(emplObj)

  if(emplObj.role=="Engineer"){
    getEngineer(emplObj);
  }else (emplObj.role =="Intern"){
    getIntern (emplObj);
  }
  //default to manager?
})}


function getEngineer(emplObj){
  inquirer.prompt([
    {
            type : "input",
            message: "What is their GitHub Username?",
            name: "github",},
          
          
          {type: "confirm",
          name: "variable",
          message: "Is your team complete?",
          default: true
          
    }
          ])
              }

  
  //ask for github
  //ask if done

  //if done
  //build an engineer
 // var newGuy = new Engineer(emplObj.name,emplObj.id,emplObj.email,)
 //stuff into the array
 //and build your card and html

  //if not done
  //call createTeam();


  createTeam();
// .then ((Response) =>//needs to do inquirer prompt for choice made above, 
// // )
// function addEngineer (){
// inquirer.prompt ([{
//     type : "input",
//     message: "Please enter Engineer name:",
//     name: "name",
//   },

//     { 
//     type : "input",
//     message: "What is their employee id?",
//     name: "id",},
//      {
//       type : "input",
//       message: "What is their email?",
//      name: "email",},
        
//      {
//       type : "input",
//       message: "What is their GitHub Username?",
//       name: "github",},])
//         }

// function addIntern() { //or this inquirer prompt
// inquirer.prompt ([{
//     type : "input",
//     message: "Please enter Intern name:",
//     name: "name",},

//     { 
//     type : "input",
//     message: "What is their employee id?",
//     name: "id",},
//      {
//     type : "input",
//     message: "What is their email?",
//     name: "email",},
        
//     {
//       type : "input",
//       message: "What is their school name?",
//       name: "school",},]) 
//             //after they confirm all employees have been entered or catch can i do another then?
//         }
//    function buildTeamHtml (){
//         .then((response) => fs.writeFile("index.html", gethtml(response), (err) => err ? console.log(err) : console.log ("You did it")));

//             const gethtml =(response) => {


// // let createHTML =''
// // //enter html code from testhtml when finished 


// //             }













// // return createHTML;
// //             }

    










//           }
//         }

//           // createManager(); 
//           //  menu (); needs to be called 
          

