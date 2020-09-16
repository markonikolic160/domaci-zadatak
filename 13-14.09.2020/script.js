console.log("provera domaci");
export {prosekPlate, nizRadnika};
import {Osoba} from "./osobe-zaposleni/osoba.js";
import {Zaposleni} from "./osobe-zaposleni/zaposleni.js";
import {Sportisti} from "./sport/sportisti.js";
import {Kosarkas} from "./sport/kosarkas.js";

//////////////////////////////////////////////////////////////////////////////
let o1 = new Osoba("Mika","Mikic",1990);
console.log(o1.ime);

let radnik1 = new Zaposleni("Petar", "Petrovic", 1980, 50000, "radnik");
let radnik2 = new Zaposleni("Jovan", "Jovanovic", 1975, 51250, "odrzavanje");
let radnik3 = new Zaposleni("Marko", "Markovic", 1982, 75200, "menadzer");
let radnik4 = new Zaposleni("Nikola", "Nikolic", 1985, 80500, "direktor");
let radnik5 = new Zaposleni("Milos", "Milosevic", 1986, 48650, "blagajnik");

let nizRadnika = [radnik1, radnik2, radnik3, radnik4, radnik5];

let prosekPlate = niz =>{
    let zbir = 0;
    niz.forEach(elem =>{
        zbir += elem.plata;
    });
    return zbir / niz.length;
}

console.log(prosekPlate(nizRadnika));
console.log(radnik1.iznadProseka());
console.log(radnik4.iznadProseka());

////////////////////////////////////////////////////////////////

let sportista1 = new Sportisti("Janko", "Jankovic", 1983, "Beograd");
console.log(sportista1.grad);

let kosarkas1 = new Kosarkas("Marko", "Nikolic", 1987, "Pirot", [15, 20, 16, 17, 12, 9, 26, 29]);
let kosarkas2 = new Kosarkas("Nikola", "Jokic", 1995, "Sombor", [25, 32, 35, 27, 34, 26, 28, 34, 24, 33]);
let kosarkas3 = new Kosarkas("Luka", "Doncic", 1999, "Ljubljana", [19, 22, 25, 17, 39, 24, 23]);
let kosarkas4 = new Kosarkas("Boban", "Marijanovic", 1988, "Boljevac", [5, 10, 15, 17, 14, 6, 13, 12]);
let kosarkas5 = new Kosarkas("Nemanja", "Bjelica", 1988, "Beograd", [8, 13, 25, 8, 17, 14, 3, 16, 9, 11, 15]);
let nizKosarkasa = [kosarkas1, kosarkas2, kosarkas3, kosarkas4, kosarkas5];

let maxGames = kosarkas1.poeni.length;
let maxPlayer = kosarkas1;
let najviseUtakmica = niz => {
    niz.forEach(elem =>{
        if(elem.poeni.length>maxGames){
            maxGames = elem.poeni.length;
            maxPlayer=elem;
        }
    });
    return maxPlayer;
}
najviseUtakmica(nizKosarkasa).ispisKosarkasa();

console.log(kosarkas1.prosekPoena());

let maxScore = nizKosarkasa[0].najvisePoena();
let maxScorePlayer = nizKosarkasa[0];
let najvisePoenaSvi = niz =>{
    niz.forEach(elem =>{
        if(elem.najvisePoena()>maxScore){
            maxScore=elem.najvisePoena();
            maxScorePlayer=elem;
        }
    });
    return maxScorePlayer;
}
najvisePoenaSvi(nizKosarkasa).ispisKosarkasa();


let najveciProsek = nizKosarkasa[0].prosekPoena();
let najveciProsekIgrac = nizKosarkasa[0];
let prosekPoenaMax = niz =>{
    niz.forEach(elem =>{
        if(elem.prosekPoena()>najveciProsek){
            najveciProsek=elem.prosekPoena();
            najveciProsekIgrac=elem;
        }
    });
    return najveciProsekIgrac;
}
prosekPoenaMax(nizKosarkasa).ispisKosarkasa();