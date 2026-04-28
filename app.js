'use strict'

async function getUrlImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url) //Como irei navegar na API que retorna as imagens, usarei o async e await na função
    const data = await response.json()
    return data.message
}

function preencherGaleria() {
    const raca = document.getElementById('raca').value
    const urlImagens = getUrlImagens(raca)

    const fotos = urlImagens.map(criarFoto)
}

document.getElementById('pesquisar').addEventListener('click', preencherGaleria)