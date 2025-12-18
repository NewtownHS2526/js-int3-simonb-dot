// Mild Challenges

// 1. How much would each sibling get for the week if divided evenly?
let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

let amountPerSibling = weeklyAllowance / 3;
console.log(amountPerSibling); // 43

// 2. How many games can Jordan buy with their cut?
let gamesJordanCanBuy = Math.floor(amountPerSibling / game);
console.log(gamesJordanCanBuy); // 2

// 3. Update the variables with the new prices for games and shoes.
game = 16.99; // price increased by $1
shoes = shoes * 0.5; // shoes are 50% off
console.log(game, shoes); // 16.99, 44.89

// 4. How many shoes can Quinn and Ricardo buy in a month (4 weeks)?
let totalMoney = (amountPerSibling * 2); // money of Quinn and Ricardo
let shoesQuinnRicardoCanBuy = Math.floor(totalMoney / shoes);
let shoesInAMonth = shoesQuinnRicardoCanBuy * 4; // 4 weeks
console.log(shoesInAMonth); // 8

// 5. How many more games can they buy if they put their money together compared to buying individually?
let totalGamesIndividually = Math.floor(amountPerSibling / game) * 3; // 3 siblings
let totalGamesTogether = Math.floor(totalMoney / game);
let extraGames = totalGamesTogether - totalGamesIndividually;
console.log(extraGames); // 1

// 6. Print out the three siblings' names.
console.log(`The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);

// 7. Count the number of characters in Ricardo's name.
console.log(sibling3.length); // 41

// 8. Print out "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase()); // "RICARDO MONTOYA DE LA ROSA RAMIREZ"

// 9. Print out "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase()); // "ricardo montoya de la rosa ramirez"

// 10. Print out Ricardo's name, but with all instances of the letter 'a' removed.
console.log(sibling3.replace(/a/g, '')); // "Ricordo Montoy De L Rosa Rmirez"

// 11. Print out "De La Rosa"
console.log(sibling3.split(' ').slice(3, 5).join(' ')); // "De La Rosa"

// Medium Challenges

// 12. Rewrite the functions as arrow functions.
const getRandomNum = () => Math.floor(Math.random() * 100);
const greeting = (name) => `Hello ${name}, I'm glad you can make it!`;
const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};

console.log(getRandomNum());
console.log(greeting("Jordan"));
console.log(perfectRoot(16));

// 13. Fix and finish the functions.

// a. Add two numbers
const addNums = (x, y) => {
    let sum = x + y;
    return sum;
};
console.log(addNums(4, 6)); // 10
console.log(addNums(10, 20)); // 30

// b. Special message for "Beyonce"
const isBeyonce = (name) => {
    if (name === "Beyonce") {
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
};
console.log(isBeyonce("Beyonce")); // "Welcome Queen!"
console.log(isBeyonce("Jordan")); // "Sorry Jordan, you're not Beyonce"

// c. If the number is even, return the number divided by 2.
const reduceEvens = (x) => {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return x;
    }
};
console.log(reduceEvens(10)); // 5
console.log(reduceEvens(11)); // 11

// 14. Shorten the string to the first 10 characters if longer than 10.
const shortenString = (string) => {
    return string.length > 10 ? string.slice(0, 10) : string;
};
console.log(shortenString("Hello, this is a test.")); // "Hello, thi"
console.log(shortenString("Short")); // "Short"

// Spicy Challenges

// 15. Buy burgers with a budget.
const burger = 5.99;
const fries = 3.99;
const soda = 1.99;

const buyBurgers = (budget) => {
    let burgers = Math.floor(budget / burger);
    return burgers > 0 ? burgers : "Sorry, no burgers for you.";
};
console.log(buyBurgers(20)); // 3
console.log(buyBurgers(4));  // "Sorry, no burgers for you."

// 16. Buy meals with a budget.
const buyMeals = (budget) => {
    let meals = Math.floor(budget / (burger + fries + soda));
    let remainingMoney = (budget % (burger + fries + soda)).toFixed(2);
    return `You can buy ${meals} meal(s) and have $${remainingMoney} left over.`;
};
console.log(buyMeals(20));  // "You can buy 2 meal(s) and have $0.02 left over."
console.log(buyMeals(50));  // "You can buy 5 meal(s) and have $0.95 left over."

// 17. Missing leg of a right triangle.
const missingLeg = (hypotenuse, leg) => {
    let missing = Math.sqrt(hypotenuse**2 - leg**2).toFixed(2);
    console.log(missing);
};
missingLeg(5, 3); // 4.00
missingLeg(10, 6); // 8.00

// 18. Factorial function.
const factorial = (x) => {
    if (x === 0) return 1;
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial(3)); // 6
console.log(factorial(5)); // 12
