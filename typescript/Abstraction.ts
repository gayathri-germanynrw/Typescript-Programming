export abstract class Shape{

    shapename!: string;

    constructor(name: string){
        this.shapename = name;
    }

    abstract calculateArea(): number;

    abstract calculatePerimeter(): number;

}


export interface Volume{
    calculateVolume(): number;
}


export class Circle extends Shape{

    radius!: number;

    constructor(radius: number){
        super("Circle");
        this.radius = radius; 
    }

    calculateArea(): number {
        return this.radius * this.radius *  Math.PI;
    }

    calculatePerimeter(): number {
        return 2 * this.radius * Math.PI;
    }

}

export class Rectangle extends Shape{

    length!: number;
    width!: number;

    constructor( length: number, width: number){
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    calculateArea(): number {
        return this.length * this.width;
    }

    calculatePerimeter(): number {
        return 2 * (this.length + this.width);
    }

}

export class Cube extends Shape implements Volume{

    side!: number;

    constructor(side: number){
        super("Cube");
        this.side = side;
    }

    calculateArea(): number {
        return 6 * this.side * this.side;
    }

    calculatePerimeter(): number {
        return 12 * this.side;
    }

    
    calculateVolume(): number {
        return this.side * this.side * this.side;
    }


}


export class Cylinder extends Shape implements Volume{

    radius!: number;
    height!: number;

    constructor( radius: number, height: number){
        super("Cylinder");
        this.radius = radius;
        this.height = height;
    }

    calculateArea(): number {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius * this.height;
    }


    calculateVolume(): number {
        return Math.PI * this.radius * this.radius * this.height;
    }


}