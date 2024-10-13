import { Shape, Circle, Rectangle, Cube, Cylinder } from "./Abstraction";

let circle: Circle = new Circle(5);

console.log(circle);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

let rectangle: Rectangle = new Rectangle(5, 10);

console.log(rectangle);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());

let cube: Cube = new Cube(5);

console.log(cube);
console.log(cube.calculateArea());
console.log(cube.calculatePerimeter());
console.log(cube.calculateVolume());

let cylinder: Cylinder = new Cylinder(5, 10);

console.log(cylinder);
console.log(cylinder.calculateArea());
console.log(cylinder.calculatePerimeter());
console.log(cylinder.calculateVolume());

console.log('--------------------------');

let shape: Shape;

shape = new Circle(5);
console.log(shape);

shape = new Rectangle(5, 10);
console.log(shape);

shape = new Cube(5);
console.log(shape);

shape = new Cylinder(5, 10);
console.log(shape);

console.log('--------------------------');

let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(5, 10),
    new Cube(5)
]

console.log(shapes);

console.log('--------------------------');

for(let shape of shapes){
    console.log(shape);
    console.log(shape.calculateArea());
    console.log(shape.calculatePerimeter());

}