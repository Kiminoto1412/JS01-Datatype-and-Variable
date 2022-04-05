let a = 1; //a=1
let b = 2; //b=2
let c = a++; //c=1 a=2
console.log(a, c);
let d = ++c; //c=2 d=2
console.log(d, c);
let e = ++d + d++ + d; //e=10
