let a = undefined;
let b = " ";
let c = !b; //false
let d = Boolean(a); //false
let e = !!b;
let f = !!c;
console.log(d); //false
console.log(e); //true
console.log(f); //false
