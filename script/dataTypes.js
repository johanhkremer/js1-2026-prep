// Primitives (stack)
const exampleString = "Hej!";
const exampleNumber = 42;
const exampleBoolean = true;
const exampleUndefined = undefined;
const exampleNull = null;

// const exampleSymbol = Symbol("id");
// const exampleBigInt = 9007199254740993n;

// Reference types (heap)
const exampleObject = { name: "Johan", role: "Teacher" };
const exampleArray = [1, 2, 3];
const exampleFunction = () => "Jag är en funktion";
const exampleDate = new Date();

// Snabb koll (valfritt)
console.log(exampleString, "=", typeof exampleString);
console.log(exampleNumber, "=", typeof exampleNumber);
console.log(exampleBoolean, "=", typeof exampleBoolean);
console.log(exampleUndefined, "=", typeof exampleUndefined);
console.log(exampleNull, "=", typeof exampleNull);

console.log(exampleObject, "=", typeof exampleObject);
console.log(exampleArray, "=", typeof exampleArray);
console.log(exampleFunction, "=", typeof exampleFunction);
console.log(exampleDate, "=", typeof exampleDate);
