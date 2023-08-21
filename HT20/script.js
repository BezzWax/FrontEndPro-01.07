let input = document.getElementById('input');
let infoDiv = document.getElementById('infoDiv');

input.addEventListener('focus', function(){
    infoDiv.style.display = 'block';
});

input.addEventListener('blur', function(){
    infoDiv.style.display = 'none';
});

