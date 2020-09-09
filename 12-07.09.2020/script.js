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
let tajmer = null;

dugme.addEventListener('click',event => {
    event.preventDefault();
    let najTezinaVoca = async () => {
        let response = await fetch("./json/fruits.json");
        if(response.status !=200){
            throw new Error('Doslo je do greske!!!!');
        }
        let data = await response.json();
        //console.log(data);
        let najteze = parseInt(data[0].kilogram);
        let najtezeIme = data[0].name;
        data.forEach(elem =>{
            if (parseInt(elem.kilogram)>najteze){
                najteze = elem.kilogram;
                najtezeIme = elem.name;
            }
        });
        return [najtezeIme,najteze];
    
    }
    najTezinaVoca()
    .then(vracanje =>{
        paragraf.innerHTML = "Voce koje ima najvecu tezinu je: "+vracanje[0]+ " --- " + vracanje[1]+" kg.";
    })
    .catch(err =>{
        console.log(err);
    })

    if(tajmer === null){
        tajmer = setTimeout(()=>{
            let najmanjePovrce = async () => {
                let response = await fetch("./json/vegetables.json");
                if(response.status !=200){
                    throw new Error('Doslo je do greske!!!!');
                }
                let data = await response.json();
                //console.log(data);
                let najmanje = parseInt(data[0].kilogram);
                let najmanjeIme = data[0].name;
                data.forEach(elem =>{
                    if (parseInt(elem.kilogram)<najmanje){
                        najmanje = elem.kilogram;
                        najmanjeIme = elem.name;
                    }
                });
                return [najmanjeIme,najmanje];
            
            }
            najmanjePovrce()
            .then(vracanje =>{
                paragraf.innerHTML = "Povrce koje ima najmanju tezinu je: "+vracanje[0]+ " --- " + vracanje[1]+" kg.";
            })
            .catch(err =>{
                console.log(err);

            })
        },2500);
        tajmer = null;
    }
}
);

