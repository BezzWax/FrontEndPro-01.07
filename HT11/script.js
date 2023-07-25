// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let count = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
        sum += array[i];
        count++;
    }
}

console.log(`Sum of positive elements: ${sum}; Amount: ${count}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

let min = array[0];
let j = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

let index = array.indexOf(min);

console.log('Minival element: ' + min + '; Index: ' + index);

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let max = array[0];
let f = 0;

for (let i = 1; i < array.length; i++){
  if (array[i] > max) {
    max = array[i];
  }
}

let inx = array.indexOf(max);

console.log('Maximal element: ' + max + '; Index: ' + inx);

// 4. Визначити кількість негативних елементів.

let counter = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        counter++;
    }
}

console.log('Amount of negative numbers: ' + counter);

// 5. Знайти кількість непарних позитивних елементів.

let temp = 0;

for(let i = 0; i < array.length; i++){
    if((array[i] > 0) && !(array[i] % 2 == 0)){
        temp++;
    }
}

console.log('Amount of odd positive elements: ' + temp);

// 6.Знайти кількість парних позитивних елементів.

let t = 0;

for(let i = 0; i < array.length; i++){
    if((array[i] > 0) && (array[i] % 2 == 0)){
        t++;
    }
}

console.log('Amount of even positive elements: ' + t);

// 7. Знайти суму парних позитивних елементів.

let evenSum = 0;

for(let i = 0; i < array.length; i++){
    if((array[i] > 0) && (array[i] % 2 == 0)){
        evenSum += array[i];
    }
}

console.log('Sum of even positive elements: ' + evenSum);

//8. Знайти суму непарних позитивних елементів.

let oddSum = 0;

for(let i = 0; i < array.length; i++){
    if((array[i] > 0) && !(array[i] % 2 == 0)){
        oddSum += array[i];
    }
}

console.log('Sum of odd positive elements: ' + oddSum);

//9. Знайти добуток позитивних елементів.

let product = 1;

for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
        product *= array[i];
    }
}

console.log('Product of positive elements: ' + product);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

let biggest = 0;
const arr = [];

for(let element of array){
    if (element > biggest) {
        biggest = element;
    }
}

console.log(biggest);

for (let i = 0; i < array.length; i++) {
    if (array[i] !== biggest) {
      array[i] = 0;
    }
}

console.log(array);