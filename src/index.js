import {convertToObject} from './js/helper';
import {Alert} from './js/alert';

var closeAlert = document.querySelectorAll('div.alert > button');

console.log(closeAlert);

if(closeAlert != null){

    for(var i= 0; i < closeAlert.length; i++){
        console.log(closeAlert[i]);
        closeAlert[i].addEventListener("click",function(){
            console.log(this)

            var el = this.parentElement;
            console.log(el);
            var alert = new Alert();

            alert.closeAlert(el);
        });
    }
    
}

