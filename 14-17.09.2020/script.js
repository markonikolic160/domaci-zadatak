console.log("Provera domaci zadatak");

let film1 = {
    name: "Film 1",
    director: {
        ime: "Marko",
        prezime: "Markovic"
    },
    release: 2007,
    genres: ["triler","drama"],
    rating: 9.10
};
let film2 = {
    name: "Film 2",
    director: {
        ime: "Nikola",
        prezime:"Nikolic"
    },
    release: 2012,
    genres: ["horor","drama"],
    rating: 6.8
};
let film3 = {
    name: "Film 3",
    director: {
        ime: "Petar",
        prezime: "Petrovic"
    },
    release: 2001,
    genres: ["komedija","akcija"],
    rating: 8.60
};
let film4 = {
    name: "Film 4",
    director: {
        ime: "Janko",
        prezime:"Jankovic"
    },
    release: 1996,
    genres: ["akcija","triler"],
    rating: 7.70
};

 // dodavanje filmova
 let dodajeFilm = (id, film ) =>{
 db.collection('movies').doc(id).set(film)
 .then(() =>{
     console.log("Movie sucessfully added....");
 })
 .catch(error =>{
     console.log(`Cannot add movie: ${error}`);
 });
}
dodajeFilm("movie 1", film1);
dodajeFilm("movie 2", film2);
dodajeFilm("movie 3", film3);
dodajeFilm("movie 4", film4);

// menja podatke o nekim filmovima
let updateMovie = {
    name : "Novo ime filma u bazi"
}
db.collection('movies').doc("movie 1").update(updateMovie)
 .then(() =>{
     console.log("Movie sucessfully updated....");
 })
 .catch(error =>{
     console.log(`Cannot update movie: ${error}`);
 });

 let updateMovie1 = {
     release : 1986
 }
 db.collection('movies').doc("movie 4").update(updateMovie1)
 .then(() =>{
     console.log("Movie sucessfully updated....");
 })
 .catch(error =>{
     console.log(`Cannot update movie: ${error}`);
 });

 // dodaje zanr filmu 
 db.collection('movies').doc('movie 2').update({
    genres : firebase.firestore.FieldValue.arrayUnion("triler")
})
.then(() =>{
    console.log("Movie sucessfully add genres....");
})
.catch(error =>{
    console.log(`Cannot add genres: ${error}`);
});

// brise zanr filmu
db.collection('movies').doc('movie 3').update({
    genres : firebase.firestore.FieldValue.arrayRemove("akcija")
})
.then(() =>{
    console.log("Movie sucessfully removed genres....");
})
.catch(error =>{
    console.log(`Cannot remove genres: ${error}`);
});

// menja ime ili prezime nekom reziseru 
db.collection('movies').doc('movie 3').update({
    "director.ime": "Milan"
})
.then(() =>{
    console.log("Sucessfully updated director....");
})
.catch(error =>{
    console.log(`Cannot update director: ${error}`);
});