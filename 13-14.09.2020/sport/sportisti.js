
export class Sportisti {
    constructor(ime, prez, god, grad){
        this.ime = ime;
        this.prezime = prez;
        this.godRodjenja = god;
        this.grad = grad;
    }
    set ime (i){
        this._ime = i;
    }
    set prezime (p){
        this._prezime = p;
    }
    set godRodjenja (god){
        this._godRodjenja = god;
    }
    set grad (gr){
        this._grad = gr;
    }
    get ime (){
       return this._ime;
    }
    get prezime (){
        return this._prezime;
    }
    get godRodjenja (){
        return this._godRodjenja;
    }
    get grad (){
        return this._grad;
    }
}