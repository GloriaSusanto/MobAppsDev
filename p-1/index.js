//object
let glo= [{
    fullName : "Gloria Audrey Michelle Susanto",
    age : 20,
    isMarried : false
},
{
    fullName : "Timothy Joy Mulalinda",
    age : 19,
    isMarried : false
}];

glo.forEach(function(value){
    console.log(value)
    return value.age;
});

// //Dot notationn
// console.log(glo.fullName);

// //bracket notation
// console.log(glo["age"]);

// //Array built-in arrow
// let numbers = [1,2,3,4,5];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i])
// }