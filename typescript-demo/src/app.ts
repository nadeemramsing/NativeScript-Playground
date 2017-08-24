//STATIC TYPING
//Types: boolean, number, string, Array<type>, tuple, enum, any, void, null, undefined, never;

//Array
let array1: string[];
let array2: Array<number>;

//Tuple: allow us to express an array where the type of a fixed number of elements is known, but need not be the same.
let tuple: [string, number, Array<number>];

var burger: string = 'hamburger',
    calories: any = 300,
    tasty: boolean = true;

//Enum: giving more friendly names to sets of numeric values
enum Color {Red = 1, Blue = 10, Yellow = 100, Green = 1000};
let color: Color;
color = Color.Green;

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger'; //Inferred automatically (i.e. type of burger = string)

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

function sing(tune: string): string {
    return tune + " " + tune + " " + tune;
}

speak(burger, calories);
console.log(sing("la la"));

//Error handling on Types by TSC
calories = "1000"; //type changed to any
sing(1);
//Error: error TS2345: Argument of type '1' is not assignable to parameter of type 'string'. TypeScript: 1 semantic error

//Type assertion(Type cast)

/* ---------------------------------------------------------------------------------------------------------------------- */

//

/* ---------------------------------------------------------------------------------------------------------------------- */