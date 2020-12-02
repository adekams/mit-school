
const school = {
    students: [],
    staff: [],
    name: "King's College",
    location: "Lagos",

    totalStudents: 0,
    totalStaff: 0,


    //register a student
    registerStudent: function(name, age, gender, sclass, schoolFees, feesPaid, feesBalance, id) {
        let studentCode = 'KC/SD/'
        id = studentCode + ++this.totalStudents

        feesBalance = parseInt(schoolFees) - parseInt(feesPaid)

        let student = {name, age, gender, sclass, schoolFees, feesPaid, feesBalance, id}
        this.students.push(student)
    },

    //log all students
    getAllStudents: function() {
        return this.students
    },
    
    //search for a single student
    getStudentById: function (id) {
        id = id.toUpperCase()
        for (let i = 0; i < this.students.length; i++) {      
            if (id === this.students[i].id){
                return this.students[i]
            }          
        }
    },

    //change the content of a student's info
    modifyStudent: function (id, key, value) {
        id = id.toUpperCase()
        this.students.forEach(student => {
            if (student.id === id) {
                student[key] = value
                console.log(this.students) 
            }    
        })
    },

    //delete a student from the students array
    deleteStudent: function (id) {
        id = id.toUpperCase()
        for (let i = 0; i < this.students.length; i++) {      
            if (id === this.students[i].id){
                delete this.students[i]             
            }
        }return this.students
    },

    //employ a staff
    employStaff: function(name, age, subject, qualification, salary, id) {
        let staffCode = 'KC/SF/'
        id = staffCode + ++this.totalStaff
        let staff = {name, age, subject, qualification, salary, id}
        this.staff.push(staff)
    },

    //view all staff and their details
    getAllStaff: function () {
        return this.staff
    },

    //search for a staff with their id
    getStaffById: function (id) {
        id = id.toUpperCase()
        for (let i = 0; i < this.staff.length; i++) {
            if (id === this.staff[i].id){
                return this.staff[i]
            }         
        }
    },

    //change the value of a student's key
    modifyStaff: function (id, key, value) {
        id = id.toUpperCase()
        this.staff.forEach(person => {
            if (person.id === id) {
                person[key] = value
                console.log(this.staff) 
            }    
        })
    },

    //delete a staff from the staff array
    deleteStaff: function (index) {
        deletedStaff =  this.staff.splice(index, 1)
        // console.log(deletedStaff)
        return this.staff
    },

    getSchoolAccount: function () {
        let totalAccount = 0;
        let studentsAccount = 0;
        let staffAccount = 0

        this.students.map(student => {
            studentsAccount += student.feesPaid                        
        })
        this.staff.map(person => {
            staffAccount += person.salary                       
        })
        totalAccount = studentsAccount - staffAccount
        return(totalAccount)
    },

    //get school information
    getSchoolInfo: function() {
        schInfo = {name: this.name, address: this.location, students: this.students.length, studentList: this.students, staff: this.staff.length, staffList: this.staff, account: this.getSchoolAccount() }
        return schInfo
    }, 
    
       
    
    
}

/**/
school.employStaff('Iyere', 42, 'Mathematics', 'B.Sc Mathematics', 300000)
school.employStaff('Munachim', 30, 'Animal Husbandry', 'B.Sc Zoology', 300000)
school.employStaff('Boyega', 33, 'Integrated Science', 'B.Ed Biology', 220000)
school.employStaff('Yunus', 45, 'Physics', 'Phd Physics', 440000)


school.registerStudent('Ace', 12, 'female', 'JSS 3', 200000, 100000)
school.registerStudent('Liam', 8, 'male', 'JSS1', 150000, 150000)
school.registerStudent('Efe', 12, 'male', 'SS1', 270000, 200000)
school.registerStudent('Kachi', 18, 'female', 'SS3', 500000, 40000)
school.registerStudent('Lilah', 13, 'female', 'JSS 3', 200000, 200000)
school.registerStudent('Nyx', 10, 'female', 'JSS1', 150000, 127000)
school.registerStudent('Zain', 12, 'male', 'SS1', 270000, 270000)
school.registerStudent('Aisha', 16, 'female', 'SS3', 500000, 420000)



console.log(school.getAllStudents())
console.log(school.getAllStaff())
console.log(school.getStaffById('KC/SF/3'))
console.log(school.getStudentById('KC/SD/5')) 
console.log(school.deleteStudent('KC/SD/2'))
console.log(school.modifyStudent('KC/SD/6', 'feesPaid', 140000))
console.log(school.modifyStaff('KC/SF/2', 'name', 'Chiagoziem'))
console.log(school.getSchoolAccount())
console.log(school.getSchoolInfo())

/* */








// document.querySelector('.account').innerHTML = school.name
