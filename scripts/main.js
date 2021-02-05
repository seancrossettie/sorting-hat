import studentMaker from './studentMaker.js'

const students = [];

const houses = [ 
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]

// Creates student object to be pushed into "student" array with input from form id
const createStudentObj = (e) => {
  
  e.preventDefault();
  
  let style = '';
  const name = document.querySelector("#studentName").value;
  const school = houses[Math.floor(Math.random() * houses.length)];

//                        ********* REFACTOR THIS ********** 
  const studentIds = students.map(student => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 0;

  const obj = {
    name,
    school,
    id,
    style,
  }

  if (obj.school === "Gryffindor") {
    obj.style = 'bg-primary bg-gradient';
  } else if (obj.school === "Hufflepuff") {
    obj.style = 'bg-success bg-gradient';
  } else if (obj.school === "Ravenclaw") {
    obj.style = 'bg-warning bg-primary';
  } else if (obj.school === "Ravenclaw") {
    obj.style = 'bg-secondary bg-gradient';
  } else if (obj.school === "Slytherin") {
    obj.style = 'bg-info bg-primary';
  }

  students.push(obj); 
  studentMaker(students);
}

// Prints form to HTML when "Sort!" button is clicked
const createForm = (e) => {
  let formId = e.target.id;

  if (formId === "sort") {
    document.querySelector("#form").innerHTML = `<form id="inputForm" class="mt-2">
                                                  <div class="mb-3">
                                                    <label for="exampleStudentInput" class="form-label">New Student Name</label>
                                                    <input type="text" class="form-control" id="studentName">
                                                    <div class="form-text">Find your school!</div>
                                                    <button id="create" type="button" class="btn btn-primary btn-lg mt-2">Submit</button>
                                                  </div>
                                                 </form>`
  }
  document.querySelector('#create').addEventListener('click', createStudentObj);
}

const createFilter = (e) => {
  let filterId = e.target.id;

  if (filterId === "create" && students.length > 1) {
    document.querySelector("#selectMenu").innerHTML = `<select id="schoolFilter" class="form-select" aria-label="Default select example">
                                                          <option selected>Choose a school</option>
                                                          <option value="G">Gryffindor</option>
                                                          <option value="H">Hufflepuff</option>
                                                          <option value="R">Ravenclaw</option>
                                                          <option value="S">Slytherin</option>
                                                       </select>`
  }
  document.querySelector('#selectMenu').addEventListener('click', filterSchool)
}

// Expels student when button is clicked
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

// Filters School based on menu selection
const filterSchool = (e) => {
  console.log(e.target.value)
  

  students.forEach((item) => {
    if (item.school === "") {
      cons
    }
  });
}

// Triggers functions to execute when mouse events occur
const buttonEvents = () => {
  document.querySelector('#sort').addEventListener('click', createForm);
  document.querySelector('#form').addEventListener('click', createFilter);
  document.querySelector('#students').addEventListener('click', expelButton);
}

//Initializes all functions
const init = () => {
  buttonEvents();
}

init();
