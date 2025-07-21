// constat( var ) mca
// full stack (40)
// mern stack (20)
// data analylis (30)
// ai Ml(10)
//total student 100

// take  any clg , i want a list of student of different courses







// function giftCollegeCourses() {
//   const college = "GIFT College";
//   const courses = {
//     "Full Stack": 40,
//     "MERN Stack": 20,
//     "Data Analysis": 30,
//     "AI/ML": 10
//   };

//   console.log("Courses and student count at " + college + ":");
//   for (let course in courses) {
//     console.log(course + " - " + courses[course] + " students");
    
//   }
// }

// giftCollegeCourses();




//without using loop ,using count (object) , and .This-keyword
const collegeInfo = {
  college: 'GIFT College',
  courses: {
    Full_Stack: 40,
    MERN_Stack: 20,
    Data_Analysis: 30,
    AI_ML: 10
  },
  showDetails: function() {
    console.log('Courses and student count at ' + this.college + ':');
    console.log('Full Stack - ' + this.courses.Full_Stack + ' students');
    console.log('MERN Stack - ' + this.courses.MERN_Stack + ' students');
    console.log('Data Analysis - ' + this.courses.Data_Analysis + ' students');
    console.log('AI/ML - ' + this.courses.AI_ML + ' students');

    let total = this.courses.Full_Stack + this.courses.MERN_Stack + this.courses.Data_Analysis + this.courses.AI_ML;
    console.log('Total Students: ' + total);
  }
};

collegeInfo.showDetails();
` `

