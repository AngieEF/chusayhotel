var nombre =document.querySelector('#nombre');
nombre.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (nombre.value.length == ''){
        nombre.style.border = '2px solid red';
        u_times.style.display = 'block';
        u_check.style.display ='none';
      
        return  false;
    }else{
        nombre.style.border ='2px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

var numero =document.querySelector('#numero');
numero.addEventListener('keyup', function(){
        var n_times = document.querySelector('.n_times');
        var n_check = document.querySelector('.n_check');

    if (numero.value.length == 0 || numero.value.length <9 ){
        numero.style.border = '2px solid red';
        n_times.style.display = 'block';
        n_check.style.display ='none';
        return  false;
    }else{
        numero.style.border ='2px solid green';
        n_times.style.display = 'none';
        n_check.style.display = 'block';
    }

})

var correo =document.querySelector('#correo');
correo.addEventListener('keyup', function(){
    var e_times = document.querySelector('.e_times');
    var e_check = document.querySelector('.e_check');
    if (correo.value.length == ''){
        correo.style.border = '2px solid red';
        e_times.style.display = 'block';
        e_check.style.display ='none';
        return  false;
    }else{
        correo.style.border ='2px solid green';
        e_times.style.display = 'none';
        e_check.style.display = 'block';
    }
})

var mensaje =document.querySelector('#mensaje');
mensaje.addEventListener('keyup', function(){
    var m_times = document.querySelector('.m_times');
    var m_check = document.querySelector('.m_check');
    if (mensaje.value.length == 0 || mensaje.value.length >250){
        mensaje.style.border = '2px solid red';
        m_times.style.display = 'block';
        m_check.style.display ='none';
        return  false;
    }else{
        mensaje.style.border ='2px solid green';
        m_times.style.display = 'none';
        m_check.style.display = 'block';
    }
})


function validate(){
    if (nombre.value == ''){
        document.getElementById('#error').innerHTML = 'por favor completa los campos';
        return false;
    }else if(numero.value == 0 || numero.value.length <9){
        document.getElementById('error').innerHTML = 'por favor completa el numero';
        return false;
    }else{
        alert('Validación correcta');
    }
}

