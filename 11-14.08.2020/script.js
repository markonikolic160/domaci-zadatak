let film1 = {
    naziv: "The good,the bad,the ugly",
    reziser: "Sergio Leone",
    trajanje: 178,
    putanja: "slike/Dobar.jpg",
    brojFilmova : function(){
        let counter = 0;
        movies.forEach(elem =>{
            if(this.reziser==elem.reziser){
                counter++
            }
        });
        return counter;
    }
}
let film2 = {
    naziv: "Schindler's list",
    reziser: "Steven Spielberg",
    trajanje: 195,
    putanja: "slike/Lista.jpg",
    brojFilmova : function(){
        let counter = 0;
        movies.forEach(elem =>{
            if(this.reziser==elem.reziser){
                counter++
            }
        });
        return counter;
    }
}
let film3 = {
    naziv: "A fistful of dollars",
    reziser: "Sergio Leone",
    trajanje: 99,
    putanja: "slike/Dolari.jpg",
    brojFilmova : function(){
        let counter = 0;
        movies.forEach(elem =>{
            if(this.reziser==elem.reziser){
                counter++
            }
        });
        return counter;
    }
}
let film4 = {
    naziv: "Rain man",
    reziser: "Barry Levinson",
    trajanje: 133,
    putanja: "slike/Kisni.jpg",
    brojFilmova : function(){
        let counter = 0;
        movies.forEach(elem =>{
            if(this.reziser==elem.reziser){
                counter++
            }
        });
        return counter;
    }
}
let film5 = {
    naziv: "The prestige",
    reziser: "Christopher Nolan",
    trajanje: 178,
    putanja: "slike/Prestige.jpg",
    brojFilmova : function(){
        let counter = 0;
        movies.forEach(elem =>{
            if(this.reziser==elem.reziser){
                counter++
            }
        });
        return counter;
    }
}

let movies = [film1,film2,film3,film4,film5];

// Kreiranje tabele i njenih elemenata za svaki objekat iz niza objekata
let table = document.createElement('table');
table.id = 'tabelaFilmovi';
document.body.appendChild(table);

movies.forEach(film =>{
    let red = document.createElement('tr');
    table.appendChild(red);
    let poljeSlika = document.createElement('td');
    red.appendChild(poljeSlika);
    let poster = document.createElement('img');
    poster.src = `${film.putanja}`;
    poster.style.maxWidth = "150px";
    poljeSlika.appendChild(poster);
    let poljeTekst = document.createElement('td');
    red.appendChild(poljeTekst);
    poljeTekst.id = `${film.naziv}`;
    poljeTekst.textContent = `${film.naziv}---${film.reziser}---${film.trajanje}---minuta`;
});

// Kreiranje divova
let div1 = document.createElement('div');
document.body.appendChild(div1);

let div2 = document.createElement('div');
document.body.appendChild(div2);

let div3 = document.createElement('div');
document.body.appendChild(div3);

let div4 = document.createElement('div');
document.body.appendChild(div4);

// Boja pozadine parnih i neparnih redova
let sviRedovi = document.querySelectorAll('tr');
sviRedovi.forEach((elem,i) => {
    if(i%2==0){
        elem.style.backgroundColor = "grey";
    } else {
        elem.style.backgroundColor = "yellow";
    }
});

// Film sa najduzim nazivom i upis u prvi div
let najveciNaziv = arr => {
    let maxNazivBr = arr[0].naziv.length;
    let maxNaziv = arr[0].naziv;
    arr.forEach(elem => {
        if(elem.naziv.length>maxNazivBr){
            maxNazivBr = elem.naziv.length;
            maxNaziv = elem.naziv;
        }
    });
    return maxNaziv;
};
div1.textContent = `Najduzi naziv filma je : ${najveciNaziv(movies)}`;

//  Najzastupljeniji reziser i upis u drugi div
let najzastupljeniji = arr => {
    let najvise = film1.brojFilmova();
    let najRez = film1.reziser;
    arr.forEach(elem =>{
        if(elem.brojFilmova()>najvise){
            najvise=elem.brojFilmova();
            najRez = elem.reziser;
        }
    });
    return najRez;
}
div2.textContent = `Najzastupljeniji reziser je  : ${najzastupljeniji(movies)}`;

// Brojac filmova duzih od dva sata i upis u treci div
let counter = 0 ; 
movies.forEach(elem =>{
    if(elem.trajanje>120){
        counter++;
    }
});
div3.textContent = `Broj filmova duzih od dva sata je : ${counter}`;

// Naizmenicno dodavane alt tagova i teksta slikama
let sveSlike = document.querySelectorAll('img');
sveSlike.forEach((slika,i)=> {
    if(i%2==0){
        slika.setAttribute('alt',"Alterntivni tekst slike");
    }
})

// Brojnje slika koje imaju neki alternativni tekst i upis u cetvrti div
let brojacAltText = arr =>{
    let brojacAlt = 0;
    sveSlike.forEach(elem => {
        if(elem.alt.length){
            brojacAlt++;
        }  
    });
    return brojacAlt;
}
div4.textContent = `Broj slika koje imaju zadat alt tekst je: ${brojacAltText(sveSlike)}`;

// Boldirani naziv filma ukoliko traje duze od dva sata
movies.forEach(film => {
    if(film.trajanje>120){
        let boldirano = document.getElementById(`${film.naziv}`);
        let boldNaziv = film.naziv.bold();
        boldirano.innerHTML = `${boldNaziv}---${film.reziser}---${film.trajanje}---minuta`;
    }
});

// Promena fonta svim divovima
let sviDivovi = document.querySelectorAll('div');
sviDivovi.forEach(div =>{
    div.style.fontSize = "25px";
});

