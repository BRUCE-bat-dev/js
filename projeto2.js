
const prompt = require('prompt-sync')();
let joke = ["pedra", "papel", "tesoura"];
let jogador;
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let computador;
 let ini
 do{
 let rodadas = +prompt("quantas rodadas: ")
for (let i = 1; i <= rodadas; i++) {
  jogador = prompt("escolha pedra , papel ,ou tesoura: ");
  console.log(jogador);
  computador = joke[Math.floor(Math.random()* 0 )];
  console.log(computador);
  if (computador === "pedra" && jogador === "tesoura") {
    console.log("vc perdeu "); 
     vitoriasComputador++;}
 if
  (computador === 'papel' && jogador === 'pedra' ){//define q o jogador perdeu
  console.log(' vc perdeu ')
   vitoriasComputador++;}
   if (computador === 'tesoura' && jogador === 'papel'){//define q o jogador perdeu
     console.log('vc perdeu ')
     vitoriasComputador++;}
    if (computador === jogador) {//define q o joga enpatou
   console.log(" enpatou");}
   if (computador === 'tesoura' && jogador === 'pedra'){//define q o jogador ganhou
   console.log('vc ganhou  ')
   vitoriasJogador++}
   if (computador === 'pedra' && jogador === 'papel'){//define q o jogador ganhou
      console.log('vc ganhou  ')
      vitoriasJogador++} 
      if (computador === 'papel' && jogador === 'tesoura'){//define q o jogador perdeu3
         console.log('vc ganhou  ')
         vitoriasJogador++}  
 }     
 console.log('nessa rodada vc ganhou ',vitoriasJogador ,'vezes');
 console.log('nessa rodada o computador ganhou',vitoriasComputador ,'vezes');
 if (vitoriasComputador > vitoriasJogador) {
   console.log(`O computador ganhou e você perdeu.`);
 } else {
   console.log(`Você ganhou.`);}
  ini = prompt ('quer jogar denovo digete 1 senao 2')       
  } while (ini < 2 )
 