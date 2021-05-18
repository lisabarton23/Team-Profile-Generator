const Employee =require("../lib/employee");

//should this be a mock fs also? 
// getName (){
//     return this.name
    
//     }
//     getId (){
//         return this.id
    
//     }
//     getEmail(){
//         return this.email
    
//     }
//     getRole (){//returns `'Employee'`
//     return "Employee "
    
    
//     }

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

//  describe ("id", ()=> {
//     it ("should return the id value", ()=>{

//         //Arrange
//         const id = new ID();
//         const num ="1234"

//         //Act
       
//         //Assert
//         expect(this.id).toEqual("1234")
//  })
//  describe ("name", ()=> {
//     it ("should return the email value", ()=>{

//         //Arrange
//         const email = new Email();
//         const email1 ="123@gmail.com"

//         //Act
       
//         //Assert
//         expect(this.email).toEqual("123@gmail.com")
//  })
//  describe ("role", ()=> {
//     it ("should return the role value", ()=>{

//         //Arrange
//         const role = new Role("Employee");
        

//         //Act
       
//         //Assert
//         expect(return).toEqual("Employee")
//  })

// })





})

