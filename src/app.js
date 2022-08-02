import { produtosService } from "./service/produtos-service.js";
import Produto from "./utils/Produto.js";

const formulario_cadastro = document.forms.namedItem('cadastro');

formulario_cadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = new Produto(formulario_cadastro);

    produtosService.criaProduto(produto);
});