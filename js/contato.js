document.getElementById('botaoEnviar').addEventListener('click', function() {
    const primeiroNome = document.getElementById('primeiro-nome').value;
    const ultimoNome = document.getElementById('ultimo-nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (primeiroNome && ultimoNome && telefone && email && mensagem) {
        const mailtoLink = `mailto:leoteixeira3010@gmail.com?subject=Contato de ${primeiroNome} ${ultimoNome}&body=Telefone: ${telefone}%0AEmail: ${email}%0AMensagem:%0A${mensagem}`;
        window.location.href = mailtoLink;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
