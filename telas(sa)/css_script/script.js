// Modo Escuro / Claro
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
// Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (pode ser substituída por uma chamada ao backend para autenticação)
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('auth', 'true'); // Armazenar a autenticação no localStorage
        alert('Login realizado com sucesso!');
        window.location.href = 'visualizacaoemprestimo.html'; // Redireciona para outra página
    } else {
        alert('Nome ou senha incorretos.');
    }
});

// Função para verificar autenticação e redirecionar se não estiver logado
function checkAuth() {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
        window.location.href = 'login.html'; // Redireciona para login se não autenticado
    }
}

// Logout
function logout() {
    localStorage.removeItem('auth');  // Remove o token de autenticação
    alert('Você foi desconectado!');
    window.location.href = 'login.html';  // Redireciona para a página de login
}

//=========================================================================================================================================

// Empréstimo de Itens
let itensEmprestados = [];

function adicionarItem() {
    const select = document.getElementById('selectItens');
    const itemSelecionado = select.value;
    const pessoa = document.getElementById('pessoa').value;

    const lista = document.getElementById('listaItens');
    const div = document.createElement('div');
    div.classList.add('input-group', 'mb-2');

    const inputItem = document.createElement('input');
    inputItem.type = 'text';
    inputItem.classList.add('form-control');
    inputItem.value = itemSelecionado;
    inputItem.readOnly = true;

    const inputPessoa = document.createElement('input');
    inputPessoa.type = 'text';
    inputPessoa.classList.add('form-control');
    inputPessoa.value = pessoa;
    inputPessoa.readOnly = true;

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

    div.appendChild(inputItem);
    div.appendChild(inputPessoa);
    div.appendChild(btnRemover);
    lista.appendChild(div);

    itensEmprestados.push({ item: itemSelecionado, pessoa: pessoa });
}

//============================funcao para cadastro item============================================================

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página ao enviar o formulário
    
    // Captura os dados dos campos
    const nome = document.getElementById('itemNome').value;
    const tipoItem = document.getElementById('tipoItem').value;
    
    // Cria o objeto com os dados do item
    const item = {
        nome: nome,
        tipoItem: tipoItem
    };
    
    // Envia os dados para o servidor
    fetch('http://localhost:3000/api/itens', {  // Endpoint da API para cadastrar o item
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => {
        if (response.ok) {
            alert('Item cadastrado com sucesso!');
            document.getElementById('formCadastro').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar item');
        }
    })
    .catch(error => console.error('Erro:', error));
});

//=============função para fazer empréstimo=================================
document.getElementById('emprestimoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página ao enviar o formulário
    
    // Captura os dados dos campos do formulário
    const nomePessoa = document.getElementById('pessoa').value;
    const itens = Array.from(document.querySelectorAll('#listaItens li')).map(item => item.textContent);  // Captura os itens da lista

    // Cria o objeto com os dados do empréstimo
    const emprestimo = {
        nomePessoa: nomePessoa,
        itens: itens
    };
    
    // Envia os dados para o servidor
    fetch('http://localhost:3000/api/emprestimos', {  // Endpoint da API para cadastrar o empréstimo
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimo)
    })
    .then(response => {
        if (response.ok) {
            alert('Empréstimo cadastrado com sucesso!');
            document.getElementById('emprestimoForm').reset();  // Limpa o formulário
            document.getElementById('listaItens').innerHTML = '';  // Limpa a lista de itens
        } else {
            throw new Error('Erro ao cadastrar empréstimo');
        }
    })
    .catch(error => console.error('Erro:', error));
});

//=============funcao para cadastro tipo item============================================================================================================================

document.getElementById('formCadastroTipo').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Captura o valor do campo de tipo de item
    const tipoItem = document.getElementById('tipoItem').value;

    // Cria o objeto a ser enviado
    const data = {
         tipo: tipoItem 
        };

    // Envia a requisição para o servidor
    fetch('http://localhost:3000/api/tipos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Tipo de Item cadastrado com sucesso!');
            document.getElementById('formCadastroTipo').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar Tipo de Item');
        }
    })
    .catch(error => console.error('Erro:', error));
});

// Exclusão de Item=============================================================
function confirmarExclusao(id) {
    if (confirm("Tem certeza que deseja excluir este item?")) {
        excluirItem(id);
    }
}

function excluirItem(id) {
    fetch(`https://seuservidor.com/api/itens/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                alert("Item excluído com sucesso!");
                document.getElementById(`row-${id}`).remove(); // Remove a linha da tabela
            } else {
                alert("Erro ao excluir o item.");
            }
        })
        .catch(error => console.error("Erro:", error));
}

let itemIdToDelete;

function setItemId(id) {
    itemIdToDelete = id; // Define o ID do item a ser excluído
}

function confirmarDevolucao() {
    fetch(`https://seuservidor.com/api/itens/${itemIdToDelete}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                alert("Item devolvido com sucesso!");
                document.getElementById(`row-${itemIdToDelete}`).remove();
                const modalElement = document.getElementById('confirmDeleteModal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();
            } else {
                alert("Erro ao devolver o item.");
            }
        })
        .catch(error => console.error("Erro:", error));
}

//=========================================================================================================================================

// Edição de Item
let itemIdParaEditar;

function abrirModalEdicao(id) {
    itemIdParaEditar = id;
    const row = document.getElementById(`row-${id}`);
    const cells = row.getElementsByTagName("td");

    document.getElementById("editItem").value = cells[1].textContent;
    document.getElementById("editTipo").value = cells[2].textContent;
    document.getElementById("editValidade").value = cells[3].textContent;
    document.getElementById("editDataEmprestimo").value = cells[4].textContent;
   

    const editModal = new bootstrap.Modal(document.getElementById("editModal"));
    editModal.show();
}

function salvarEdicao() {
    const itemData = {
        id: itemIdParaEditar,
        item: document.getElementById("editItem").value,
        tipo: document.getElementById("editTipo").value,
        validade: document.getElementById("editValidade").value,
        dataEmprestimo: document.getElementById("editDataEmprestimo").value,
       
    };

    fetch('URL_DA_API/atualizarEmprestimo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const row = document.getElementById(`row-${itemIdParaEditar}`);
                const cells = row.getElementsByTagName("td");

                cells[1].textContent = itemData.item;
                cells[2].textContent = itemData.tipo;
                cells[3].textContent = itemData.validade;
                cells[4].textContent = itemData.dataEmprestimo;
             

                alert('Alterações salvas com sucesso!');
                const editModal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
                editModal.hide();
            } else {
                alert('Erro ao atualizar no banco de dados.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao conectar ao servidor.');
        });
}
//===============================função para buscar infos da tabela de itens=======

function fetchItens() {
    fetch('http://localhost:3000/api/itens')  // Requisição GET para o backend
        .then(response => response.json())  // Parse da resposta JSON
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir os novos dados

            // Preenche a tabela com os dados recebidos
            data.forEach(item => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.tipo}</td>
                    <td>${item.ca}</td>
                    <td>
                        <button class="btn btn-success">Editar</button>
                        <button class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#confirmDeleteModal" onclick="setItemId(${item.id})">Excluir</button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os itens:', error);
        });
}

// Chama a função quando a página é carregada
window.onload = function() {
    fetchItens();
}

 //==============================================================================
// Função para buscar informações da tabela de empréstimos
function fetchEmprestimos() {
    fetch('http://localhost:3000/api/emprestimos')  // Endpoint do backend
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados

            data.forEach(emprestimo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${emprestimo.id}</td>
                    <td>${emprestimo.item}</td>
                    <td>${emprestimo.colaborador}</td>
                    <td>${emprestimo.validade}</td>
                    <td>${emprestimo.usuario}</td>
                    <td>${emprestimo.dataEmprestimo}</td>
                    <td>${emprestimo.dataDevolucao}</td>
                    <td>
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onclick="abrirModalEdicao(${emprestimo.id})">Editar</button>
                        <button class="btn btn-primary orientacao" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onclick="setItemId(${emprestimo.id})">Devolver</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar os empréstimos:', error));
}

// Chama a função fetchEmprestimos ao carregar a página
window.onload = function() {
    fetchEmprestimos();
};


//===============================funcao para buscar infos da tabela tipos item==============================
// Função para carregar os tipos de item do backend e preencher a tabela
function loadTiposDeItem() {
    fetch('http://localhost:3000/api/tipos')  // Endereço do endpoint que retorna os dados dos tipos de item
        .then(response => response.json())  // Converte a resposta em JSON
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';  // Limpa a tabela antes de inserir os novos dados

            // Itera pelos tipos de item e preenche a tabela
            data.forEach(tipo => {
                const row = document.createElement('tr');  // Cria uma nova linha

                // Preenche as células da linha com os dados do tipo de item
                row.innerHTML = `
                    <td>${tipo.id}</td>
                    <td>${tipo.nome}</td>
                    <td>
                        <button class="btn btn-success">Editar</button>
                        <button class="btn btn-danger" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId(${tipo.id})">Excluir</button>
                    </td>
                `;
                
                tableBody.appendChild(row);  // Adiciona a linha à tabela
            });
        })
        .catch(error => console.error('Erro ao carregar os tipos de item:', error));  // Tratar erros
}

// Chama a função ao carregar a página
window.onload = function() {
    loadTiposDeItem();  // Carrega os tipos de item ao carregar a página
};
// Função para carregar os tipos de item do backend e preencher o select
function carregarTiposDeItem() {
    fetch('http://localhost:3000/api/tipos')
        .then(response => response.json())
        .then(data => {
            const tipoSelect = document.getElementById('tipoItem');
            tipoSelect.innerHTML = '<option selected>Selecione o tipo de item</option>'; // Reseta as opções

            // Itera sobre os tipos de item e cria uma opção para cada um
            data.forEach(tipo => {
                const option = document.createElement('option');
                option.value = tipo.id;
                option.textContent = tipo.nome;  // Assumindo que `nome` seja o nome do tipo no banco
                tipoSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar os tipos de item:', error));
}

// Chama a função ao carregar a página
window.onload = function() {
    checkAuth();  // Função de autenticação (caso já esteja no seu script.js)
    carregarTiposDeItem();
};
