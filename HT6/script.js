let math = prompt("Enter a math action (+, -, *, /): ");

let num1 = +prompt("Enter a first number");
let num2 = +prompt("Enter a second number");

switch(math){
    case "+":
        alert(`${num1} ${math} ${num2} = ${num1 + num2}`);
        break;
    case "-":
        alert(`${num1} ${math} ${num2} = ${num1 - num2}`);
        break;
    case "*":
        alert(`${num1} ${math} ${num2} = ${num1 * num2}`);
        break;
    case "/":
        alert(`${num1} ${math} ${num2} = ${num1 / num2}`);
    break;
    default:
        alert("Invalid math action");
};
   
    
