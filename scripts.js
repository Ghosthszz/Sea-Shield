<script src="https://ghosthszz.github.io/Teste1/users.js"></script>
    <script>
        function goBack() {
            window.history.back();
        }

        var btn = document.getElementById("btn_vdl");

        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.keyCode === 13) {
                btn.click();
            }
        });

        function validarLogin() {
            var usuario = document.getElementById("usuario").value;
            var senha = document.getElementById("senha").value;

            var usuarioValido = verificarCredenciais(usuario, senha);
            if (usuarioValido) {
                window.location.href = "logado.html";
                document.getElementById('usuario').value = '';
                document.getElementById('senha').value = '';

            } else {
                alert("Credenciais inválidas. Tente novamente.");
                document.getElementById('senha').value = '';
            }
        }

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
    </script>