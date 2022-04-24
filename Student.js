const { ClassRoom } = require("./ClassRoom");
const { Course } = require("./Course");
const { School } = require("./School");

class Student extends ClassRoom{

    constructor(firstName, lastName){
        super();
     
        let occupation = 'Debugging good codes';
        let email = 'email';
        let username = 'coder@';
        this.firstName = firstName;
        this.lastName = lastName;
        
        this.getFirstName = () => {
            return this.firstName
        }

        this.getLastName = () => {
            return lastName
        }

        this.getEmail =() =>{
            return email
        }

        this.getUsername = () =>{
            return username;
        }

        this.getOccupation = () => occupation
    }
}

module.exports = { Student }
