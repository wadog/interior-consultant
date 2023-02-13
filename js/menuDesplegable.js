let btn = document.querySelector('button');
let span = document.querySelector('span');
let menuDesplegable = document.querySelector('.menuDesplegable');
let section =  document.querySelector('section');
let logoInicio = document.querySelector('.navbar-brand');

btn.addEventListener('click', ()=>{
    if(span.innerHTML === 'close'){
        span.innerHTML = 'menu';
        console.log(span.innerHTML)
    }else{
        span.innerHTML = 'close';
    }
    menuDesplegable.classList.toggle('mostrar');
    section.classList.toggle('ocultar');
    logoInicio.classList.toggle('ocultar');
})