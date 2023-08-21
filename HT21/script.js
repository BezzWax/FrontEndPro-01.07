let table = document.querySelector('#table');
let k = 0; // counter

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        td.textContent = k;
        k++;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}


 
