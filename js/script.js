import {barcelona, roma, paris} from './pais.js';

const enlaces = document.querySelectorAll('a');
const titulo = document.getElementById('titulo');
const subTitulo = document.getElementById('subtitulo');
const parrafo = document.getElementById('parrafo');


enlaces.forEach(function(e) {
    e.addEventListener('click', function() {

        enlaces.forEach(function(e) {
            e.classList.remove('active');
        });

        this.classList.add('active');

        let obj = obtenerContenido(e.textContent);
        titulo.innerHTML = obj.titulo;
        subTitulo.innerHTML = obj.subtitulo;
        parrafo.innerHTML = obj.parrafo;
    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma, 
        'Paris' : paris
    }
    return contenido[enlace];
}