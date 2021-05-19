class Employee {
    constructor (name, id, email,){
    this.name = name;
    this.id = id;
    this.email = email;
    // this.confirm = true
    
    }
    getName (){
    return this.name
    
    }
    getId (){
        return this.id
    
    }
    getEmail(){
        return this.email
    
    }
    // teamConfirm() {if (this.confirm === true) 
    //     else if (this.confirm != true)


    // }
    getRole (){//returns `'Employee'`
    return "Employee";
    
    
    }
    
    }
    module.exports = Employee;