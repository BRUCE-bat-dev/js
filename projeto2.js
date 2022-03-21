
const prompt = require('prompt-sync')();
let joke = ["pedra", "papel", "tesoura"];
let jogador;
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let computador;

resposta = true

   
 do  
 
 
 while(resposta = true)
 {let rodadas = +prompt("quantas rodadas: ");
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do-- computador;
for (let i = 1; i <= rodadas; i++) {
  jogador = prompt("escolha pedra , papel ,ou tesoura: ");
  console.log(jogador);
  computador = joke[Math.floor(Math.random() * 3)];
  console.log(computador);
  if (computador === "pedra" && jogador === "tesoura") {
    console.log("vc perdeu ");
    vitoriasComputador++;
  }
   if
       (computador === 'papel' && jogador === 'pedra' ){//define q o jogador perdeu
     console.log(' vc perdeu ')
     vitoriasComputador++;}
    if (computador === 'tesoura' && jogador === 'papel'){//define q o jogador perdeu
     console.log('vc perdeu ')}
     if (computador === 'pedra' && jogador === 'tesoura'){//define q o jogador perdeu
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
      if (computador === 'tesoura' && jogador === 'pedra'){//define q o jogador perdeu
         console.log('vc ganhou  ')
      
         vitoriasJogador++}  
 }     
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
console.log('nessa rodada vc ganhou ',vitoriasJogador ,'vezes');
console.log('nessa rodada o computador ganhou',vitoriasComputador ,'vezes');

if (vitoriasComputador > vitoriasJogador) {
   console.log(`O computador ganhou e você perdeu.`);
 } else {
   console.log(`Você ganhou.`);}
 resposta
resposta = prompt ('quer jogar denovo')
if(resposta =  não )
 resposta = true  }

// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.