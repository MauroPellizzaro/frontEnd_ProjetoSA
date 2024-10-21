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




document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (pode ser substituída por uma chamada ao backend para autenticação)
    if (username === 'admin' && password === '1234') {
        // Armazenar a autenticação no localStorage
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
