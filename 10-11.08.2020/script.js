let napraviDiv = document.createElement('div');
napraviDiv.id = 'zadatak';
document.body.appendChild(napraviDiv);

let knjiga1 = {
    naziv: "Covek po imenu Uve",
    autor: "Fredrik Bakman",
    cena: 1199,
    putanja: "slike/Uve.jpg"
}

let knjiga2 = {
    naziv: "Zakon cutanja",
    autor: "Mario Puzo",
    cena: 800,
    putanja: "slike/Zakon.jpg"
}

let knjiga3 = {
    naziv: "Nikom ni reci",
    autor: "Harlan Koben",
    cena: 990,
    putanja: "slike/Koben.jpg"
}

let knjiga4 = {
    naziv: "Magbet",
    autor: "Ju Nesbe",
    cena: 1199,
    putanja: "slike/Magbet.jpg"
}

let knjiga5 = {
    naziv: "Gomora",
    autor: "Roberto Savijano",
    cena: 759,
    putanja: "slike/Gomora.jpg"
}

let books = [knjiga1,knjiga2,knjiga3,knjiga4,knjiga5];

let ukupnaCena = arr => {
    let suma = 0;
    arr.forEach(knjiga => {
        suma += knjiga.cena
    });
    return suma;
};

let prosek = arr => {
    let suma = 0;
    let brojac = 0;
    arr.forEach(knjiga => {
        suma += knjiga.cena;
        brojac++;
    });
    return suma/brojac;
};


let upis = "<table>";
books.forEach( knjiga => {
    upis += `<tr><td><img src="${knjiga.putanja}" style="width:150px;"></td>
    <td><p id="${knjiga.naziv}">${knjiga.naziv}---${knjiga.autor}---${knjiga.cena}  dinara. </p></td></tr>`;
} );
upis += `<tr><td><p id="suma">UKUPNO :</p></td> <td><p>${ukupnaCena(books)} dinara.</p></td></tr>`
upis += "</table>";
let divTabela = document.getElementById("zadatak");
divTabela.innerHTML += upis;

let ispodProseka = arr => {
    arr.forEach(stavka => {
    if(stavka.cena<prosek(books)){
        document.getElementById(stavka.naziv).style.color = "blue";
    }else {
        document.getElementById(stavka.naziv).style.color = "grey";
    }
   });
}
ispodProseka(books);

let maxCena = arr => {
    let najskuplje = arr[0].cena;
    arr.forEach(stavka => {
        if(stavka.cena>najskuplje){
            najskuplje = stavka.cena;
        }
    });
    return najskuplje;
}

let minCena = arr => {
    let najjeftinije = arr[0].cena;
    arr.forEach(stavka => {
        if(stavka.cena<najjeftinije){
            najjeftinije = stavka.cena;
        }
    });
    return najjeftinije;
}

let brojMaksimume = arr => {
    let brojacMaks = 0 ;
    arr.forEach(stavka => {
        if(stavka.cena == maxCena(books)){
            brojacMaks++
        }
    });
    return brojacMaks;
}

let brojMinimume = arr => {
    let brojacMin = 0 ;
    arr.forEach(stavka => {
        if(stavka.cena == minCena(books)){
            brojacMin++
        }
    });
    return brojacMin;
}

function maxOrMin (a,b){
    if(a>b){
        document.getElementById("suma").style.color = "purple";
    } else {
        document.getElementById("suma").style.color = "blue";
    }
}
maxOrMin(brojMaksimume(books),brojMinimume(books));

