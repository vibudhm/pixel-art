// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// variables declarations

const table = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker");

let height, width;

//the table should be made when clicked submit after the input values of height and width is defined
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e){
  e.preventDefault();
  makeGrid();
})


function makeGrid() {
  //clears the existing table rows
  table.innerHTML = '';
  //store the user input value for width and height of the table
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWeight').value;

  for (let i=0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j=0; j < width; j++) {
      let cell = row.insertCell(j);

      // adding event listener to add the background color to the insertCell
      cell.addEventListener("click", function(event){
        cell.style.backgroundColor = colorPicker.value;
      });

      //remove the color from the cell background colorPicker
      cell.addEventListener("dblclick", function(event){
        cell.style.backgroundColor = "";
      });
    }
  }
}
