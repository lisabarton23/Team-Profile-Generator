const Manager = require("../lib/Manager");

describe ('Manager', () => {
    


    describe ("officenumber", ()=> {    
        it ("should return the officenumber value", ()=>{

            //testcase
            const officeVal ="1234";
            //testing the class
            const newGuy = new Manager("Bary", "1", "a@aol", officeVal);
            //Act
        
            //Assert
            expect(newGuy.officeNumber).toEqual(officeVal);
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