function fetchApi(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then((fetchData) => {
        return fetchData.json()
    })
  .then((jsonData) => 
    jsonData.forEach(e => {
      insereDataMain(e.nome,e.id)
    })
    )
  .catch((error) => console.error(error))
}

function insereDataMain(nomeEstado,idEstado){
    
    const listaEstados = document.getElementById("lista-estados")
    const li = document.createElement('li')
    const h5 = document.createElement('h5')
    h5.textContent = nomeEstado;
    const a = document.createElement('a')
    a.href = `./municipios/index.html?uf=${nomeEstado}&id=${idEstado}`
    a.appendChild(h5)
    li.appendChild(a)
    listaEstados.appendChild(li)
}

function iniciaLocalStorage(){
  if(localStorage.getItem("favoritos") == null){
    const municipiosFavoritados = {
      municipio: ""
    }
    localStorage.setItem("favoritos",JSON.stringify(municipiosFavoritados))
  }
}

/*
function criaFooter(){
  footer = document.createElement('footer')
  p = document.createElement('p')
  p.textContent = "© 2024 Prova de Programação Web"
  footer.appendChild(p)
  document.body.appendChild(footer)
}
*/
iniciaLocalStorage()
fetchApi()
document.getElementById("footer").hidden = false;
//criaFooter()