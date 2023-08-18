let input = document.getElementById('input');
let infoDiv = document.getElementById('infoDiv');

input.addEventListener('focus', function(){
    infoDiv.style.height = '100px';
});

input.addEventListener('blur', function(){
    infoDiv.style.height = '0px';
});
