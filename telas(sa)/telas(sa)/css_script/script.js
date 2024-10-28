const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;
const navbar = document.querySelector('.navbar');
const table = document.querySelector('.table');
const formControls = document.querySelectorAll('.form-control');
const container = document.querySelector('.containerAlterado');


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    table.classList.toggle('dark-mode'); // Adiciona a classe dark-mode à tabela

    formControls.forEach(control => {
        control.classList.toggle('dark-mode');
    });

    // Mudar o texto do botão
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});
//=========================================================================================================================================



document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (pode ser substituída por uma chamada ao backend para autenticação)
    if (username === 'admin' && password === '1234') {
        // Armazenar a autenticação no localStorage vamo mudar isso no futuro puxando as info do banco
        localStorage.setItem('auth', 'true');
        alert('Login realizado com sucesso!');
        window.location.href = 'vizualizacaoemprestimo.html'; // Redireciona para outra página
    } else {
        alert('Nome ou ID incorretos.');
    }
});

// Função para verificar autenticação e redirecionar se não estiver logado
function checkAuth() {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
     
        window.location.href = 'login.html'; // Redireciona para login se não autenticado
    }
}
function logout() {
    localStorage.removeItem('auth');  // Remove o token de autenticação
    alert('Você foi desconectado!');
    window.location.href = 'login.html';  // Redireciona para a página de login
}

function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('tableBody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowVisible = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                const cellValue = cells[j].textContent || cells[j].innerText;
                if (cellValue.toLowerCase().indexOf(filter) > -1) {
                    rowVisible = true;
                    break;
                }
            }
        }

        rows[i].style.display = rowVisible ? "" : "none";
    }
}
// Adiciona item selecionado à lista de empréstimos
function adicionarItem() {
    const itemSelect = document.getElementById('itemSelect');
    const itemSelecionado = itemSelect.value;

    if (itemSelecionado) {
        const listaItens = document.getElementById('listaItens');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = itemSelecionado;

        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn btn-danger btn-sm';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            listaItens.removeChild(li);
        };

        li.appendChild(btnRemover);
        listaItens.appendChild(li);
    } else {
        alert('Por favor, selecione um item.');
    }
}
// Array para armazenar os itens emprestados
let itensEmprestados = [];

// Função para adicionar item à lista de empréstimos
function adicionarItem() {
    const select = document.getElementById('selectItens');
    const itemSelecionado = select.value;

    // Pega a data de devolução global
    const dataDevolucaoGlobal = document.getElementById('dataDevolucaoGlobal').value;

    // Cria o campo de item e o campo de data de devolução
    const lista = document.getElementById('listaItens');
    const div = document.createElement('div');
    div.classList.add('input-group', 'mb-2');

    const inputItem = document.createElement('input');
    inputItem.type = 'text';
    inputItem.classList.add('form-control');
    inputItem.value = itemSelecionado;
    inputItem.readOnly = true;

    const inputData = document.createElement('input');
    inputData.type = 'date';
    inputData.classList.add('form-control');
    
    // Define a data de devolução global como padrão, se ela estiver preenchida
    if (dataDevolucaoGlobal) {
        inputData.value = dataDevolucaoGlobal;
    }

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('btn', 'btn-danger');
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = function () {
        div.remove();
        // Remove o item da lista de itens emprestados
        const index = itensEmprestados.findIndex(item => item.item === itemSelecionado);
        if (index > -1) {
            itensEmprestados.splice(index, 1);
        }
    };

    // Adiciona os campos ao div
    div.appendChild(inputItem);
    div.appendChild(inputData); // Campo para a data de devolução
    div.appendChild(btnRemover);
    lista.appendChild(div);

    // Adiciona o item e a data de devolução ao array
    itensEmprestados.push({ item: itemSelecionado, dataDevolucao: inputData });
}

// Captura o evento de envio do formulário
document.getElementById('emprestimoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const pessoa = document.getElementById('pessoa').value;

    // Coleta os itens e as respectivas datas de devolução
    const emprestimo = itensEmprestados.map((emprestimo) => ({
        item: emprestimo.item,
        dataDevolucao: emprestimo.dataDevolucao.value
    }));

    console.log({
        pessoa: pessoa,
        emprestimo: emprestimo
    });

    alert('Empréstimo cadastrado com sucesso!');
});

// Captura o evento de envio do formulário
/*document.getElementById('emprestimoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pessoa = document.getElementById('pessoa').value.trim();
    const itens = [];

    // Pegar todos os itens adicionados
    document.querySelectorAll('#listaItens li').forEach(function(item) {
        itens.push(item.firstChild.textContent);
    });

    if (pessoa && itens.length > 0) {
        // Aqui você pode realizar uma chamada ao backend para salvar os dados, por exemplo.
        console.log('Empréstimo realizado para:', pessoa);
        console.log('Itens:', itens);

        alert('Empréstimo realizado com sucesso!');
        // Limpar o formulário após o envio
        document.getElementById('emprestimoForm').reset();
        document.getElementById('listaItens').innerHTML = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});*/
