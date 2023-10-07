// usuários.js

const usuarios = [
    { usuario: "usuario1", senha: "senha123" },
    { usuario: "sea@gmail.com", senha: "Teste123" },
    // Adicione mais usuários conforme necessário
];

function verificarCredenciais(usuario, senha) {
    return usuarios.find(u => u.usuario === usuario && u.senha === senha);
}
