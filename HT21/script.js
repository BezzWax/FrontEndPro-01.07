let table = document.querySelector('#table');
let k = 0; // Початкове значення k

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        td.textContent = k;
        k++; // Збільшення k для наступної комірки
        tr.appendChild(td);
    }

    table.appendChild(tr);
}


 