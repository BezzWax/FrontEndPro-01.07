const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let key = '';
let length = prompt('Enter a length of key:');

function generateKey(length, characters) {
    for( let i = 0; i < length; i++){ 
        let temp =  Math.floor(Math.random() * characters.length);
        key += characters[temp];
    }
    return key;
}


generateKey(length, characters);
console.log(key); 