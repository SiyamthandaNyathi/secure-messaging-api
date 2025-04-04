//Inheritance & Polymorphism
class Shape {
    area() {
      throw new Error('Not Implemented');
    }
  
    perimeter() {
      throw new Error('Not Implemented');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  //Usage:
  const r = new Rectangle(4, 5);
  console.log(r.area());       //  20
  console.log(r.perimeter());  //  18
  
  const c = new Circle(3);
  console.log(c.area());       //  28.27
  console.log(c.perimeter());  //  18.85
  