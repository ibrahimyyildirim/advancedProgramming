

class Course {
        constructor(nam, time, date, rooms){
        this.nam = nam;
        this.time = time;
        this.date = date;       
        this.rooms = rooms;
    }
 toString() {
    return this.nam
  }
}
    
class Student {
        constructor(id, nam, gpa, courses){
        this.id = id;
        this.nam = nam;
        this.gpa = gpa;       
        this.courses = courses;

    }

 toString() {
    return this.id+""
  }
}
