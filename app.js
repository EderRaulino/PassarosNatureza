function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for vazio( string)sem nada
    if (!campoPesquisa) {
         section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um pássaro</p>"
        return

    } 

    campoPesquisa = campoPesquisa.toLowerCase()

    // Verifica se a seção foi encontrada no DOM (para depuração)
    //console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ";"

    // Itera sobre cada dado na lista de dados
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.descricao.toLowerCase()

  // se titulo includes compoPesquisa
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))  {
  //criar um novo elemento
  resultados += `
  <div class="item-resultado">
      <h2> 
          <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais Informações</a>
  </div>  
 `;
        // então, faça....
        // console.log(dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada item do resultado da pesquisa,
        // incluindo título, descrição e link
       
    }
}

if (!resultados) {
   resultados = "<p>Nada foi encontrado</p>"


}

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}


//console.log(dados);

