class Course {
constructor(course,time,date,room){
this.course=course
this.time=time
this.date=date
this.room=room
}
toString () {
    return this.course + " " + this.date
}
}
class Student {
constructor(id,name,gpa,courses){
this.id=id
this.name=name
this.gpa=gpa
this.courses= courses
}
toString () {
    return this.id +" "+ this.name
}
}
class Database {
    constructor(){
        this.urlS = "https://maeyler.github.io/JS/data/Students.txt";
        this.urlC = "https://maeyler.github.io/JS/data/Courses.txt";
        this.s_id=[]
        this.c_id=[]
        this.stu=[]
        this.cour=[]
        this.Students = new Map();
        this.Courses = new Map();
        this.readStudents();
        this.readCourses();
    }
readStudents() {
    console.log("readStudents "+this.urlS);
    fetch(this.urlS).then(r => r.text()).then(r => this.addStudent(r))   
}
readCourses() {
    console.log("readCourses "+this.urlC);
    fetch(this.urlC).then(r => r.text()).then(r => this.addCourse(r))  
}
addStudent(txt){
 //  let msg = txt.length+" chars, ";
   let a = txt.split("\n");
 //  msg += a.length+" lines, ";
   for (let s of a) {
     let student = this.parseStudent(s);
     this.Students.set(student.id,student);
     this.s_id.push(student.id);
     this.stu.push(student);
   }
   //console.table(this.s_id);
   //console.table(this.stu);
   //console.table(student);
 //  this.report(msg + this.s_id.length+" students");
}
parseStudent(line){
	let s = line.split("\t");
    let courses = [];
    for (let i=3; i<s.length; i++) 
    courses.push(this.Courses.get(s[i]));
    const student = new Student(s[0],s[1],s[2],courses)

    return student
}
addCourse(txt){
//	let msg = txt.length+" chars, ";
    let a = txt.split("\n");
 //   msg += a.length+" lines, ";
 //   console.log(msg);
    for (let s of a) {
      let course = this.parseCourse(s);
      this.Courses.set(course.course,course);
      this.c_id.push(course.course);
      this.cour.push(course);
      //console.table(course);
      }

//    this.report(msg + this.c_id.length+" courses");
}
parseCourse(line){
    let c = line.split("\t");
    let rooms = [];
    for (let i=3; i<c.length; i++) rooms.push(c[i]);
    const course = new Course(c[0],c[1],c[2],rooms)

    return course
}
randomStudent(){        //* A random student
    let i = Math.trunc(this.s_id.length * Math.random());
    let b = this.stu[i];
    this.report(b.name,b.id);
}

randomRoom(){
    let i = Math.trunc(this.cour.length * Math.random());
    let b = this.cour[i];
    this.report(b.room[0]);
}
aboveGpa(gpa){          //* Number of students above a given GPA
    let numberOfAbove = 0;
    for (let std of this.stu) 
        if (std.gpa > gpa) 
            numberOfAbove++;
    this.report("Number of students above a "+gpa+" GPA : "+numberOfAbove+"\n")
}

bestGpa(){
    let b = this.stu[0];
    for (let student of this.stu) 
        if (student.gpa > b.gpa) b = student;
    console.log("Best: "+b.name, b.id, b.gpa);
    this.report("Best: "+b.name, b.id);
}
findID(id) {
    let i = this.s_id.indexOf(id);
    if (i < 0) return null;
    return this.stu[i];
}
showStudent(id){            // Courses taken by a given student
    let t = id+" ";
    let std = this.findID(id);
    if (!std) {
        console.log(t+"not found"); return;
    }
    t += std.name+" "+std.gpa;
    this.report(t, std.courses.length+" courses", std.courses);
    return std
}
examSchedule(id){             // Exam schedule for a given student
    let std = this.Students.get(id);
    let examSchedule = []
    for(let course of std.courses)
    examSchedule.push(course.course+" "+course.date+" "+course.time)
    this.report(std.name,": Exam List",examSchedule)
}
studentListGivenCourse(scode){
    scode = scode.toUpperCase();
    let a = [];
    for (let [id,std] of this.Students){
    for(let crs of std.courses){
        if (crs.course == scode) 
            a.push(std.id+" "+std.name);
            }
        }
        if (a.length > 0) this.report(scode+": ", a.length+" students", a);
        else this.report("No students in "+scode);
}
courseListGivenRoom(rcode){             // Course list for a given exam room
    rcode = rcode.toUpperCase();
    let a = [];
    for (let crs of this.cour) 
        if (crs.room.includes(rcode)) 
            a.push(crs.course+" ");
    if (a.length > 0) this.report(rcode+": ", a.length+" courses given in a "+rcode, a);
    else this.report("no courses were found in this class.")
}
totalNumberOfCourse(rcode){            // Total number of courses in a given room
    rcode = rcode.toUpperCase();
    let a = [];
    for (let crs of this.cour) 
        if (crs.room.includes(rcode)) 
            a.push(crs.course+" ");
    if (a.length > 0)  this.report(a.length+" courses given in a "+rcode);
    else this.report("no courses were found in this class.")
}
report(msg, id, list) {
    out.innerHTML += "<br>"; msg += " ";
    out.appendChild(document.createTextNode(msg));
    let n1;
    if (id) {
        n1 = document.createElement("span");
        n1.appendChild(document.createTextNode(id));
        n1.classList.add("link");
        out.appendChild(n1); msg += id;
        //n1.addEventListener("click", doClick);
    }
    if (list) {
        let n2 = document.createElement("span");
        n2.appendChild(document.createTextNode(""));
        n2.innerHTML += list.join("<br>");
        n2.classList.add("course");
        if (n1) n1.appendChild(n2);
    }
    console.log(msg);
}
doClick(evt) {
    //console.log(evt);
    let t = evt.target;
   
    let s = t.innerText;
    if (/^\d+$/.test(s)) this.showStudent(s); 
    else if (t = t.firstElementChild) {
        t.style.visibility = "";
        let hide = function () {
            t.style.visibility = "hidden";
        };
        setTimeout(hide, 500);
    }
}

}




