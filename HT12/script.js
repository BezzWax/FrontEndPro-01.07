
// function removeElement() {
//     const len = prompt('Array lenght');
//     let array = [];

//     for(let i = 0; i < len; i++) {
//         let temp = prompt('Input element');
//         array.push(temp);
//     }

//     let delElement = prompt(`${array}, which element to remove?`);

//     for(let element of array){ // delete element by value
//         if(element == delElement){
//             let index = array.indexOf(delElement);
//             array.splice(index, 1);
//         }
//     }

//     console.log(array);
// }

// removeElement();

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7];
  removeElement(array, 5);
  console.log(array);