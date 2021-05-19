// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
const Employee = require("../lib/employee"); 
const Intern = require("../lib/intern");
const Engineer = require("../lib/intern");
// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
describe ('Intern', () => {
    


    describe ("school", ()=> {    
        it ("should return the school value", ()=>{

            //testcase
            const schoolVal ="Harvard";
            //testing the class
            const newGuy = new Engineer("Bary", "1", "a@aol", schoolVal);
            //Act
        
            //Assert
            expect(newGuy.school).toEqual(schoolVal);
        })
    })

    describe ("getRole", ()=> {    
        it ("should return the role value of Intern", ()=>{
            const testVal = "Intern"
        
           
            const newGuy = new Intern();
            expect(newGuy.getRole()).toEqual(testVal);
    
        
        })
    
    
    })
    
})