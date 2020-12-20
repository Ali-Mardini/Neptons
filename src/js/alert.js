import {convertToObject} from '../js/helper';

export class Alert{

    // close alert
    closeAlert(el){

        console.log(el);
        el.style.display = "none";
    }

    toastFadout(el){
        setTimeout(function(){
            
        },3000);
    }
}