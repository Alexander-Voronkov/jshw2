class Money 
{
  #grn;
  #kop;

  constructor(grn = 0, kop = 0) {
    this.#grn = grn+parseInt(kop/100);
    this.kop = kop%100;
  }

  getPrice() {
    return `${this.#grn}грн ${this.#kop}коп`;
  }

  add(obj) {
    return new Money(this.#grn + obj.#grn, this.#kop + obj.#kop);
  }

  set kop(value) {
    this.#kop = value % 100;
    this.#grn = +(value/100);
  }

  sub(obj)
  {
    return new Money((((this.#grn-obj.#grn)<0)?0:this.#grn-obj.#grn),(((this.#kop-obj.#kop)<0)?0:this.#kop-obj.#kop));
  }
}


function Marker(color)
{
  this.color=color;
  this.fillpercent=100.0;
  this.draw=function(word)
  {
    let printed = '';
    for (let index = 0; index < word.length; index++) {
      printed+=word[index];
      if(word[index]!==' ')
        this.fillpercent-=0.5;
      if(this.fillpercent<=0)
        break;      
    }      
    document.write(`<h1 style="color: ${this.color}">${printed}</h1>`);
  }
}


let marker=new Marker('green');
let str = '';
for (let index = 0; index < 300; index++) {
  str+=1+" ";  
}
marker.draw(str);


