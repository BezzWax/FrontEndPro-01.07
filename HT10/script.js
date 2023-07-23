// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let result = '';

for(let i = 20; i <= 30; i += 0.5){
    result += i + ' ';
}

console.log(result);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const hrn = 27;

for(let bucks = 10; bucks <= 100; bucks += 10){
    console.table(`${bucks}$ equivalently ${hrn * bucks}₴`);
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let num = prompt();
let res = '';

for(let i = 1; i <= num; i++) {
    if (i > 100){
        break;
    } else if(i ** 2 <= num){
        res += i + ' '; 
    } 
}

console.log(res);

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = prompt(`4:`);
var count = 0;

while(number > 1){
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
        count++;
        }
    }
    break;
}
console.log(count);
if(count > 2){
    console.log(`${number} – false`);
} else {
    console.log(`${number} – true`);
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number1 = prompt();

for(let i= 1; i < number1; i++) {
    if(number1 == 3 ** i){
        console.log(3 ** i);
    } else {
        continue;
    }
}