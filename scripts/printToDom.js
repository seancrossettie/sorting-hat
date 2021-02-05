// Empty array to hold students created in studentMaker function
const students = [];

// Houses to be assinged to the student object
const houses = [ 
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]


//Prints HTML string inside selected HTML element with specified id, exported to studentMaker.js 
const printToDom = (divId, string) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
}

export { students, houses, printToDom }
