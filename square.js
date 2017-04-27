"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');

class Square extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
