let form=document.querySelector('#contact-form');
form.onsubmit=function(event){
    debugger
    if (!form.checkValidity()){
        event.preventDefault();
        return false;
    }
    else{
        return true;
    }
}
let cRadio=document.querySelector('#comment');
cRadio.onchange=function(){
    if(cRadio.checked){
        document.querySelector('#hrdiv').classList.add('hide');
    }
}
let qRadio=document.querySelector('#question');
qRadio.onchange=function(){
    if(qRadio.checked){
        document.querySelector('#hrdiv').classList.add('hide');
    }
}
let hRadio=document.querySelector('#hiring');
hRadio.onchange=function(){
    if(hRadio.checked){
        document.querySelector('#hrdiv').classList.remove('hide');
    }
}