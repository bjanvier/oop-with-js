const { ClassRoom } = require("./ClassRoom");
const { School } = require("./School");
const { Student } = require("./Student");

/**********************************INHERITANCE**************************************************  
    Inheritance in OOP is the concept of inheriting/accessing data
    from a base class.
    Here, our base class is School and we will be inheriting/accessing data
    from 
*/
const student = new Student("First Name", "Last Name");
const school = new School("Illinois State University", "Bloomington, IL", "15K")
const classRoom = new ClassRoom()

console.log('Accessing students through Student()')
console.log(student)

/*******************************ABSTRACTION***************************************************************
 * Abstraction is the process of preventing the user from unneeded information
 * For instance, many know how to use a smart phone, but only little
 * understand how it works
 * 
 * Another example can be knowing how to build with JavaScript without 
 * knowing how it was built.
 * **/


/*  1. ***************Abstract/private properties******************/

console.log(`Student occupation is ${student.occupation}`)
//OUTPUT: The President at School undefined is undefined

console.log(`The President at School ${school.getName()} is ${school.president}`)
//Output: The President at School ISU is undefined
/**
 * We get an undefined but the class School has property called president and Student has a property called
 * occupation. 
 * The only reason we can't retrieve them is because they are only available in the School() and 
 * Student() scope immediately one after another.
 * That means they can't be accessed outside their block scopes unless we pass them into an accessible 
 * method properties as shown in the Encapsulation section below in the student.getOccupation() and school.getPresident():'
 */


/** 
 *   2. ***********************************ABSTRACT Class ************************
 * 
 * We are trying to initiate the Course objet class but denied
 * because it's an abstract class
 * Check out how to create a new abstract class rom Stackoverflow:
 *  https://stackoverflow.com/questions/5642315/regular-expression-to-get-a-string-between-two-strings-in-javascript
 *
********************************************************************************************/
// This will throw an error and should be commented out
// const course = new Course('C++', 'Pointers', 'C++ notes', 5, 'Ken Urban');
// console.log(course) //Access denied

//To access it, we will have to use one of the OOP fundamental concept called  encapsulation explained
// in the following:


 /*********************************ENCAPSULATION*************************************************************** 
  * 
  * This process, also called information hiding, allows us to access private properties through accessible methods.
  *  In this case we will be using classroom.
  * 
  * For instance, anyone at X school can enter in a classroom A, but only registered students
  * are allowed to consume a course material unless otherwise stated. 
  * However, an outsider can still access the same material through a registered student.
 */
//In the code below, we get access to the abstract class Course() through the ClassRoom() we have access to

console.log(classRoom.course(),`
    We have accessed current course through ClassRoom() using ENCAPSULATION\n 
`)

/*********************************POLYMORPHISM***********************************************************
 * 
 * While in JavaScript and many other programming languages a child class can only have/extend one parent class,
 * polymorphism allows us to access more than one parent classes at the same time through overriding.
 * 
 * Here, a class called Student extends ClassRoom class. Logically, this means that the Student object can
 * only access ClassRoom object accordingly; however, because ClassRoom also extends Course,
 * than means ClassRoom has access to Course. And because Student has access to ClassRoom, then
 * it also has access to Course, and that's Polymorphism. The Course object extends School, which makes the Student 
 * more qualified to access School as well
 * 
 * This polymorphism relationship looks like this:
 * 
 * Student -> Classroom -> Course -> School where the arrow symbol indicates the extension between
 */

console.log(classRoom.students[0],` Accessing student at index 0 through School()`)

/**
 * Now we can access occupation and president through their respective 
 * calling methods as shown below:
 */
console.log(`Student occupation is ${student.getOccupation()}`)
 //OUTPUT: Student occupation is Debugging good codes

 console.log(`The President at School ${school.getName()} is ${school.getPresident()}`)
//OUTPUT:The The President at School Illinois State University is Lionel Lusombo Munyololo