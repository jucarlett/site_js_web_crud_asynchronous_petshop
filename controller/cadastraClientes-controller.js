import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

// Adiciona um ouvinte de evento de envio (submit) no formulário
formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

  const nome = evento.target.querySelector("[data-nome]").value; // Obtém o valor do campo de nome do formulário
  const email = evento.target.querySelector("[data-email]").value; // Obtém o valor do campo de email do formulário

  try {
    await clienteService.criaCliente(nome, email); // Chama a função criaCliente do serviço de cliente, passando nome e email
    window.location.href = "../telas/cadastro_concluido.html"; // Redireciona para a página de cadastro concluído após a criação do cliente
  } catch (erro) {
    console.log(erro);
    window.location.href = "../telas/erro.html";
    // Caso ocorra algum erro na criação do cliente, ele será capturado e exibido no console
  }
});
