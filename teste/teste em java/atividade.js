// objeto
class Carro {
  //atributos:
  constructor(marca,velocidade,cor) {
  this.marca = marca;
  this.velocidade =velocidade;
  this.cor=cor;
    console.log(`seu carro é um ${this.marca} ${this.cor}`)
  }
  
  //métodos:
  acelerar(){
  if(this.velocidade <= 70){
    this.velocidade +=10;
    console.log(`voce está acelerando,sua velocidade agora é ${this.velocidade}`)}
 else if(this.velocidade <=110){
    this.velocidade+= 10;
    console.log(`você está muito rapido,sua velocidade é:${this.velocidade}km`)}
 else{
   this.velocidade=0
   console.log(`você parado e multado,por isso sua velocidade é:${this.velocidade}km`)} }
  }

carro1=new Carro('uno',80,'preto') 
carro1.acelerar()




