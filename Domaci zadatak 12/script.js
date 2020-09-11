console.log("provera");

// Najpribliznija tezina prosecnoj tezini voca iz fruits.json
let closeAvr = async () => {
    let response = await fetch("./json/fruits.json");

    if(response.status !=200){
        throw new Error('Doslo je do greske!!!!');
    }

    let data = await response.json();
    //console.log(data);
    let sum = 0;
    let average = 0;
    data.forEach(elem =>{
      sum += parseInt(elem.kilogram);
    })
    average = Math.round(sum/data.length);
    console.log(average);
    let najblizi = Math.abs((parseInt(data[0].kilogram)) - average);
    let imeVoca = data[0].name;
    data.forEach(elem => {
        if( Math.abs(parseInt(elem.kilogram) - average) <  najblizi  ){
            najblizi = Math.abs(parseInt(elem.kilogram) - average);
            imeVoca = elem.name;
        }
    });
    return imeVoca;

}
closeAvr()
.then(imeVoca =>{
    console.log("Voce cija je tezina najpribliznija prosecnoj tezini svog voca je: " + imeVoca +"!!!");
})
.catch(err =>{
    console.log(err);
})

// Drugi zadatak 
let dugme = document.getElementById('dugme');
let paragraf = document.getElementById('ispis');

dugme.addEventListener('click',event => {
    event.preventDefault();
    paragraf.innerHTML = "";
    let voceIpovrce = async () => {
        let response = await fetch("./json/fruits.json");
        if(response.status !=200){
            throw new Error('Doslo je do greske!!!!');
        }
        let data = await response.json();
        //console.log(data);
        let najtezeVoce = parseInt(data[0].kilogram);
        let imeVoce = data[0].name;
        data.forEach(elem =>{
            if (parseInt(elem.kilogram)>najtezeVoce){
                najtezeVoce = elem.kilogram;
                imeVoce = elem.name;
            }
        })
        paragraf.innerHTML += "Najteze voce je: " + imeVoce + " --- " + najtezeVoce + " kg. <br>"

        response = await fetch("./json/vegetables.json");
        if(response.status !=200){
            throw new Error('Doslo je do greske!!!!');
        }
        data = await response.json();
        //console.log(data);
        let najmanjePovrce = parseInt(data[0].kilogram);
        let imePovrce = data[0].name;
        data.forEach(elem =>{
            if (parseInt(elem.kilogram)<najmanjePovrce){
                najmanjePovrce = elem.kilogram;
                imePovrce = elem.name;
            }
        })
        paragraf.innerHTML += " Najlakse povrce je: " + imePovrce + " --- " +najmanjePovrce + " kg."
        

    }
voceIpovrce();

});

