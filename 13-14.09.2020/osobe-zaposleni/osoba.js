export class Osoba {
    constructor(ime, prez, god){
        this.ime =ime;
        this.prezime = prez;
        this.godRodjenja=god;
    }
    set ime (i){
        this._ime = i;
    }
    set prezime(p){
        this._prezime = p;
    }
    set godRodjenja(g){
        this._godRodjenja =g;
    }
    get ime(){
        return this._ime;
    }
    get prezime(){
        return this._prezime;
    }
    get godRodjenja(){
        return this._godRodjenja;
    }
    ispisOsobe(){
        console.log(this.ime, this.prezime, this.godRodjenja);
    }
}