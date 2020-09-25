import {Chatroom} from "./chat.js"
import {ChatUi} from "./ui.js";

//Provera username u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.username){
        return localStorage.username;
    } else {
        return "anonymous";
    }
}


//kreiranje objekta  chatui
// 1. dohvatanje cele ul liste iz html

//ako bi ovo stavili dole u submit forme svaki put bi dodavalo
//ceo chat

// listener na formu
//uzme se vrednost polja
//posalje se  u bazu pomocu addChat metode iz chatroom

/*moze i ovako da se odradi nije greska
let btnSend = document.querySelector("#btnSend");
btnSend.addEventListener('click',event =>{
    event.preventDefault();
    let message = document.querySelector("#inputMessage").value;
    objekat1.addChat(message)
    .then()
    .catch(err =>{
        alert(`doslo je do greske : ${err}`)
    })
    db.collection('chats').doc()
    .then()
    .catch(err =>{
        alert(`greska : ${err}`);
    })
})
*/


//////
let izborSobe = document.querySelector('nav');

izborSobe.addEventListener('click',event =>{
   
    if(event.target.tagName === 'BUTTON'){
       
       
        let soba = event.target.getAttribute('id');
        objekat1.updateRoom(soba);
        chatUI1.clear();
        objekat1.getChats(data =>{
        chatUI1.templateLi(data);

        document.querySelectorAll('.btn').forEach(function(el){

                el.classList.remove('oboji');
        });

        event.target.classList.add('oboji');
        });
    } 
});

let checkRoom = () => {
    if(localStorage.room){
        return localStorage.room;
    }else {
        return "general";
    }
}
let objekat1 = new Chatroom(checkUsername(),checkRoom());


let ulChatList = document.querySelector('ul');
let chatUI1 = new ChatUi(ulChatList);
objekat1.getChats( data =>{
    chatUI1.templateLi(data);
});
//ispis poruke na ekran i u bazu
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector("#inputMessage")
formMessage.addEventListener('submit', e =>{
    e.preventDefault();
    let message = inputMessage.value;
    objekat1.addChat(message)
        .then(function(){
            formMessage.reset();
        })
        .catch(error => console.log(error));

})

// update korisnickog imena

let formUpdateUsername = document.querySelector("#formUsername");
let inputUsername = document.querySelector("#inputUsername");


formUpdateUsername.addEventListener('submit', event =>{
    event.preventDefault();
    let userN = inputUsername.value;
    objekat1.updateUsername(userN);
    formUpdateUsername.reset(); 

    let p = document.getElementById('userUpdate')
    p.innerHTML = `Promenjeno korisnicko ime u : ${userN}`;

    setTimeout(function(){ 
        document.getElementById("userUpdate").innerHTML = "";
    }, 3000);

});