function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    autenticarUsuario(usuario, senha);
}

function autenticarUsuario(usuario, senha) {
    var githubToken = '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';
    var owner = 'Gustavo';
    var repo = 'Teste1';
    var filePath = 'abc123xyz456qwerty789link987abcdef1234567890.js';

    // Construa a URL da API do GitHub para o arquivo específico
    var apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    // Configuração da requisição
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'token ' + githubToken,
            'User-Agent': 'Ghosthszz'
        }
    };

    // Realizar a requisição
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (response.ok) {
                // Se a resposta for bem-sucedida, redirecione para a página logada
                window.location.href = "logado.html";
                document.getElementById('usuario').value = '';
                document.getElementById('senha').value = '';
            } else {
                // Se a resposta não for bem-sucedida, exiba uma mensagem de erro
                alert("Credenciais inválidas. Tente novamente.");
                document.getElementById('senha').value = '';
            }
        })
        .catch(error => {
            console.error('Erro ao autenticar usuário:', error);
            alert("Ocorreu um erro ao autenticar. Por favor, tente novamente mais tarde.");
        });
}

// Restante do seu código
var btn = document.getElementById("btn_vdl");

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        btn.click();
    }
});

function checkEnter(event) {
    if (event.key === "Enter") {
        validarLogin();
    }
}

const senhaInput = document.getElementById('senha');
const mostrarSenhaIcon = document.getElementById('mostrarSenhaIcon');

mostrarSenhaIcon.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        mostrarSenhaIcon.classList.remove('fa-eye');
        mostrarSenhaIcon.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = 'password';
        mostrarSenhaIcon.classList.remove('fa-eye-slash');
        mostrarSenhaIcon.classList.add('fa-eye');
    }
});