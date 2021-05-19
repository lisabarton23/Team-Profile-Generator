const Employee =require("../lib/employee");


describe ('Employee', () => {
    


    describe ("name", ()=> {    
        it ("should return the name value", ()=>{

            //testcase
            const namval ="Barry";
            //testing the class
            const newGuy = new Employee(namval, "1", "a@a.com");
            //Act
        
            //Assert
            expect(newGuy.name).toEqual(namval);
        })
    })

    describe ("getName", ()=> {    
        it ("should return the name value when new instance of Employee is created and getName is called", ()=>{

            //testcase
            const namval ="Barry";
            //testing the class
            const newGuy = new Employee(namval, "1", "a@a.com");
            //Act
        
            //Assert
            expect(newGuy.getName()).toEqual(namval);
        })
    })

 describe ("id", ()=> {
    it ("should return the id value", ()=>{

        //Arrange
        const idVal ="1234"
        const newGuy = new Employee("guy", idVal, "a@a.com");
        
        //Act
       
        //Assert
        expect(newGuy.id).toEqual(idVal)
 })})
 describe ("getId", ()=> {    
    it ("should return the id value when new instance of Employee is created and getid is called", ()=>{

        const idVal ="1234"
        const newGuy = new Employee("guy", idVal, "a@a.com");
        
    
        //Assert
        expect(newGuy.getId()).toEqual(idVal);
    })
})

 describe ("email", ()=> {
    it ("should return the email value", ()=>{

        //Arrange
        const emailVal ="l@gmail.com"
        const newGuy = new Employee("guy", "1234", emailVal);
        
        //Act
       
        //Assert
        expect(newGuy.email).toEqual(emailVal)
 })})
 describe ("getEmail", ()=> {    
    it ("should return the email value when new instance of Employee is created and getEmail is called", ()=>{

        const emailVal ="l@gmail.com"
        const newGuy = new Employee("guy", "1234", emailVal);
        
    
        //Assert
        expect(newGuy.getEmail()).toEqual(emailVal);
    })
})

describe ("getRole", ()=> {    
    it ("should return the role value of Employee", ()=>{
        const testVal = "Employee"
    
       
        const newGuy = new Employee();
        expect(newGuy.getRole()).toEqual(testVal);

    
    })


})


})




