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

    describe ("getRole", ()=> {    
        it ("should return the role value of Manager", ()=>{
            const testVal = "Manager"
        
           
            const newGuy = new Manager();
            expect(newGuy.getRole()).toEqual(testVal);
    
        
        })
    
    
    })
    
})