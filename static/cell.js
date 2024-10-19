class Cell {
  constructor(x0, y0, r, angle) {
    this.r = r;
    this.angle = angle;
    this.x0 = x0;
    this.y0 = y0;
  }
  
  update() {
    this.x = this.r * cos(this.angle);
    this.y = this.r*sin(this.angle);
    this.angle += 0.02;
  }
  
  display() {
    //  ellipse(this.x0, this.y0, this.r*2, this.r*2);
    // line(this.x0, this.y0, this.x + this.x0, this.y + this.y0)
    fill(80)
    ellipse(this.x+this.x0, this.y+this.y0, 2, 2);
  }
  

}