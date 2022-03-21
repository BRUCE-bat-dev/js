
// // Faça um script que peça um valor e mostre na tela se o valor é positivo ou
// //  negativo e implemente a funcionalidade de não aceitar o número 0.
 const prompt = require('prompt-sync')();

 

//  function saudacao() {
//   const nome = prompt('Qual o seu nome? ');
//   const idade = prompt('Qual a sua idade? ');

//   console.log();
//   console.log(`Seja bem vindo(a) ${nome}!`);

//   if (idade >= 18) {
//       console.log('Você é maior de idade');
//   } else {
//       console.log('Você é menor de idade');
//   }

// //   console.log();
// // }

// // saudacao();
// let texto1 = ('Em uma manha nebulosa, Júlia Smith acordou num lugar desconhecido com um estranho lhe observando... Ela perguntou quem era ele');
// let texto2 = (', disse apenas que iria lhe guiar em sua missão. De pronto, ela pergunta do que ele está falando. O ancião lhe explica que ela ');
// let texto3 = ('foi capturada, está presa na Ilha Do Tormento, e precisa cumprir 5 desafios para ser livre e sair de lá. ');
// let texto4 = ('Em seguida, o homem trouxe uma armadura e uma mochila, com os suprementos necessários para sua batalha. Disse que em breve ela passaria pelo desafio 1. ');
// let texto5 = ('O ancião a ordena para pegar o que estava dentro de sua mochila. Logo Júlia obedece, encontra uma Desert-Eagle e encaixa em sua armadura');
// let texto6 = ('Em seguida, o Guerreiro prateado aparece e corre em sua direção, imediatamente, a jovem saca a arma e atira no homem, que vai direto ao chão. ');
// let texto7 = ('Ao saquear os suprementos do homem morto, a moça encontra uma corda e uma porção, se questiona para que seria aquilo... Ao caminhar pelo caminho, ')
// let texto8 = ('Júlia se depara com um vale repleto de cobras, e ela precisa atravessá-lo, para isso, arremessa a corda no alto de uma árvore e consegue atravessar o vale sem tocar o chão! ');
// let texto9 = ('A Guerreira se aproxima de um abismo que termina num rio, é necessário que ela pule. Então, ela prende a corda em uma coluna de ferro e a outra ponta, amarra em sua cintura, ');
// let texto10= ('então pula. Após a queda, Júlia fica a poucos centimetros da água. Então ela se solta da corda e cai na água. De imediato, ela sente uma mordida em seu pé ')
// let texto11= ('Era uma piranha... Então imediatamente, Júlia toma a porção da velocidade, e nada pela água tão rápido que as piranhas não a alcançam. Então, ao chegar na margem, ');
// let texto12= ('Júlia aperta um botão que quebra a maldição da Ilha Do Tormento e liberta não só a si, mas também a todos os cativos!')

// console.log(texto1 + texto2 + texto3 + texto4 + texto5);
// console.log();
// prompt('pressione ENTER para continuar')
// console.clear();
// console.log(texto6 + texto7 + texto8 + texto9 + texto10);
// console.log();
// prompt('pressione ENTER para continuar')
// console.clear();
// console.log(texto11 + texto12);
// console.log();
// prompt('pressione ENTER para continuar')
// console.clear();

// console.log();
// console.log('responda às perguntas com SIM ou NAO! ');
// console.log();

// let perg1 = prompt('Júlia conseguiu aplicar a injeção? ').toLowerCase();
// let valor = '';

//  if (perg1 == 'sim'){valor = (2) ; 
// } else if (perg1 == 'nao') { valor = (1); 
// } else {perg1 !== 'sim' || 'nao' 
//     valor = (0); console.log('Resposta inválida! ')}

// let perg2 = prompt('Júlia derrotou o guerreiro? ').toLowerCase();
// let valor2 = '';

//  if (perg2 == 'sim'){valor2 = (2) ;
// } else if (perg2 == 'nao'){ valor2 = (1);
// } else {perg2 !== 'sim' || 'nao' 
//     valor2 = (0); console.log('Resposta inválida! ');
// }

// let perg3 = prompt('Júlia atravessou o vale das cobras cegas? ').toLowerCase();
// let valor3  = '';

//  if (perg3 == 'sim'){valor3 = (2) ; 
// } else if (perg3 == 'nao'){ valor3 = (1); 
// } else {perg3 !== 'sim' || 'nao' 
//     valor3 = (0) ; console.log('Resposta inválida! ');
// }

// let perg4 = prompt('Júlia teve coragem de pular no rio? ').toLowerCase();
// let valor4  = '';

// if (perg4 == 'sim') {valor4 = (2) ;
// } else if (perg4 == 'nao') { valor4 = (1); 
// } else {perg4 !== 'sim' || 'nao' 
//     valor4 = (0) ; console.log('Resposta inválida! ');
// }

// let perg5 = prompt('Júlia conseguiu atravessar o rio? ').toLowerCase();
// let valor5  = '';

// if (perg5 == 'sim') {valor5 = (2) ;
// } else if (perg5 == 'nao') { valor5 = (1);
// } else {perg5 !== 'sim' || 'nao'
//     valor5 = (0) ; console.log('Resposta inválida! ');}

// let resultado = (valor + valor2 + valor3 + valor4 + valor5);
//   console.log();

//     if ((valor == 0) || (valor2 == 0) || (valor3 == 0) || (valor4 == 0) || (valor5 == 0)) {
// console.log('RESPONDA A TODAS AS PERGUNTAS CORRETAMENTE!');
//   } else if (resultado == 10) {
//     console.log('Júlia libertou os cativos da ilha!, conquistou a Coroa do Reino de Esmeralda, e sua história é lembrada até hoje!');
//   } else if (resultado == 9)  {
//   console.log('Júlia fugiu da ilha e foi livre, mas foi por pouco... não conseguiu libertar os cativos');
//   } else if (resultado == 8)  {
//     console.log('Júlia não pôde sair da ilha, mas conseguiu viver em liberdade!');
//   } else if (resultado >= 6)  {
//     console.log('Júlia se tornou uma prisioneira pelo resto de sua vida!');
//   } else { (resultado == 5)
//     console.log('Júlia foi morta em sua batalha...')} 

//   console.log() node projeto2.js
var resultado = '';
var i = 0;
do {
   i += 1;
   resultado += i + ' ';
} while (i < 5);
document.getElementById('exemplo').innerHTML = resultado;