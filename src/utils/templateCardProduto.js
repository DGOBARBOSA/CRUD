import { produtosService } from "../service/produtos-service.js";

export default function templateCardProduto(produto) {
    // formatando a Data local
    const local = navigator.locale;
    const data = produto;
    const data_compra = new Intl.DateTimeFormat(local, data).format(new Date());
    console.log("Data Compra: ", data_compra);

    // formatando o valor unitario pra Reais
    const precoUnitario = (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(produto.preco));
    console.log("Preço unitario: ", precoUnitario);

    // formatando o valor Total pra Reais
    const valorTotal = (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(produto.preco * produto.quantidade));
    console.log("Valor Total: ", valorTotal);

    return `
        <li id="itemLista"
            class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
                <img src="${produto.url_foto}" width="10%" alt="${produto.marca} ${produto.nome}">
                <span class="badge badge-info" style="margin-left: 2px; margin-right: 5px;">${produto.quantidade} unid.</span>
                <div style="margin-left: 5px; margin-right: 2px;">
                    <span>
                        <h5>${produto.marca} ${produto.nome}</h5>
                        <div>
                            Valor unitario R$&nbsp;${precoUnitario}
                            Total: R$&nbsp;${valorTotal}
                            Compra ${data_compra}
                        </div>
                    </span>
                </div>
            </div>

            <div class="d-flex justify-content-between btn-group-sm align-items-center">               
            
                <button class="btn btn-outline-primary"
                    style="margin-left: 1px; margin-right: 5px;" onclick="editarProduto(${produto.id})">Editar<i
                        class="bi bi-trash3"></i></button>
                <button class="btn btn-outline-danger" onclick="excluirProduto(${produto.id})">Excluir <i
                        class="bi bi-trash3"></i></button>
            </div>
        </li> <!-- Fim Li -->
    `
    // <!-- Button Modal  -->
    // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">
    //   Abrir modal de demonstração
    // </button>

}

window.editarProduto = (id) => {
    window.location.href = `editar.html?id=${id}`;
};
window.editarProduto2 = (id) => {
    window.location.href = `editar2.html?id=${id}`;
};

window.excluirProduto = (id) => {
    if (window.confirm('Tem certeza que quer excluir esse produto? Essa ação é irreverssível')) {
        produtosService.excluirProduto(id);
    };
};