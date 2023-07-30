const DEFAULT_SIZE = 16;
const grid = document.getElementById('gridContainer');
const defaultColor = document.getElementById('resetBtn');
const rgbBtn = document.getElementById('rgbBtn');
const slider = document.getElementById('slider');
const DEFAULT_COLOR = 'background-color: black';
const sliderValue = document.getElementById('sliderValue');


slider.addEventListener('change', event => {
  /*grid.innerHTML = '';*/
  let newSize = slider.value;
  sliderValue.innerHTML = `${newSize}`
})

defaultColor.addEventListener('click', event => {
  let newSize = slider.value;
    createGrid(newSize);
})

rgbBtn.addEventListener('click', event => {
  let newSize = slider.value;
  rgbGrid(newSize); //fix here
  
})



function createGrid(newSize) {
  grid.innerHTML = ''; // Clear the existing grid (if any)
  
  grid.style.display = 'grid'; // Set the grid layout
  grid.style.gridTemplateColumns = `repeat(${newSize}, auto)`; 
  grid.style.gridTemplateRows = `repeat(${newSize}, auto)`;
  for (let x = 0; x < newSize * newSize; x++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cell.addEventListener('pointerover', e => {
      cell.style = DEFAULT_COLOR;
    })
  }
}

function rgbGrid(newSize){
  grid.innerHTML = ''; // Clear the existing grid (if any)
  
  grid.style.display = 'grid'; // Set the grid layout
  grid.style.gridTemplateColumns = `repeat(${newSize}, auto)`; 
  grid.style.gridTemplateRows = `repeat(${newSize}, auto)`;
  for (let x = 0; x < newSize * newSize; x++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cell.addEventListener('pointerover', e => {
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      cell.style = "background-color: " + randomColor;
    })
  }
}

window.addEventListener("load", event => {
  let size = slider.value;
  sliderValue.innerHTML = size;
  createGrid(DEFAULT_SIZE);
}); 