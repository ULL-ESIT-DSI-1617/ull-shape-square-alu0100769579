"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');
let Square = require('../square.js');

require("should");

describe("getArea", function() {
  it("must compute the square area correctly. Shape object", function() {
    let a = new Shape({ width: 100}, 'Square');
    let s = a.getArea();
    s.should.equal(10000);
  })
  it("must compute the square area correctly. Square object", function() {
    let a = new Square({ width: 100});
    let s = a.getArea();
    s.should.equal(10000);
  })
});
