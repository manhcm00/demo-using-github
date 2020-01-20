function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    
  }
  
Circle.prototype.isOverlapped = function(cricle) {
    if ((this.x - cricle.x)*(this.x - cricle.x) + (this.y - cricle.y)*(this.y - cricle.y) < this.radius + cricle.radius) return -1;
    if ((this.x - cricle.x)*(this.x - cricle.x) + (this.y - cricle.y)*(this.y - cricle.y) === this.radius + cricle.radius) return 0;
    return 1;
  }

  Circle.prototype.new() {
    
  }

  module.exports = Circle;