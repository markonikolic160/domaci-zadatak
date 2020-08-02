// 1.zadatak

let x = 150 ; 
let y = 12 ;
let znakKolicnika = 0 ;
let brojacCelogDela = 0 ;
let deljenik = Math.abs(x) ;
let delilac = Math.abs(y) ;
let ostatak = 0 ;

//odredjivanje da li je kolicnik pozitivan ili negativan broj
if((x<0 && y<0) || (x>0 && y>0)){
    znakKolicnika = +1 ;
} else {
    znakKolicnika = -1 ;
}


if(y == 0){
    console.log("Nulom se ne deli , unesite drugi broj!");
}else if( x == 0){
    console.log("Kolicnik deljenja je " + x + " unesite drugi broj!");
}else if(deljenik<delilac){
    console.log("Nepravilan unos , potrebno je da deljenik bude veci od delioca!");
}else{
    while(deljenik>=delilac){
        deljenik -= delilac;
        brojacCelogDela++;
    }
    ostatak = Math.abs(x) - Math.abs(y) * brojacCelogDela ;
    console.log("Ceo deo je " + znakKolicnika * brojacCelogDela + " i ostatak " + ostatak);
}
   

// 2. zadatak

let n = 3 ;
let i = 1 ;
let a ;
let alfa = -0.8 ;
let beta = 0.6 ;
let suma = 0 ;

while( i<=n ){
    a = Math.sin(n+i/n);
    i++;
    if(a>=alfa && a<=beta){
        suma += a;
    }  
}
console.log(suma);

// 3. zadatak

let divSlike = document.getElementById("slike");
n = 5 ;
for(i=1; i<=n ; i++){
    divSlike.innerHTML += `<br>`;
    if(i%2 !=0){
        divSlike.innerHTML += `<img src="slike/${i}.jpg" style="border:3px solid yellow">`;
    }else {
        divSlike.innerHTML += `<img src="slike/${i}.jpg" style="border:3px dashed red">`;
    }
    
}



