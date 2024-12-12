//variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const textarea = document.querySelector('#textarea');
const btnEnviar =document.querySelector('#btnEnviar');
const btnVaciar =document.querySelector('#btnVaciar');
const formulario = document.querySelector('#form');
const er = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    textarea.addEventListener('blur',validarFormulario);
    btnEnviar.addEventListener('click',enviarEmail);
    btnVaciar.addEventListener('click', resetForm)
}

//funciones
function iniciarApp(){
    btnEnviar.classList.add('deshabilitado');
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

    if(er.test(email.value) && asunto.value !== '' && textarea.value !== '' ){
        console.log('se puede enviar')
        btnEnviar.classList.remove('deshabilitado');
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

function enviarEmail(e){
    e.preventDefault();
    const spinner = document.querySelector('.spinner');
    spinner.classList.remove('ocultar')
    setTimeout(()=>{
        spinner.classList.add('ocultar')
        const parrafo = document.createElement('p');
        parrafo.style.margin = '10px';
        parrafo.textContent = 'Enviado correctamente';
        btnEnviar.before(parrafo);

        setTimeout(()=>{
            parrafo.remove();
            resetForm();
        },3000)
    },2000);
}

function resetForm(){
    formulario.reset();
    iniciarApp();
}