console.log("js enlazado");

/*construccion de la card*/ 
/*
 */


//crear los parrafos
const tipo = document.createElement('p')
tipo.textContent = 'BootCamp'
tipo.classList.add('categoria', 'concierto')


const titulo = document.createElement('p')
titulo.textContent = 'BootCamp de Programacion en ES6'
titulo.classList.add('titulo')

const precio= document.createElement('p')
precio.textContent = '$500'
precio.classList.add('precio')


//crear parent
const info = document.createElement('div')
info.classList.add('info')

//añadir los parrafos al parent 
info.appendChild(tipo)
info.appendChild(titulo)
info.appendChild(precio)

//crear el sibling de info: img 
const imagen = document.createElement('img')
imagen.src = 'img/hacer4.jpg'


//crear div card
const card = document.createElement('div')
card.classList.add('card')
card.appendChild(imagen)
card.appendChild(info)

//vincular card al DOM actual
const contenedor = document.querySelector('.contenedor-cards')
contenedor.insertBefore(card, contenedor.children[2])



console.log(card)