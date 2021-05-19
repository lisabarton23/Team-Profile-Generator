const inquirer = require('inquirer');
const fs = require('fs')
const path =require('path')
const Employee = require("./lib/employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/intern");
const generateHtml = require("./src/generatehtml")
//need any empty array to capture names?
const employeeArray = [];

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
      message: "Please enter name:",
      name: "name",
    },{
      type : "input",
      message: "Please enter ID:",
      name: "id",
    },{
      type : "input",
      message: "Please enter email:",
      name: "email",
    },

  ])
.then(function(emplObj){

  switch (emplObj.role) {
  case "Engineer" :
     getEngineer(emplObj);
    break;
  case "Intern": 
    getIntern(emplObj);
   break;
  default:
   getManager(emplObj);
 
}})
   


function getEngineer(emplObj){
  inquirer
  .prompt([
    {
            type : "input",
            message: "What is their GitHub Username?",
            name: "github",},
          
          
          {type: "confirm",
          name: "answer",
          message: "Is your team complete?",
          default: true  
    }
          ])
    .then(function(engineerObj){

      //as soon as we ask 
      //capture it 
      //toss into an array
      var newGuy = new Engineer (emplObj.name, emplObj.id, emplObj.email, engineerObj.github)
      employeeArray.push(newGuy);
      console.log(employeeArray);
      //check if engineerObj.answer == true
      if(engineerObj.answer == true){
        console.log(generateHtml (employeeArray));
        //write to filefunction writeToFile(fileName, data) {
          function writeToFile(fileName, data){
          fs.writeFile(path.join(__dirname + "/dist", fileName), data, (err) => err ? console.log(err) : console.log ("You did it"))
          
           
          }
          writeToFile("index.html", generateHtml(employeeArray))
      }
        else {
  createTeam ()}
 })

        //create html page
        //pass employyeeArray
        
      //if false
        //go back to the createTeam();
          
          
          //need to add if false go to createTeam()
  

  function getIntern(emplObj) {
inquirer.prompt ([{
        type : "input",
        message: "What is their school name?",
        name: "school",},

        {type: "confirm",
        name: "variable",
        message: "Is your team complete?",
        default: true}
]).then(function(internObj){

  //as soon as we ask 
  //capture it 
  //toss into an array
  var newGuy = new Intern (internObj.name, internObj.id, internObj.email, internObj.github)
  employeeArray.push(newGuy);
  console.log(employeeArray);
  //check if engineerObj.answer == true
  if(internObj.answer == true){
    console.log(generateHtml (employeeArray));
    //write to filefunction writeToFile(fileName, data) {
      function writeToFile(fileName, data){
      fs.writeFile(path.join(__dirname + "/dist", fileName), data, (err) => err ? console.log(err) : console.log ("You did it"))
      
       
      }
      writeToFile("index.html", generateHtml(employeeArray))
  }
    else {
createTeam ()}
})//need to add if false go to createTeam()

}

function getManager (emplObj) {
inquirer.prompt ([ { 
      type : "input",
      message: "What is your office number?",
      name: "officeNumber",},
       {type: "confirm",
       name: "variable",
       message: "Is your team complete?",
       default: true}
// ineed to add the confirm into lib
]).then(function(managerObj){

  //as soon as we ask 
  //capture it 
  //toss into an array
  var newGuy = new Manager (managerObj.name, managerObj.id, managerObj.email, managerObj.github)
  employeeArray.push(newGuy);
  console.log(employeeArray);
  //check if engineerObj.answer == true
  if(managerObj.answer == true){
    console.log(generateHtml (employeeArray));
    //write to filefunction writeToFile(fileName, data) {
      function writeToFile(fileName, data){
      fs.writeFile(path.join(__dirname + "/dist", fileName), data, (err) => err ? console.log(err) : console.log ("You did it"))
      
       
      }
      writeToFile("index.html", generateHtml(employeeArray))
  }
    else {
createTeam ()}
})//need to add if false go to createTeam()


}
  
}
  //ask if done

  //if done
  //build an engineer
 // var newGuy = new Engineer(emplObj.name,emplObj.id,emplObj.email,)
 //stuff into the array
 //and build your card and html

  //if not done
  //call createTeam();

}
  createTeam();
// .then ((Response) =>//needs to do inquirer prompt for choice made above, 
// // )


        
//     
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
          

