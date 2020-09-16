import {Osoba} from "./osoba.js";
import {prosekPlate, nizRadnika} from "../script.js";

export class Zaposleni extends Osoba {
    constructor(ime, prez, god, pl, poz){
        super(ime, prez, god);
        this.plata = pl;
        this.pozicija = poz;
    }
    set plata(p){
        this._plata = p;
    }
    set pozicija(poz){
        this._pozicija = poz;
    }
    get plata(){
        return this._plata;
    }
    get pozicija(){
        return this._pozicija;
    }
    ispisZaposleni(){
        console.log(this.ime, this.prezime,this.godRodjenja, this.plata, this.pozicija);
    }
    iznadProseka(){
        if(this.plata>prosekPlate(nizRadnika)){
            return true;
        } else {
            return false;
        }
    }
}