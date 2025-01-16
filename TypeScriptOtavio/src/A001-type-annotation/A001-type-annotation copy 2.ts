// basic types
let name: string;
let age: number;
let isAdult: boolean;
let symbols: symbol;
let big: bigint;

// Arrays
let arrayNumber: Array<number>;
let arrayString: Array<string>;

let arrayNumber2: number[];
let arrayString2: string[];

// Objects
let person: {
	name: string;
	age: number;
	isAdult?: boolean;
};

// Objects with keys undefined
export const objectA: {
	chaveA: string;
	chaveB: string;
	chaveC?: string;
	[key: string]: unknown; // Quando não sabemos quais chaves podem ser adicionadas
} = {
	chaveA: "a",
	chaveB: "c",
};

// Function
function soma(x: number, y: number): number {
	return x + y;
}

// type of functions
type ToUpperCase = (item: string) => string;

const toUpperCase: ToUpperCase = (item) => item.toUpperCase();

console.log(toUpperCase("a"));

export default {};
