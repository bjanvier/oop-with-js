class School{
    students = [
        {
            name: 'Cristiano Ronaldo',
            age: 37,
            major: 'Goal Scoring'
        },
        {
            name: 'Lionel Messi',
            age: 34,
            major: 'Ball Passing'
        },
        {
            name: 'Lebron James',
            age: 37,
            major: 'Dunking Again and Again'
        },
        {
            name: 'Clara Bahoya',
            age: undefined,
            major: 'Electrical Engineering'
        },
        {
            name: 'Kayange Grace',
            age: undefined,
            major: 'Data Science',
        },
    ]

    constructor(name, address, acceptanceRate, tuition, graduationRate){
        var president = 'Lionel Lusombo Munyololo';
        this.getName =  () => name;
        this.address = () => address;
        this.acceptanceRate= () => acceptanceRate;
        this.tuition = () => tuition;
        this.graduationRate = () => graduationRate;
        this.getPresident = () => president
    }
}

module.exports = {School}