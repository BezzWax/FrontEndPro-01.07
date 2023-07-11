let hours = prompt('Hours:');
let minutes = prompt('Minutes:');
let seconds = prompt('Seconds:');
let time = (hours * 60 + minutes) * 60 + seconds;

alert(`In ${hours} hours and ${minutes} minutes and ${seconds} seconds is ${time}`);