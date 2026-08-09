function gradeCalc(marks){
    switch(true){
        case (marks >= 90 && marks <= 100):
          console.log("Grade A");
          break
        case (marks >= 80 && marks < 90):
            console.log("Grade B");
          break
        case (marks >= 70 && marks < 80):
            console.log("Grade C");
          break
        case (marks >= 60 && marks < 70):
            console.log("Grade D");
          break
        case (marks >= 50 && marks < 60):
            console.log("Grade E");
          break
        default:
            console.log('Invalid marks');
    }
}

gradeCalc(85)
gradeCalc(45)