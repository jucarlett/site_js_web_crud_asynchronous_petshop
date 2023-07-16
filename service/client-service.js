// Define uma função para listar os clientes conexao com API
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`) //fetch faz o get e devolde uma promise já
    .then((resposta) => {
      return resposta.json(); //retorna uma promise
    });
};


export const clientService = {
  listaClientes
 }
