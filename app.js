'use strict'

async function getUrlImagens(raca) {
    const url       = `https://dog.ceo/api/breed/${raca}/images`
    const response  = await fetch(url) //Como irei navegar na API que retorna as imagens, usarei o async e await na função
    const data      = await response.json()
    return data.message
}

function criarFoto(urlFoto){
    const foto      = document.createElement('img')
    foto.src        = urlFoto
    foto.className  = 'foto'
    return foto
}


async function preencherGaleria() {
    const galeria       = document.getElementById('container-galeria')
    const raca          = document.getElementById('raca').value
    const urlImagens    = await getUrlImagens(raca)

    const fotos = urlImagens.map(criarFoto) //Armaneza as fotos dos cachorros. O .map() funciona como um callback

    galeria.replaceChildren(...fotos)
}

document.getElementById('pesquisar').addEventListener('click', preencherGaleria)