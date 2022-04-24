const { Course } = require("./Course");
const { Teacher } = require("./Teacher");

class ClassRoom extends Course{
    constructor(){
        super();
    }

    getStudentByGPA = (student) => {
        if (student.gpa >= 2.4)
          return student
        return null
    }

    getTeacherByName = () =>{

        var teacher = new Teacher('Favorite', 'email', 'age', 'gender');

        if (course.teacher === teacher.name){
            return teacher;
        }
        return undefined;
    }
}

module.exports = { ClassRoom }
