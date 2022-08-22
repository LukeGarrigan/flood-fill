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

let performanceTest = false;
function setup() {
  createCanvas(700, 700);
  sizeOfSquare = width /  GRID_SIZE;
  strokeWeight(1);
  frameRate(60);
  algorithm = new SpanFill();

  select = createSelect();
  select.option('Span');
  select.option('Stack');
  select.option('Queue');
  select.option('Recursive');
  select.changed(() => {
    setGrid();
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

    if (item === 'Span') {
      algorithm = new SpanFill();
    }

    restart();
  }) 

  
  visualiseCheckbox = createCheckbox('Performance test', performanceTest);

  visualiseCheckbox.changed(() => {
    performanceTest = visualiseCheckbox.checked();
  });

  restart();
}

function restart() {
  setGrid();
}


function setGrid() {
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
  nodesExpanded++;
  return x > 0 && x < width && y > 0 && y < height && grid[x][y] === colour;
}

async function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let x = floor(mouseX / 14);
    let y = floor(mouseY / 14);
    let colour = grid[x][y];
    nodesExpanded = 0;
    let start = new Date();
    await algorithm.fill(x, y, colour);
    let end = new Date();
    
    createP(`Grid size: ${GRID_SIZE}`);
    createP(`Nodes expanded ${nodesExpanded}`);
    createP(`elapsed ${end.getMilliseconds() - start.getMilliseconds()}ms`);
  }
}


function drawShape() {
  let gap = 5;

  for (let i = gap; i < GRID_SIZE - gap; i++) {
    grid[i][gap] = '#000000';
    grid[gap][i] = '#000000';
    grid[GRID_SIZE - (gap + 1)][i] = '#000000';
    grid[i][GRID_SIZE - (gap + 1)] = '#000000';
  }

  if (GRID_SIZE == 50 && !performanceTest) {
    for (let i = 0; i < 11; i++) {
      // left
      grid[i + gap + 5][10] = '#000000';
      grid[i + gap + 5][20] = '#000000';
      grid[10][i + gap + 5] = '#000000';
      grid[20][i + gap + 5] = '#000000';
  
      // right
      grid[GRID_SIZE - (i + gap + 6)][10] = '#000000';
      grid[GRID_SIZE - (i + gap + 6)][20] = '#000000';
      grid[GRID_SIZE - (gap + 6)][i + gap + 5] = '#000000';
      grid[GRID_SIZE - (gap + 16)][i + gap + 5] = '#000000';
    }
  
  
    // mouth
    for (let i = 0; i < 30; i++) {
      grid[gap + 5 + i] [34] = '#000000';
      grid[gap + 5 + i] [39] = '#000000';
    }
  
    grid[24][34] = '#FFFFFF'
    grid[25][34] = '#FFFFFF'
  
    for (let i = 0; i < 6; i++) {
      grid[gap + 5][34 + i] = '#000000';
      grid[GRID_SIZE - (gap + 5)][34 + i] = '#000000';
    }
  
    // nose
  
    for (let i = 0; i < 6; i++) {
      grid[i + gap + 17][26] = '#000000';
      // grid[i + gap + 16][27] = '#000000';
    }
  }

  
}
