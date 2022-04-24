const { School } = require("./School");

class Course extends School{

    constructor(){
        
        super();
        /**
         * Making this class abstract
         */
        if (new.target === Course){
            throw new TypeError(`Access denied!! User override to access`)
        }

        this.course = () => {
            return {
                name: 'React.js',
                topic: 'How to React.js',
                content: 'Course content',
                credit: 3,
                teacher: 'Makarenkoo',
            }
        }
    }
}

module.exports ={ Course }