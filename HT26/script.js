function generateList(array) {
    let ul = document.createElement('ul');

    for(let element of array){
        let li = document.createElement('li');

        if(Array.isArray(element)){
            li.appendChild(generateList(element));
        } else {
            li.textContent = element;
        }

        ul.appendChild(li);
    }

    return ul; 
}

let list = [1, [2, 3], 4 , 5, 6, [7, 9, [10, 11, 12]]];

document.body.appendChild(generateList(list));
