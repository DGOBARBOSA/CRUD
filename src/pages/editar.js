import { produtosService } from '../service/produtos-service.js';
import Produto from '../utils/Produto.js';

const formulario = document.forms.namedItem('editar');

const url = new URL(window.location);
const id = url.searchParams.get('id');

function preencheCamposFormulario(produto) {
    // formulario.marca.value = carro.marca;
    // formulario.modelo.value = carro.modelo;
    // formulario.ano.value = carro.ano;
    // formulario.preco.value = carro.preco;
    // formulario.quilometragem.value = carro.quilometragem;
    // formulario.url_foto.value = carro.url_foto;

    formulario.marca.value = produto.marca;
    formulario.nome.value = produto.nome;
    formulario.compra.value = produto.compra;
    formulario.quantidade.value = produto.quantidade;
    formulario.url_foto.value = produto.url_foto;
    formulario.preco.value = produto.preco;
};

window.onload = () => {
    produtosService.buscaProduto(id)
        .then(produto => preencheCamposFormulario(produto));
};

window.cancelarEdicao = () => {
    window.location.href = 'produtos.html';
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const produtoEditado = new Produto(formulario);

    produtosService.alterarProduto(produtoEditado, id)
        .finally(() => window.location.href = 'produtos.html');
});