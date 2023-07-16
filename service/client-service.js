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
  // Cria uma nova Promise
  const promise = new Promise((resolve, reject) => {
    // Cria um novo XMLHttpRequest
    const http = new XMLHttpRequest();

    // Abre uma nova requisição GET para um endpoint específico
    http.open("GET", "http://localhost:3000/profile");

    // Envia a requisição
    http.send();

    // Define o que acontece quando a requisição é carregada
    http.onload = () => {
      // Se o status HTTP for 400 ou mais, rejeita a Promise com a resposta como motivo
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        // Se o status HTTP for menor que 400, resolve a Promise com a resposta como valor
        resolve(JSON.parse(http.response));
      }
    };
  });

  // Retorna a Promise
  return promise;
};

// Chama a função listaClientes
listaClientes().then((data) => {
  // Para cada elemento nos dados retornados, anexa uma nova linha à tabela
  data.forEach((element) => {
    tabela.appendChild(criaNovaLinha(element.nome, element.email));
  });
});
