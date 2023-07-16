let numOrStr = prompt('Input number or string');

console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log('Canseled');
    break;
  case numOrStr === '':
    console.log('Emptu input');
    break;
  case isNaN(Number(numOrStr)):
    console.log('Value is NaN');
    break;
  default:
    console.log('OK!');
    break;
}

