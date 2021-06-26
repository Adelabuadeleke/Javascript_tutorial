console.log('javascript tutorial');

// data types in javascript

// numbers 
// String
// objects {}
// arrays []
// Boolean true/false
// null 


// variables

// let, var, const

let olaAge = 10

// console.log(olaAge);

var A = 10
var B = 20

B = 30

// console.log(A + B);

let ola = 'Olamide'
let balo = 'Balogun'

// console.log(ola + ' ' + balo) // concatenation

const C = 25;
const D = 30

// D = 9
console.log(C * D)
console.log(ola + ' is ' + D + ' years old' )

let Ages = {
  olamide : 20,
  olumide : 21,
  dotun : 22,
}

// console.log('olamide is ' +  Ages.olamide + ' years old');
// console.log('olumide is ' +  Ages.olumide + ' years old');
// console.log('dotun is ' +  Ages.dotun + ' years old');

let data = [
  {name:'olamide', age:'20', hobby:'coding'},
  {name:'olumide', age:'21', hobby:'coding'},
  {name:'dotun', age:'22', hobby:'coding'}
]

// console.log(data[2])

let myName = true

// console.log(myName)

if(data[2].age === '22') {
  // console.log('this statement is correct')
} else {
  // console.log('this statement is wrong')
}


const btn = document.querySelector('.button')
const input = document.getElementById('input');
const answer = document.querySelector('#answer')

function oladundi() {
  // console.log('button click')
  console.log('my name is '  + input.value);
  answer.innerHTML =`My name is   <b>${input.value}</b>`;
}
// oladundi()

btn.addEventListener('click', oladundi)