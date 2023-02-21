//spread operator 
// function sum(a, b, c){
// return a + b + c;
// }
// const angka = [25, 50, 100];
// console.log(sum(...angka));

//********************************************************************************
//--> menduplikasi array
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;


// console.log(...numbers);
// console.log(numbers);

// numbers.push("hai");
// console.log(numbers2);

//--> menggabungkan array - ES5
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = [7, 8, 9];

let a = numbers1.concat(4, numbers2, numbers3);
console.log(a);
//ES6
let b = [...numbers1, 4, ...numbers2, ...numbers3];
console.log(b);

//destructuring array
let angka = [1, 2, 3, 4, 5];

// let i = angka[0];
// let j = angka[1];
// let k = angka[2];
// let l = angka[3];
// let m = angka[4];

let [i, j, k, l, m] = angka;
console.log(i,j);

//destructuring objek
let glo = {
    fullName: "Gloria Susanto",
    age: 20,
    address: "Manado",
}

let {fullName, age, address} = glo;
console.log(fullName, age, address);