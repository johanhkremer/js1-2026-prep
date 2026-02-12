const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);
console.log("Length:", fruits.length);

fruits[1] = "Mango";
console.log(fruits);

//Object
const product = {
    title: "Keyboard",
    price: 799,
    inStock: true
};

console.log(product);
console.log("Title:", product.title);
console.log("Price:", product.price);
console.log("In stock:", product.inStock);

//Object & array
const car = ["Volvo", 2020];
const betterCar = {
    brand: "Volvo",
    year: 2020
};