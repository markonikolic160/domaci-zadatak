

export class Chatroom {
    constructor(u, r){
        this.username=u;
        this.room =r;
        this.chats=db.collection('chats');
        this.unsub;
    }

    set username (un){
        let pomocno = un.trim().length;
        if(un.length>=2 && un.length<=10 && un != "" && un !=null && pomocno !=0){
        this._username = un;
       }else{
           alert('Unesite ispravan username');
        }
    }
    set room (r){
        this._room = r;
    }
    get username (){
        return this._username;
    }
    get room (){
        return this._room
    }

    updateUsername(newUsername){
        this.username = newUsername;
        localStorage.setItem('username', newUsername);
    }

    updateRoom(newRoom){
        this.room = newRoom;
        if(this.unsub){
            this.unsub();
        }
        localStorage.setItem('room',this.room);
    }
     async addChat (message){
         if(message.trim().length != 0){
        let date = new Date ();
        let objekat = {
            message: message,
            room: this.room,
            username: this.username,
            created_at: date
        }
    
        /*
        moze ovako da se doda
        let response = await this.chats.add(objekat);
        return response;  //vracanje promisa
        */

        db.collection('chats').doc().set(objekat)
        .then(()=>{
            console.log('uspesno dodat chat');

            document.querySelectorAll('.allMsgs').forEach(function(el){

                el.classList.remove('current');
            });

            document.querySelectorAll('[data-un="'+ localStorage.getItem('username') + '"]').forEach(function(el){ el.classList.add('current');});
        })
        .catch((error)=>{
            console.log(`nije moguce dodati chat ${error}`)
        })
    }else{
        alert("Morate uneti neku poruku!!!")
    }
}
    ///// odradjeno na casu
    getChats(callback){
        this.unsub = this.chats //ovde unsub postaje funkcija
        .where('room', '==', this.room)
        .orderBy('created_at','asc')
        .onSnapshot( snapshot =>{
            snapshot.docChanges().forEach( change =>{
                if(change.type == 'added'){
                    //upddate chata(dodaj novu poruku na ekrn lil konzolu)
                    callback(change.doc.data());
                }
            });
        });
    }
}

