//The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes.

class Employee {
constructor (name, id, email){
this.name = name;
this.id = id;
this.email = email;


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
getRole (){//returns `'Employee'`
return "Employee "


}

}
module.exports = Employee;


class Engineer {
constructor (github){
    this.github = github;
}
getGithub(){

}
getRole(){
    //return engineer
}


}

class Intern {
    constructor (school){
        this.school = school;
    }
getSchool() {

}
getRole (){
//return intern

}
}

class Manager {
    constructor (officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole() {

        //overridden to return "Manager"
    }





}
