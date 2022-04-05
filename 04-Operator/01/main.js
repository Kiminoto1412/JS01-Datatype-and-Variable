let a = undefined;
let b = 2;
let c = a++; // a = a + 1 => NaN
let d = "" + a; //'undefined'
let e = String(b); //'2'
let f = `${c}`; //'NaN'
console.log(d); //NaN
console.log(e); //2
console.log(f); //NaN

Number(undefined); // NaN
Number(null); // 0
