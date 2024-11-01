console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let x = 0; x < 100; x++) {
    if (x % 2 == 0) {
        continue;
    }
    else {
        console.log(x);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (i = 0; i < 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let x = 1;

while (x <= 100) {
    if (x % 2 === 0) {
        x++;
        continue;
    }
    console.log(x);
    x++;
}

console.log("EXERCISE 3: PART 2");

let z = 0;

while (z <= 100) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log("FizzBuzz");
    } else if (z % 3 === 0) {
        console.log("Fizz");
    } else if (z % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(z);
    }
    z++;
}

console.log("EXERCISE 3: PART 3");

let b = 1;

do {
    if (b % 2 === 0) {
        b++;
        continue;
    }
    console.log(b);
    b++;
} while (b <= 100);


console.log("EXERCISE 3: PART 4");

let a = 1;

do {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");
    } else if (a % 3 === 0) {
        console.log("Fizz");
    } else if (a % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(a);
    }
    a++;
} while (a <= 100);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100); 
let found = false; 

for (let x = 0; x < n; x++) {
    if (x === value) {
        console.log("Found value!");
        found = true; 
        break; 
    }
}


if (!found) {
    console.log("Did not find value");
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // random number between 100 and 1000

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FizzBuzz");
    } else if (i % fizzDivisor === 0) {
        console.log("Fizz");
    } else if (i % buzzDivisor === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

