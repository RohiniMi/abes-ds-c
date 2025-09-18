const student1 = {
    rollNo: 1,
    name: "xyz",
    branch: "CSE-DS",
    section: "C"
}
const student2 = {
    rollNo: 2,
    name: "abc",
    branch: "CSE-DS",
    section: "C"
}
console.log("object student1: ", student1);
console.log("object student2: ", student2);

class Student {
    constructor(rollNo, name, branch, section) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.section = section;
    }
}
const student3 = new Student(3,"ab","CSE-DS","C");
console.log(student3);
