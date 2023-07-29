// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const mixedArray = [1, 'hello', true, 12, null, [1, 2, 3], undefined, 45, '5'];
let result = 0;
let count = 0;

console.log(mixedArray.length);

function avaregeMixedArray() {
    for(let i = 0; i < mixedArray.length; i++){
        if( typeof mixedArray[i] == 'number'){
            result += mixedArray[i];
            count++;
        } /*else if( typeof mixedArray[i] == 'object' && mixedArray[i].includes(elem)){
            for (const element of mixedArray[i]) {
                result += element;
             } 
        } */
    }

    return result;
}

avaregeMixedArray(mixedArray);
console.log(result);
console.log(result / count);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, operator, y){
    switch(operator){
        case '+':
            return res =`${x} + ${y} = ${x + y}`;
        case '-' :
            return res = `${x} - ${y} = ${x - y}`;
        case '*':
            return res = `${x} * ${y} = ${x * y}`;
        case '/':
            return res = `${x} / ${y} = ${x / y}`;
        case '%':
            return res = `${x} % ${y} = ${x % y}`;
        case '^':
            return res = `${x} ^ ${y} = ${x ** y}`;
        default:
            return res = 'Something wrong with operator ' + operator;
    }

}

var res = 0;

let x = +prompt('X: ');
let mathOperator = prompt('Math operator: ');
let y = +prompt('Y: ');

doMath(x, mathOperator, y);

console.log(res);


// 3. Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function dimentionalArray(main, inner){
    let mainArr = [];

    for (let i = 0; i < main; i++) {
        let innerArr = [];
        
        for (let j = 0; j < inner; j++) {
          let element = prompt(`Input element [${i}][${j}]:`);
          innerArr.push(element);
        }
        mainArr.push(innerArr);
    }

    return mainArr;
}
let main = +prompt('Main: ');
let inner = +prompt('Inner: ');


const arr = dimentionalArray(main, inner);

console.table(arr);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function spliceElement(){
    

    for(let i = 0; i < elements.length; i++){
        while (strResult.includes(elements[i])) {
            let value = strResult.indexOf(elements[i]);
            strResult = strResult.slice(0, value) + strResult.slice(value + 1);
        }
    }
    return strResult;
}


let str = 'hello world';
let strResult = str;
let elements = ['l', 'd'];

spliceElement(str, elements);
console.log(strResult);
