//A
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Hello World!");
        }, 2000); 
        })   
}

//B
const messages = async() =>{
    const msg = await helloWorld()
    console.log(msg); 
}
//C
messages();

//2 
function ambilDataUser() {
    fetch('https://regres.in/api/users')
    .then((response) => response.json())
    .then((users) => console.log(users));
}

ambilDataUser();

//3
async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  ambilDataUser(); 

//4
const axios = require('axios');
async function ambilDataUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
}

ambilDataUser(); // Panggil function ambilDataUser()

  
