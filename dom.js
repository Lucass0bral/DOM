 window.addEventListener('load', function(){
     document.querySelector('#btn').addEventListener('click',function(){
        campovazio();
    });
     
 var elem= document.querySelectorAll('input');
 for (var i=0; i<elem.length; i++){
    elem[i].addEventListener('focus', function(){
        getfocus(this.id);
    });
    elem[i].addEventListener('blur', function(){
        getblur(this.id);
    });
 }

});

function getfocus(pId){
    var elem= document.querySelector('#'+pId);
    elem.className='focus';
}
function getblur(pId) {
    var elem= document.querySelector('#'+pId);
    if(elem.value==''){
        elem.className='error';
    }else{
        elem.className='normal';
    }
}


 function campovazio(){
    var cpf = document.querySelector('#cpf').value;
    if (cpf==''){
         alert('Campo obrigatório');
         return false;
    };
    var email = document.querySelector('#email').value;
    if (email==''){
       alert('Campo obrigatório');
        return false;
    };
    var desconto = document.querySelector('#desconto').value;
    if (desconto==''){ 
        alert('Campo obrigatório');
        return false;
    };
    alert('Enviado com Sucesso')
    return true; 
}