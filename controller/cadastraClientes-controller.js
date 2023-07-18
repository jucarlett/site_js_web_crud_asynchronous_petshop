import { clienteService } from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]');

// Adiciona um ouvinte de evento de envio (submit) no formulário
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

  const nome = evento.target.querySelector('[data-nome]').value; // Obtém o valor do campo de nome do formulário
  const email = evento.target.querySelector('[data-email]').value; // Obtém o valor do campo de email do formulário

  clienteService.criaCliente(nome, email) // Chama a função criaCliente do serviço de cliente, passando nome e email
    .then(() => {
      window.location.href = '../telas/cadastro_concluido.html'; // Redireciona para a página de cadastro concluído após a criação do cliente
    });
});
