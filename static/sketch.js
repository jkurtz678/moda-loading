let grid = [];
let loc = 50;
let revealAmount = 0;
let img;
let alphaValue = 0; // Alpha value for the image
let fadeDirection = 1; // 1 for fading in, -1 for fading out
let fadeSpeed = 0.7

function preload() {
  img = loadImage('moda-logo-transparent.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  
  // Update grid based on the initial window size
  updateGrid();
  
  img.resize(img.width / 2.8, img.height / 2.8);
}

function draw() {
  background(0);
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].update();
      grid[i][j].display();
    }
  }
  
  let x = (width - img.width) / 2;
  let y = (height - img.height) / 2;

  // Update alpha value for the image
  if (fadeDirection === 1) {
    alphaValue += fadeSpeed; // Increase alpha to reveal
    if (alphaValue >= 255) {
      alphaValue = 255; // Cap at 255
      fadeDirection = -1; // Start fading out
    }
  } else {
    alphaValue -= fadeSpeed; // Decrease alpha to hide
    if (alphaValue <= 0) {
      alphaValue = 0; // Cap at 0
      fadeDirection = 1; // Start fading in
    }
  }

  tint(255, alphaValue); // Apply the alpha value to the image
  image(img, x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size on window resize
  updateGrid(); // Update grid dimensions on resize
}

function updateGrid() {
  // Calculate rows and columns based on canvas size
  let cols = Math.floor(width / 50); // Example: each cell is 50 pixels wide
  let rows = Math.floor(height / 50); // Example: each cell is 50 pixels tall
  
  grid = []; // Clear the existing grid

  let row_size = height / rows;
  let col_size = width / cols;
  
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(col_size / 2 + i * col_size, row_size / 2 + j * row_size, row_size / 2, i * loc + j * loc);     
    }
  }
}