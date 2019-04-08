// Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
    changeStudentGrade(student) {
        student.grade -= (Math.floor((Math.random() * 10)));
        return `${student.name} has a new grade of ${student.grade}.`
    }
    graduate(student) {
        if (student.grade > 69) {
            return `${student.name} congratulations, you can graduate!`
        } else {
            return `${student.name} we just have to try a little harder`
        };
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standby times!​​​​​`
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}.`
    }
}

// Objects
// Instructors

const tom = new Instructor({
    name: 'Tom',
    age: 33,
    location: 'Memphis',
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Hi y'all.`
});

const lisa = new Instructor({
    name: 'Lisa',
    age: 36,
    location: 'Boston',
    gender: 'female',
    specialty: 'Back-end',
    favLanguage: 'React',
    catchPhrase: `Let's get cracking.`
});

// Students

const bob = new Student({
    name: 'Bob',
    age: 28,
    location: 'Miami',
    gender: 'male',
    previousBackground: 'retail',
    className: 'Web17',
    favSubjects: [`Javascript`, `CSS`, `HTML`],
    grade: 90
});

const mary = new Student({
    name: 'Mary',
    age: 29,
    location: 'Houston',
    gender: 'female',
    previousBackground: 'sales',
    className: 'Web18',
    favSubjects: [`UI`, `React`, `CS`],
    grade: 87
});

// Project Managers

const louis = new ProjectManagers({
    name: 'Louis',
    age: 33,
    location: 'Los Angeles',
    gender: 'female',
    gradClassName: 'Web10',
    favInstructor: 'Big Knell',
});

const kevin = new ProjectManagers({
    name: 'Kevin',
    age: 31,
    location: 'San Francisco',
    gender: 'male',
    gradClassName: 'Web08',
    favInstructor: 'Dan Frenher',
});


// Attribute Testing

    // Instructors

console.log(tom.demo('math'));
console.log(lisa.grade(mary, 'computer science'));
console.log(lisa.favLanguage);

    // Students

console.log(bob.listsSubjects());
console.log(mary.PRAssignment(bob, 'CSS'));
console.log(bob.sprintChallenge(mary, 'HTML'));
console.log(mary.className);

    // Project Managers

console.log(louis.standUp('John', 'Sprint Channel'));
console.log(kevin.debugsCode('Nick', mary, 'Javascript'));
console.log(louis.gradClassName);

// Stretch

console.log(tom.changeStudentGrade(bob));
console.log(lisa.graduate(mary));