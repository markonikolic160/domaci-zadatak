import {Sportisti} from "./sportisti.js";

export class Kosarkas extends Sportisti{
    constructor(ime, prez, god, grad, poeni){
        super(ime, prez, god, grad);
        this.poeni = poeni;
    }
    set poeni (p){
        this._poeni = p;
    }
    get poeni (){
        return this._poeni;
    }
    ispisKosarkasa(){
        console.log(this.ime +" "+this.prezime+" "+this.godRodjenja+ " god." + " grad: " + this.grad);
    }
    najvisePoena(){
        let najvise = this.poeni[0];
        this.poeni.forEach(elem => {
            if(elem>najvise){
                najvise=elem;
            }
        });
        return najvise;
    }
    prosekPoena(){
        let sum = 0;
        this.poeni.forEach(elem =>{
            sum += elem;
        });
        return sum / this.poeni.length;
    }
}