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
enum Color { Red = 1, Blue = 10, Yellow = 100, Green = 1000 };
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

//INTERFACE ~Object (vs. abstract: can include implementation details)
//Used to type-check whether an OBJECT fits a certain structure.
//We can name a specific combination of variables, making sure that they will always go together.
abstract class Drink {
    swallow(): string {
        return "I am swallowing"
    }

    abstract poop(): void
}

// Here we define our Food interface, its properties, and their types.
interface Food {
    name: string;
    calories: number;
}



// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will ALWAYS be available.
function eat(food: Food): void {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

//All properties defined in Interface MUST exists and Type MUST match.
var ice_cream = {
    calories: "200",
    age: 2
}

eat(ice_cream);

/* ---------------------------------------------------------------------------------------------------------------------- */

//OOP: CLASS
//TypeScript offers a class system that is very similar to the one in these languages, including 
//inheritance, abstract classes, interface implementations, setters/getters, and more.

class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    private items: Array<string>;  // The items in the menu, an array of strings.
    protected pages: number;         // How many pages will the menu be, a number.

    //private: no class can access it except itself
    //protected: its children can access it

    // A straightforward constructor. 
    constructor(item_list: Array<string>, total_pages: number) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Methods
    list(menuName: string): void {
        console.log("Our menu" + menuName + "for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

    helloWorld(): string {
        return "Hello, world";
    }

}

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

// Call the list method.
sundayMenu.list("Wrap Agneau");
sundayMenu.helloWorld();

/* ---------------------------------------------------------------------------------------------------------------------- */

//OOP: INHERITANCE
class HappyMeal extends Menu {
    // Properties are inherited

    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        super(item_list, total_pages);
    }

    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void {
        super.list("Fried rice.");
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }

    }

    static display(): void {
        console.log("Hello, World.");
    }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();

/* ---------------------------------------------------------------------------------------------------------------------- */

//GENERICS ~any but better

// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

//With any, any type would've been accepted (T links type)

function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number

/* ---------------------------------------------------------------------------------------------------------------------- */

//MODULES ~modularity
//Uses import and export (~RequireJS & CommonJS)
/* ---------------------------------------------------------------------------------------------------------------------- */