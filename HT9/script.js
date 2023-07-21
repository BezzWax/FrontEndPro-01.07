// for(let i = 0; i <= 5; i += 0.5){ // lesson task
//     console.log(i);
// }

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str = '';
for (let i = 10; i <= 20; i++){
    str += i;
    if(i < 20){ // додав щоб не було коми після 20-ти
        str += ', ';
    }
}
console.log(str);

// 2. Вивести квадрати чисел від 10 до 20.
let sq = [];

for (let i = 10; i <= 20; i++){
    sq.push(i * i);
}
console.table(sq);

// 3. Вивести таблицю множення на 7.

for(let i = 1; i <= 9; i++){
    temp = 7;
    console.log(`${temp} * ${i} = ${temp * i}`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for(let i = 1; i <= 15; i++){
    sum += i;
}
console.log(`Sum of whole numbers: ${sum}`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let product = 1;
for(let i = 15; i <= 35; i++){
    product *= i;
}
console.log(`Product: ${product}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum1 = 0;
for(let i = 1; i <= 500; i++){
    sum1 += i;
}
let average = sum1 / 500;

console.log(`Average: ${average}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum2 = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        sum2 += i;
    }
}

console.log('Sum of only even numbers in the range from 30 to 80: ' + sum2);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arr = [];
for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
        arr.push(i);
    }
}

console.table(arr);

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let natural = prompt();
let arr1 = [];

for(let i = 1; i <= natural; i++){
    if(natural % i === 0){
        arr1.push(i);
    }
}

console.table(arr1);

// 10. Визначити кількість його парних дільників.

let arr2 = [];

for( let i = 0; i <= arr1.length; i++){
    if(arr1[i] % 2 === 0){
        arr2.push(arr1[i]);
    }
}

console.table(arr2);

// 11. Знайти суму його парних дільників.
var sum3 = 0;

for(let i of arr2){
   sum3 += i;
}

console.log('Sum its even divisors: ' + sum3);

// 12. Надрукувати повну таблицю множення від 1 до 10.
var temp = 1;

while(temp <= 10){
    for(let i = 1; i <= 10; i++){
        console.table(`${temp} * ${i} = ${temp * i}`);
        if( i == 10){
            temp++;
        }
    }
}