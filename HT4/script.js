let hours = Number(prompt('Hours:'));
let minutes = Number(prompt('Minutes:'));
let seconds = Number(prompt('Seconds:'));
let time = (hours * 60 + minutes) * 60 + seconds;

alert(`In ${hours} hours and ${minutes} minutes and ${seconds} seconds is ${time}`);