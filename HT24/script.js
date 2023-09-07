
let input = document.getElementById('input');
let button = document.getElementById('button');
let getCommentButton = document.getElementById('getCommentButton');
let body = document.getElementsByTagName('body')[0];
let link = 0;

function getValue() {
	var inputElement = document.getElementById("input");

	link = inputElement.value;

	return link;
}

button.addEventListener('click', () => {
	fetch('https://jsonplaceholder.typicode.com/todos/' + link)
		.then(response => response.json())
		.then(json => {
			let resultElement = document.createElement('p');
			resultElement.textContent = JSON.stringify(json);

			body.appendChild(resultElement);
		});
});

getCommentButton.addEventListener('click', () => {
	fetch('https://jsonplaceholder.typicode.com/comments/' + link)
		.then(response => response.json())
		.then(json => {

			let resultElement = document.createElement('p');
			resultElement.textContent = JSON.stringify(json);

			body.appendChild(resultElement);
		});
});
