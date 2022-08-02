import { produtosService } from '../service/produtos-service.js';
import templateCardProduto from '../utils/templateCardProduto.js';

const produtos_container = document.getElementById('produtos');

produtosService.buscaProdutos().then(produtos => {
    produtos.forEach(produto => produtos_container.innerHTML += templateCardProduto(produto));
});

/*
const carros_container = document.getElementById('carros');

carrosService.buscaCarros().then(carros => {
    carros.forEach(carro => carros_container.innerHTML += templateCardCarro(carro));
});
*/