function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    const res = fibonacci(n - 1) + fibonacci(n - 2);
    return res;
}
  
let arr = [];
const n = 15;
  
for (let i = 0; i <= n; i++) {
    arr.push(fibonacci(i));
    
    if(i == 0){
        arr.splice(i, 1);
    } else if (i > 2){
        arr.push(1);
        arr.splice(1, 1);
    }
    
    console.log(arr);
}
  
//console.log(arr);
  
  