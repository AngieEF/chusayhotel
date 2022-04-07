const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const numero =document.getElementById('numero');
const email= document.getElementById('email');
const mensaje =document.getElementById('mensaje');



form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nombreValue = nombre.value.trim();
    const numeroValue =numero.value.trim();
    const emailValue =email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if(nombreValue === ''){
        setErrorFor(nombre, 'No puede dejar el nombre en blanco.');
    }else{
        setSuccessFor(nombre);
    }

    if(numeroValue === ''){
        setErrorFor(numero, 'No puede dejar el nombre en blanco.');
    }else{
        setSuccessFor(numero);
    }

    if(emailValue === ''){
        setErrorFor(email, 'No puede dejar el email en blanco');
    }else{
        setSuccessFor(email);
    }
    
    if(mensajeValue === ''){
        setErrorFor(mensaje, 'No puede dejar el email en blanco');
    }else{
        setSuccessFor(mensaje);
    }
    
    
}

function setErrorFor(input, message){
    const formControl =input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= 'form-seccion error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-seccion success';

}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

