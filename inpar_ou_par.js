const prompt = require('prompt-sync')(); 
const num = +prompt ('Digite um numero: ');
  if (num % 2 === 0 ) 
  {  console.log(`O numero ${num} é par ` ) 
} else { console.log(`O numero ${num} é impar` ) }