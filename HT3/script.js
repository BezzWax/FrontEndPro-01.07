// task 1

let text1 = prompt('Write a first sentences: ');
let text2 = prompt('Write a second sentences: ');
let text3 = prompt('Write a third sentences: ');

let info = [text1, text2, text3];
var res = '';

//shuffle(info);
for(let i = 0; i < info.length; i++){

res += info[i] + ", ";
info[i + 1];
}
console.log(res);

//task2
let userName = prompt("What is your name?");
let userAge = prompt("How old are u?");
document.getElementById('parent').innerHTML = `<p> Hi ${userName}, </p> <br> <p> your age: ${userAge} </p> `;

