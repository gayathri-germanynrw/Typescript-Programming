
function addition(a: number = 0, b: number = 0, c: number = 0): number{
    return a + b + c;
}

let result: number = addition();

console.log(result); // 0

let result2: number = addition(10);

console.log(result2); // 10

let result3: number = addition(10, 20);

console.log(result3); // 30


let result4: number = addition(10, 20, 30);

console.log(result4);


//addition("A", "B")