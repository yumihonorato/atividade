
// objelo
class Carro {
  //atributos:
  constructor(marca,velocidade,cor) {
  this.marca = marca;
  this.velocidade = velocidade;
  this.cor=cor;}
  
  //métodos:
  acelerar(){
  if(this.velocidade <= 70){
    console.log('você está acelerando,sua velocidade é:${this.velocidade}km')
    this.velocidade+10;}
  if(this.velocidade >=70 ){
    console.log('você está muito rapido,sua velocidade é:${velocidade}km')
    this.velocidade+10}
 if(this.velocidade>=110){
   console.log('você parado e multado,por isso sua velocidade é:${this.velocidade}')
    this.velocidadade-velocidade
  } } }
let marca='';
let velocidade='';
let cor='';

carro1=new Carro('uno',80,'preto')
carro1.acelerar()


