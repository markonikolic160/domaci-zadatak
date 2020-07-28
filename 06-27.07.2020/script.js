// 1. zadatak
let prviSatiP = 13 ;
let prviMinP = 55 ;
let prviSatiK = 20 ;
let prviMinK = 55 ;

let drugiSatiP = 7 ;
let drugiMinP = 20 ;
let drugiSatiK = 17;
let drugiMinK = 45 ;

let prviPocetakMin = prviSatiP * 60 + prviMinP ;
let prviKrajMinuti = prviSatiK * 60 + prviMinK ;
let drugiPocetakMin = drugiSatiP * 60 + drugiMinP ;
let drugiKrajMinuti = drugiSatiK * 60 + drugiMinK ;

let bojenje ;
let vrednosti ;
let preklapanje ;
let preklapanjeH ;
let preklapanjeM ;


if(drugiPocetakMin > prviKrajMinuti || prviPocetakMin > drugiKrajMinuti){
    console.log("Nema preklapanja");
    bojenje = document.getElementById("preklapanje").style.color = "red";
    document.getElementById("preklapanje").innerHTML = "Nema preklapanja";
} else {
    vrednosti = [prviPocetakMin,prviKrajMinuti,drugiPocetakMin,drugiKrajMinuti];
    vrednosti = vrednosti.sort(function(a, b){return b-a});
    preklapanje = vrednosti[1] - vrednosti[2];
    preklapanjeH = Math.floor(preklapanje / 60) ;
    preklapanjeM = preklapanje % 60 ;
    console.log(`Preklapanje je ${preklapanjeH} sata i ${preklapanjeM} minuta`);
    bojenje = document.getElementById("preklapanje").style.color = "red";
    document.getElementById("preklapanje").innerHTML
    = `Preklapanje je ${preklapanjeH} sata i ${preklapanjeM} minuta`;
}

// 2. zadatak 

let v = 15;
let n = 10 ;
let korona = v / n ;
let mere ;
let visak ;


if(n == 0){
    console.log("U kaficu nema gostiju.");
    bojenje = document.getElementById("poruka").style.color = "blue";
    document.getElementById("poruka").innerHTML = "U kaficu nema gostiju.";
} else if (korona >= 3){
    console.log("DA -- Mere se postuju.");
    bojenje = document.getElementById("poruka").style.color = "blue";
    document.getElementById("poruka").innerHTML = "DA -- Mere se postuju.";
  } else{
    console.log("Ne -- Ne postoji dovoljno rastojanje!!!");
    visak = Math.ceil((n * 3 - v)/3) ;
    console.log("Potrebno je da izadje " + visak + " ljudi iz kafica !!!");
    bojenje = document.getElementById("poruka").style.color = "blue";
    document.getElementById("poruka").innerHTML 
    = "NE -- mere se ne postuju. Potrebno je da izadje " + visak 
    + " ljudi iz kafica !!!";
    }


// 3. zadatak 

let mesec = new Date().getMonth() + 1;
let datum = new Date().getDate();
let godina = new Date().getFullYear();
let ostatak ;

switch(mesec){
    case 1:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana.");
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 2:
        if((godina % 4 == 0 && godina % 100 !=0) || godina % 400 == 0){
        ostatak = 29 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        } else {
            ostatak = 28 - datum ;
            console.log("Do kraja meseca ima jos " + ostatak + " dana." );
            bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
            document.getElementById("doKrajaMeseca").innerHTML 
            = "Do kraja meseca ima jos " + ostatak + " dana.";
        }
        break;
    case 3:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 4:
        ostatak = 30 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 5:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 6:
        ostatak = 30 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 7:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 8:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 9:
        ostatak = 30 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 10:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 11:
        ostatak = 30 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    case 12:
        ostatak = 31 - datum ;
        console.log("Do kraja meseca ima jos " + ostatak + " dana." );
        bojenje = document.getElementById("doKrajaMeseca").style.color = "green";
        document.getElementById("doKrajaMeseca").innerHTML 
        = "Do kraja meseca ima jos " + ostatak + " dana.";
        break;
    }
    