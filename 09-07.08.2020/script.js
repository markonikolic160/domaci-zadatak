let nizDomaciZadatak = [12,-6,7,2,-3,14,9,1];

// 1. zadatak 

let indexMinElem = niz => {
    let min = niz[0];
    let index = 0;
    for(let i = 0; i < niz.length ; i ++){
        if(niz[i] < min){
            min = niz[i];
            index = i ;
        }
    }
    return index ;
}
console.log("Index minimalnog elementa niza je: " + indexMinElem(nizDomaciZadatak));

// 2. zadatak 

let sumaParIndex = niz => {
    let suma = 0;
    for(let i = 0 ; i < niz.length ; i++){
        if(i%2 == 0){
            suma += niz[i];
        }
    }
    return suma ;
}
console.log("Suma elemenata sa parnim indexom je : " + sumaParIndex(nizDomaciZadatak));

// 3. zadatak 

let promenaZnaka = niz => {
    for(i = 0 ; i < niz.length ; i++){
        if(niz[i]%2 !=0 && i%2 == 0){
            niz[i] = niz[i] * -1 ;
        }
    }
    console.log(niz);
}

promenaZnaka(nizDomaciZadatak);