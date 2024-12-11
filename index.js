//variables
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const textarea = document.querySelector('#textarea');
const btnEnviar =document.querySelector('#btnEviar');
const btnVaciar =document.querySelector('#btnVaciar');
const formulario = document.querySelector('#form');
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario)
    textarea.addEventListener('blur',validarFormulario)
}
//funciones
function iniciarApp(){
    btnEnviar.disabled = true;
}


function validarFormulario(e){
    e.preventDefault()
    if(e.target.value.length > 0){

        

        e.target.style.border = 'solid green';
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

    }else{
        e.target.style.border = 'solid red';
        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){
        const er = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(er.test( e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
        }else{
            e.target.style.border = 'solid red';
            mostrarError('Email no válido')
        }

    }

    if(email.value !== '' && mensaje.value !== '' && textarea.value !== '' ){
        console.log('se puede enviar')
    }
    
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}
