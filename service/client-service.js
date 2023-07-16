// Define uma função de criação de nova linha
const criaNovaLinha = (nome, email) => {
  // Cria um novo elemento de linha de tabela
  const linhaNovoCliente = document.createElement("tr");

  // Define o conteúdo da linha com os dados passados e alguns elementos HTML estáticos
  const conteudo = ` 
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
    </td>
    `;

  // Adiciona o conteúdo à nova linha
  linhaNovoCliente.innerHTML = conteudo;

  // Retorna a nova linha
  return linhaNovoCliente;
};

// Seleciona a tabela do documento pelo seu atributo data-tabela
const tabela = document.querySelector("[data-tabela]");

// Define uma função para listar os clientes
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`) //fetch faz o get e devolde uma promise já
    .then(resposta => {
      return resposta.json(); //retorna uma promise
    })
}
  

    // Chama a função listaClientes
listaClientes().then((data) => {
  // Para cada elemento nos dados retornados, anexa uma nova linha à tabela
  data.forEach((element) => {
    tabela.appendChild(criaNovaLinha(element.nome, element.email));
  });
});
