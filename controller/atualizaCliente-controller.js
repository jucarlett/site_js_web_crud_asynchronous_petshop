import { clienteService } from "../service/cliente-service.js";

(async () => {
  const pegaURL = new URL(window.location); // Obtém a URL da página atual
  const id = pegaURL.searchParams.get("id"); // Obtém o ID do cliente da URL

  const inputNome = document.querySelector("[data-nome]"); // Seleciona o campo de nome do formulário
  const inputEmail = document.querySelector("[data-email]"); // Seleciona o campo de email do formulário
  try {
    const data = await clienteService.detalhaCliente(id);
    inputNome.value = data.nome; // Define o valor do campo de nome com base nos dados do cliente
    inputEmail.value = data.email; // Define o valor do campo de email com base nos dados do cliente
  } catch (erro) {
    console.log(erro);
    window.location.href = "../telas/erro.html";
  }

  const formulario = document.querySelector("[data-form]"); // Seleciona o formulário pelo atributo data-form

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário
    try {
      await clienteService.atualizaCliente(
        id,
        inputNome.value,
        inputEmail.value
      ); // Chama a função atualizaCliente do serviço de cliente, passando nome e email
      window.location.href = "../telas/edicao_concluida.html"; // Redireciona para a página de edição concluída após a atualização do cliente
    } catch (erro) {
      console.log(erro);
      window.location.href = "../telas/erro.html";
    }
  });
})();
