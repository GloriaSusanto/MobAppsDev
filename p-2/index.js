const glo = {
    fullName: "Gloria Susanto",
    age: 20,
    address: "Manado",
};

console.log(glo);

//cara lama ES5
const kalimat5 = 
    "Halo nama saya" + glo.fullName + ", umur saya " + glo.age + "tahun saya tiggal di" + glo.address;

    console.log(kalimat5);

const kalimat6 = `Helo, my name is ${glo.fullName}, my age ${glo.age}, i lived in ${glo.address}`;
console.log(kalimat6);

//arrow function
function greetings5 (){
    return "Hello world";
}

const greetings6 = (fullName) => `hello ${fullName}`;

let output1 = greetings5();
let output2 = greetings6("Gloria Susanto");

console.log(greetings5());
console.log(greetings6());

let numbers = [1, 2, 3, 4, 5];
let output3 = numbers.map((item) => item * 2);

console.log(output3);

//default parameter
let login = (username, password = "12345") => {
    console.log(`username ${username}, password: ${password}`);
};

login("glo", "12345");

//rest parameter & spread operator
//rest --> dipakai ketika memiliki banyak sekali parameter

let arrayfunc = (a, b, c, ...params) => {
    params.forEach((item) => console.log (item));
};

arrayfunc(1, 2, 3, 4, 5, 6, 7);

let arrayfunc2 = (...params) => {
    params.forEach((item) => console.log(item));
};

arrayfunc2(1, 2, 3, 4, 5, 6, 7, 8);

