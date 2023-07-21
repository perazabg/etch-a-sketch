const defaultSize = 16;

const grid = document.getElementById('gridContainer');

function createGrid(defaultSize) {
  grid.innerHTML = ''; // Clear the existing grid (if any)

  grid.style.display = 'grid'; // Set the grid layout
  grid.style.gridTemplateColumns = `repeat(${defaultSize}, auto)`; 
  grid.style.gridTemplateRows = `repeat(${defaultSize}, auto)`;
  for (let x = 0; x < defaultSize * defaultSize; x++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cell.addEventListener('pointerover', e => {
      cell.style = 'background-color: black';
      
    })
  }
}

function changeColor(){
  
}

const btn = document.getElementById('resetBtn');
btn.addEventListener('click', event => {
    createGrid(defaultSize);
});