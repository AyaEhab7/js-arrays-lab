//Exercise 1:
const foods = [];  

console.log('Exercise 1 result:', foods);

console.log("---------------------------------");
//Exercise 2:

foods.push('pizza','cheeseburger');
console.log('Exercise 2 result:', foods);

console.log("---------------------------------");
//Exercise 3:

foods.unshift('taco');
console.log('Exercise 3 result:', foods);

console.log("---------------------------------");
//Exercise 4:

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

console.log("---------------------------------");
//Exercise 5:

foods.splice(2,0,'tofu');
console.log('Exercise 5 result:', foods);

console.log("---------------------------------");
//Exercise 6:
'sushi'
foods.splice(1,1,'sushi');
foods.splice(2,0,'cupcake');

console.log('Exercise 6 result:', foods);

console.log("---------------------------------");
//Exercise 7:

const yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy);

console.log("---------------------------------");
//Exercise 8:

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

console.log("---------------------------------");
//Exercise 9:

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

console.log("---------------------------------");
//Exercise 10:

const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

console.log("---------------------------------");
//Exercise 11:

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

nums.forEach(num => {
    if (num % 2 !== 0) { 
        odds.push(num); 
    }
});

console.log('Exercise 11 result:', odds);

console.log("---------------------------------");
//Exercise 12:

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 3 === 0) {
        fizz.push(num);
    }
    if (num % 5 === 0) {
        buzz.push(num);
    }
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

console.log("---------------------------------");
//Exercise 13

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);

console.log("---------------------------------");
//Exercise 14

/*
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66], <===
	[7, 81, 90]
];
*/
const num = numArrays[2][1]; 
console.log('Exercise 14 result:', num);

console.log("---------------------------------");
//Exercise 15

let total = 0;
numArrays.forEach(innerArray => {
    innerArray.forEach(num => {
        total += num; 
    });
});

console.log('Exercise 15 result:\n', total);


