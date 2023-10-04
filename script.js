let biblioteca = [];

function cadastrarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let id = Date.now(); // Utilizando o timestamp como identificador único
    biblioteca.push({
        titulo: titulo,
        autor: autor,
        id: id,
        emprestado: false
    });
    alert("Livro cadastrado com sucesso!");
}

function alterarLivro() {
    let id = Number(prompt("Digite o ID do livro que deseja alterar:"));
    let livro = biblioteca.find(l => l.id === id);

    if (!livro) {
        alert("Livro não encontrado!");
        return;
    }

    let novoTitulo = prompt("Digite o novo título (ou deixe em branco para não alterar):", livro.titulo);
    let novoAutor = prompt("Digite o novo autor (ou deixe em branco para não alterar):", livro.autor);

    if (novoTitulo) livro.titulo = novoTitulo;
    if (novoAutor) livro.autor = novoAutor;

    alert("Livro atualizado com sucesso!");
}

function deletarLivro() {
    let id = Number(prompt("Digite o ID do livro que deseja deletar:"));
    let index = biblioteca.findIndex(l => l.id === id);

    if (index === -1) {
        alert("Livro não encontrado!");
        return;
    }

    biblioteca.splice(index, 1);
    alert("Livro deletado com sucesso!");
}

function emprestarLivro() {
    let id = Number(prompt("Digite o ID do livro que deseja emprestar:"));
    let livro = biblioteca.find(l => l.id === id);

    if (!livro) {
        alert("Livro não encontrado!");
        return;
    }

    if (livro.emprestado) {
        alert("Livro já está emprestado!");
        return;
    }

    livro.emprestado = true;
    alert("Livro emprestado com sucesso!");
}

function devolverLivro() {
    let id = Number(prompt("Digite o ID do livro que deseja devolver:"));
    let livro = biblioteca.find(l => l.id === id);

    if (!livro) {
        alert("Livro não encontrado!");
        return;
    }

    if (!livro.emprestado) {
        alert("Livro não está emprestado!");
        return;
    }

    livro.emprestado = false;
    alert("Livro devolvido com sucesso!");
}

function menuPrincipal() {
    while (true) {
        let opcao = prompt(
            "Escolha uma opção:\n1. Cadastrar Livro\n2. Alterar Livro\n3. Deletar Livro\n4. Realizar Empréstimo de Livro\n5. Devolver Livro\n6. Sair"
        );

        switch (opcao) {
            case '1':
                cadastrarLivro();
                break;
            case '2':
                alterarLivro();
                break;
            case '3':
                deletarLivro();
                break;
            case '4':
                emprestarLivro();
                break;
            case '5':
                devolverLivro();
                break;
            case '6':
                alert("Saindo do sistema.");
                return;
            default:
                alert("Opção inválida!");
        }
    }
}

menuPrincipal();
