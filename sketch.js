let grid = [];
let GRID_SIZE = 50;
let sizeOfSquare;
let select;
let algorithm;
let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function setup() {
  createCanvas(700, 700);
  sizeOfSquare = width /  GRID_SIZE;
  strokeWeight(1);
  frameRate(60);
  algorithm = new StackFill();
  select = createSelect();
  select.option('Stack');
  select.option('Queue');
  select.option('Recursive');
  select.changed(() => {
    let item = select.value();

    if (item === 'Recursive') {
      algorithm = new RecursiveFill();
    }

    if (item === 'Stack') {
      algorithm = new StackFill();
    }

    if (item === 'Queue') {
      algorithm = new QueueFill();
    }

  }) 
  
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
        grid[i][j] = '#FFFFFF';
    }
  }
  drawShape();
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

function isValidSquare(x, y, colour) {
  return x > 0 && x < width && y > 0 && y < height && grid[x][y] === colour;
}

async function mousePressed() {
  let x = 20;
  let y = 20;
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let colour = grid[x][y];
    algorithm.fill( x, y, colour);
  }
}


function drawShape() {
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[i][5] = '#000000';
  }
  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[5][i] = '#000000';
  }

  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[GRID_SIZE - 6][i] = '#000000';
  }

  for (let i = 5; i < GRID_SIZE - 5; i++) {
    grid[i][GRID_SIZE - 6] = '#000000';
  }

  for (let i = 10; i < GRID_SIZE - 10; i++) {
    grid[i][25] = '#000000';
  }
}
