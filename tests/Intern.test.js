// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
const Employee = require("../lib/employee"); 
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