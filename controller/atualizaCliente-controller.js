import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL(window.location); // Obtém a URL da página atual
const id = pegaURL.searchParams.get("id"); // Obtém o ID do cliente da URL

const inputNome = document.querySelector("[data-nome]"); // Seleciona o campo de nome do formulário
const inputEmail = document.querySelector("[data-email]"); // Seleciona o campo de email do formulário

clienteService.detalhaCliente(id).then((data) => {
    inputNome.value = data.nome; // Define o valor do campo de nome com base nos dados do cliente
    inputEmail.value = data.email; // Define o valor do campo de email com base nos dados do cliente
    });


