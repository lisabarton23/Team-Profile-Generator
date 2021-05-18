// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
const Employee = require("../lib/employee"); 
const Engineer = require("../lib/Engineer");

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`
describe ('Engineer', () => {
    


    describe ("github", ()=> {    
        it ("should return the Github value", ()=>{

            //testcase
            const gitVal ="username1";
            //testing the class
            const newGuy = new Engineer("Bary", "1", "a@aol", gitVal);
            //Act
        
            //Assert
            expect(newGuy.github).toEqual(gitVal);
        })
    })

    // describe ("getRole", ()=> {    
    //     it ("should return the name value when new instance of Employee is created and getName is called", ()=>{

    //         //testcase
    //         const namval ="Barry";
    //         //testing the class
    //         const newGuy = new Employee(namval, "1", "a@a.com");
    //         //Act
        
    //         //Assert
    //         expect(newGuy.getName()).toEqual(namval);
    //     })
    // })
})