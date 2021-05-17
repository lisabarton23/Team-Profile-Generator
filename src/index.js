const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require("../lib/employee")
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/intern")
//need any empty array 
//do I need to add path? Const Path = require ('path')

function menu (){
  function createManager() { console.log ("Please build your team")
inquirer.prompt([{//manager is first 
    type : "input",
    message: "Team Manager, please enter your name?",
    name: "name",},

    { 
    type : "input",
    message: "What is your employee id?",
    name: "id",},
     {
          type : "input",
        message: "What is your email?",
        name: "email",},
        
        {
            type : "input",
            message: "What is your office number?",
            name: "officeNumber",},])
            .then (answers=> {
              switch (){
case "Engineer":
  break;
   case "Intern":
     break;
     default: createTeam()

              }


            })
    
        }
        function createTeam (){
          inquirer.prompt([{

choices : [ "Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator (), "Finish building team"]
])
        }
// .then ((Response) =>//needs to do inquirer prompt for choice made above, 
// )
function addEngineer (){
inquirer.prompt ([{
    type : "input",
    message: "Please enter Engineer name:",
    name: "name",},

    { 
    type : "input",
    message: "What is their employee id?",
    name: "id",},
     {
          type : "input",
        message: "What is their email?",
        name: "email",},
        
        {
            type : "input",
            message: "What is their GitHub Username?",
            name: "github",},])
        }

function addIntern() { //or this inquirer prompt
inquirer.prompt ([{
    type : "input",
    message: "Please enter Intern name:",
    name: "name",},

    { 
    type : "input",
    message: "What is their employee id?",
    name: "id",},
     {
          type : "input",
        message: "What is their email?",
        name: "email",},
        
        {
            type : "input",
            message: "What is their school name?",
            name: "school",},]) 
            //after they confirm all employees have been entered or catch can i do another then?
        }
            function buildTeamHtml (){
        .then((response) => fs.writeFile("index.html", gethtml(response), (err) => err ? console.log(err) : console.log ("You did it")));

            const gethtml =(response) => {


let createHTML =''
//enter html code from testhtml when finished 


            }













return createHTML;
            }

    










          }


          // createManager(); needs to be called
          //  menu (); needs to be called 
          















