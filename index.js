
const pronpt = require('prompt-sync')();
let nivel = 0 
let heroi = pronpt(' você foi chamado pelo rei para uma missão  , você atende a o chamado?');
 if(heroi === "sim"){
     nivel++;
 }
 heroi = pronpt('a investigação te leva ao castelo de um mago você o interroga ?');
 if(heroi === "sim"){
     nivel++;
 }
 heroi = pronpt('ele te diz que a princesa esta na  masmorra dos goblins . voccê segui a invetigação ?');
 if(heroi === "sim"){
     nivel++;
 }
 heroi = pronpt('chegando a masmorra você encontra  a princesa , é vente guardas você os enfrenta ?');
 if(heroi === "sim"){
     nivel++;
 }
 heroi = pronpt('depis da balha você finalmente salva princesa , você a leva de volta  ?');
 if(heroi === "sim"){
     nivel++;
 }
 if(nivel === 0){
    console.log("Você falhou miseravelmente !!")
}else if(nivel === 1 || nivel === 2 ){
    console.log("Você falha, mas ainda consegue fugir da situação .")
}
if(nivel === 3){
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco. !!")
}else if(nivel === 4 ){
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita..")
}
if(nivel === 5){
    console.log(" Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. !!")}