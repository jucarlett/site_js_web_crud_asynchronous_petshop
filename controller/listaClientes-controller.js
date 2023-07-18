// Importando o módulo clienteService do arquivo cliente-service.js
import { clienteService } from "../service/cliente-service.js";

// Função para criar uma nova linha na tabela com dados de um cliente
const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr"); // Cria um elemento <tr> para representar a linha
  const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
          <ul class="tabela__botoes-controle">
              <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
              <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
          </ul>
      </td> 
  `; // Define o conteúdo da linha com base nos dados do cliente
  linhaNovoCliente.innerHTML = conteudo; // Define o conteúdo da linha criada
  linhaNovoCliente.dataset.id = id; // Define o atributo data-id com o ID do cliente
  return linhaNovoCliente; // Retorna a nova linha criada
};

const tabela = document.querySelector("[data-tabela]"); // Seleciona a tabela pelo atributo data-tabela

// Adiciona um ouvinte de evento de clique na tabela
tabela.addEventListener("click", (evento) => {
  let ehBotaoDeDeleta =
    evento.target.className === "botao-simples botao-simples--excluir"; // Verifica se o botão clicado é o botão de exclusão
  if (ehBotaoDeDeleta) {
    const linhaCliente = evento.target.closest("[data-id]"); // Encontra a linha do cliente mais próxima que contém o atributo data-id
    let id = linhaCliente.dataset.id; // Obtém o ID do cliente da linha
    clienteService.removeCliente(id).then(() => {
      linhaCliente.remove(); // Remove a linha da tabela após a remoção do cliente
    });
  }
});

clienteService.listaClientes().then((data) => {
  data.forEach((elemento) => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id)
    ); // Cria uma nova linha para cada cliente e adiciona à tabela
  });
});
