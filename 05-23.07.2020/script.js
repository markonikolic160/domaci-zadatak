// 1. zadatak 

let f = 100 ;
let k ;

// iz farenhajta u kelvine 
let c = (f - 32) * 5/9 ;
k = Math.round(c + 273.15);
console.log(`Temperatura posle konverzije ${f} farenhajta je ${k} kelvina`);

// iz kelvina u farenhajte 
k = 300 ;
c = k - 273.15 ;
f = Math.round(c * 9 / 5 + 32);
console.log(`Temperatura posle konverzije ${k} kelvina je ${f} farenhajta`); 


// 2. zadatak 

let n = 27;
let a = 9 ;
let b = a + 2 ;

let ostalo = n - a - b ;
console.log(`Citaocu je ostalo da procita jos ${ostalo} poglavlja knjige.`)

// 3. zadatak 

let p = 30 ;
let m = 40 ;
k = 20 ;


// cena proizvoda x
let x = (p + m - k) / 2;

// kusur za Peru 
let pk = p - x ;

// kusur za Miku 
let mk = m - x ;

// ukoliko se podrazumeva da su obojica dali vise od cene proizvoda
console.log(`Pera je dobio ${pk} dinara kusura. Mika je dobio ${mk} dinara kusura.`);

// ukoliko je neko dao manje i treba doplata
if(pk<0){
    console.log("Pera treba da doda jos " + Math.abs(pk) + "dinara!!!");
} else {
    console.log(`Pera je dobio ${pk} dinara kusura.`);
}

if(mk<0){
    console.log("Mika treba da doda jos " + Math.abs(mk) + "dinara!!!");
} else {
    console.log(`Mika je dobio ${mk} dinara kusura.`);
}
