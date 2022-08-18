let grid = [];
let GRID_SIZE = 50;
let sizeOfSquare;
function setup() {
  createCanvas(700, 700);
  sizeOfSquare = width /  GRID_SIZE;
  strokeWeight(1);
  frameRate(60);
  
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
        grid[i][j] = '#FFFFFF';
    }
  }
  
  
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[i][5] = '#000000'
  }
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[5][i] = '#000000'
  }
  
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[GRID_SIZE - 6][i] = '#000000'
  }
  
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[i][GRID_SIZE - 6] = '#000000'
  }
  
  for (let i = 10; i < GRID_SIZE - 10; i++) {
    grid[i][25] = '#000000'
  }
  
}

function draw() {
  background(220);
  
    
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      push();
      fill(grid[i][j]);
      rect(i * sizeOfSquare, j * sizeOfSquare, sizeOfSquare, sizeOfSquare);        
      pop();
    }
  }
}

function floodFill(x, y, colour) {
  
  if (isValidSquare(x, y, colour)) {
    grid[x][y] = '#367588'
    setTimeout(() => {
      floodFill(x + 1, y, colour);
      floodFill(x - 1, y, colour);
      floodFill(x, y + 1, colour);
      floodFill(x, y - 1, colour);  
    }, 100)
  }
}

function isValidSquare(x, y, colour) {
  return x > 0 && x < width && y > 0 && y < height && grid[x][y] === colour;
}


function mousePressed() {
  let x = 20;
  let y = 20;
  
  let colour = grid[x][y];
  
  floodFill( x, y, colour);
}


