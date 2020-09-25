export class ChatUi {
    constructor(liPo){
        this.lista = liPo;
    }
    set lista (lp){
        this._lista = lp;
    }
    get lista (){
        return this._lista;
    }
    clear (){
        this.lista.innerHTML = "";
    }
    formatDate(date){        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        
        let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;

        return strDate;
    }
    
    templateLi(data){
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);

        
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        if(isToday(newDate)){

            strDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        } 


        let cls = '';
        let un = localStorage.getItem('username');
        if(data.username == un){
            cls = 'current';
        }
        
        let htmlLi = 
        `<li class="allMsgs" data-un="${data.username}">
        <span class="username">${data.username} : </span>
        <span class="message">${data.message} </span>
        <div class="date">${strDate}</div>
        </li>`;
        this.lista.innerHTML += htmlLi;
    }
}

const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
};