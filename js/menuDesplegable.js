let btn = document.querySelector('button');
let menuDesplegable = document.querySelector('.menuDesplegable');
let section =  document.querySelector('section')
console.log(section);

btn.addEventListener('click', ()=>{
    console.log('aprieto boton')
    menuDesplegable.classList.toggle('mostrar')
    section.classList.toggle('ocultar')
    console.log(menuDesplegable)
})