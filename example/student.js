Student = {
    "teacher": "fengyan",
    "new": function(name){
        student = {}
        student.name = name
        student.prototype = Student
        return student
    },
    "setName": function (self, name) {
        self.name = name return 0
    },
    "setTeacher": function (self, teacher) {
        self.teacher = teacher return 0
    }
}
Boy = {
    "prototype": Student,
    "new": function (name) {
        boy = Student.new(name)
        boy.prototype = Boy
        return boy
    }
}
boy1 = Boy.new("Tom")
boy2 = Boy.new("David")
boy1.setName(boy1, "Tomas")
print boy1.name + " " + boy1.teacher + " " + boy2.name + " " + boy2.teacher
boy2.setTeacher(boy2, "chenchun")
print boy1.name + " " + boy1.teacher + " " + boy2.name + " " + boy2.teacher
return 0