import { printToDom } from './printToDom.js'

// Prints student card to HTML with student array passed as arguement
const studentMaker = (studentArr) => {
  let cardString = '';

// Iterates through array of objects with "item" being the object and "i" being the index in the array, printing the card string to the HTML
  studentArr.forEach((item, i) => {
    cardString += `<div class="card m-3" style="width: 18rem;" id="${i}">
                    <div class="card-body ${item.style}">
                      <h5 class="card-title text-light">${item.name}</h5>
                      <p class="card-text text-light">${item.school}</p>
                      <button type="button" class="btn btn-danger" id=${item.id}>Expel</button>
                    </div>
                  </div>`;
  });

  printToDom('#students', cardString);
// Resets form after form is submitted
  document.querySelector('form').reset();
}

export default studentMaker
