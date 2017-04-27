"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');

/**
 *Paquete npm de Square
 * 
 * Autor: Raúl Martín Morales
 * 
 * Aquí creamos la clase Square que hereda de Shape
 * 
 * @class Square
 * @param {hash} options Ancho
 * 
 */
 
class Square extends Shape {
  
    /**
    * @construct Square
    * @param{hash} options Ancho
    */
    
    constructor(options) {
      super(options)
    }
    
    /**
    * @function getArea
    * @return {value} retorna el valor del area del square
    */
    
    area() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
