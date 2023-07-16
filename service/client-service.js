const criaNovaLinha = (nome,email) => {
    const linhaNovoCliente = document.createElement("tr")
    const conteudo = ` 
<td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `
    
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
}

//tbody tada-tabela
const tabela = document.querySelector("[data-tabela]")



/******para cada modo exemplosemanaPassada criar dentro do http o http2 e se novo pedido http3 do mespassado porexemplo .. e por ai vai**/
//constante para o request
const http = new XMLHttpRequest()

http.open("GET", "http://localhost:3000/profile") //abrindo comunicao

http.send() //enviando

//carregar tomar uma acao quando o carregamento for concluido
http.onload = () => {
    const data = JSON.parse(http.response) //transforma o obj em js para reconhecer o forEach
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email))

    })

}

