// 1. zadatak 

let suma = (n,m) => {
    let sumaKubova = 0 ;
    for(let i = n ; i <= m ; i++){
        sumaKubova += i**3 ;
    }
    return sumaKubova;
}
console.log("Suma kubova brojeva od n do m je: " + suma(1,5));

// 2. zadatak

let godine = (godRodjenja) => {
    let x = new Date();
    let starost = x.getFullYear() - godRodjenja;
    return starost;
}
console.log("Osoba ima: " + godine(1987) + " godina");

// 3.zadatak

let deljiv = ( n , m , k ) => {
    let brojac = 0;
    for(let i = n ; i <= m ; i++){
        if(i%k == 0){
            brojac++;
        }
    }
    console.log(brojac);
}
deljiv(10,50,4);