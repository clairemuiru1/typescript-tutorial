//  explicit types
let character : string;
let age : number;
let isLoggedIn : boolean;

//  age = 'Luigi'
age = 30;

// isLoggedIn = 25;
isLoggedIn = false; 

// arrays
let ninja : string[] =[]

ninja.push('Shaun');

// union types
let mixed : (string|number|boolean) [] = [];
mixed.push('hello');
mixed.push(29);
mixed.push(true);
console.log(mixed);

let uid : string|number;
uid ='123';
uid = 123;

// objects
let ninjaOne : object;
ninjaOne ={ name: 'yushi',age:30};

let ninjaTwo: {
    name:string,
    age: number,
    beltColour:string
}
ninjaTwo ={ name:'Mario', age:20, beltColour:'balck'}