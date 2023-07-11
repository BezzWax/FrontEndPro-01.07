let hours = Number(prompt('Hours: '));
let minutes = Number(prompt('Minutes: '));
let seconds = Number(prompt('Seconds: '));

let time = (hours * 60 + minutes) * 60 + seconds;

alert(time);