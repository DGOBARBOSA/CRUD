export default function Produto(formulario) {
    this.marca = formulario.marca.value;
    this.nome = formulario.nome.value;
    this.compra = formulario.compra.value;
    this.quantidade = formulario.quantidade.value;
    this.url_foto = formulario.url_foto.value;
    this.preco = formulario.preco.value;
};