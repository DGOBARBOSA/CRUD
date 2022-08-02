async function criaProduto(produto) {
    try {
        return await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            body: JSON.stringify(produto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function buscaProdutos() {
    try {
        const produtosJSON = await fetch('http://localhost:3000/produtos');
        return await produtosJSON.json();
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function excluirProduto(id) {
    try {
        return await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE'
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function alterarProduto(dadosAlterados, id) {
    try {
        return await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(dadosAlterados),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function buscaProduto(id) {
    try {
        const produtoJSON = await fetch(`http://localhost:3000/produtos/${id}`);
        return await produtoJSON.json();
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    }
}

export const produtosService = {
    criaProduto,
    buscaProdutos,
    excluirProduto,
    alterarProduto,
    buscaProduto
};