import studentMaker from './studentMaker.js'
import { students } from './printToDom.js'

// Expels student when button is clicked, triggered by clicking "Expel" button on student card
const expelButton = (e) => {
  let targetType = e.target.type;
  let targetId = e.target.id;
  
  if (targetType === "button") {
    if (students.length > 1) {
      students.splice(targetId, 1);
    } else if (students.length === 1) {
      students.shift();
    }
    studentMaker(students);
  } 
}

export default expelButton
