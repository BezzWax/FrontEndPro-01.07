let arrLen = +prompt('Enter length of array:');
let array = [];
array.length = arrLen;

// random number in the array
for(let i = 0; i < array.length; i++) { 
    array[i] = Math.floor(Math.random() * 100);
}
console.table(array);

// array sorted
array.sort((a, b) => a - b);
console.table(array);

//delete 2–4 elements from array
array.splice(2, 3, );
console.table(array);