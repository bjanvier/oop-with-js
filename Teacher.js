
class Teacher  {

    constructor(name, email, age, gender){
        this.name = () => name;
        this.email = () => email;
        this.age = () => age;
        this.gender = () => gender;
    }
}

module.exports = { Teacher };