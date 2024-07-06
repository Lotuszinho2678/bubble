// Obtém elementos do DOM
const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe-button');
const message = document.getElementById('message');

// Adiciona um evento de clique ao botão
subscribeButton.addEventListener('click', function () {
    const userEmail = emailInput.value; // Obtém o valor do campo de e-mail
    if (userEmail) {
        // Se o campo de e-mail não estiver vazio, exibe a mensagem
        message.textContent = `Enviaremos mais instruções no seu E-mail: ${userEmail}`;
        message.style.display = 'block'; // Mostra a mensagem
        // Aqui você pode fazer o que quiser com o e-mail, como enviá-lo para um servidor.
    } else {
        // Se o campo de e-mail estiver vazio, exibe uma mensagem de erro
        message.textContent = 'Por favor, digite seu e-mail.';
        message.style.color = 'red'; // Cor da mensagem de erro
        message.style.display = 'block'; // Mostra a mensagem de erro
    }
});

document.getElementById('subscribe-button').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message');
    if (validateEmail(email)) {
        message.style.display = 'block';
        message.style.color = 'green';
        message.textContent = 'Inscrição realizada com sucesso!';
    } else {
        message.style.display = 'block';
        message.style.color = 'red';
        message.textContent = 'Por favor, insira um email válido.';
    }
});
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Tradutor
window.gtranslateSettings = {
    "default_language": "pt",
    "detect_browser_language": true,
    "wrapper_selector": ".gtranslate_wrapper",
    "float_switcher_open_direction": "bottom",
    "flag_style": "3d"
};

function resetToBrowserLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    var langCode = lang.split('-')[0]; // Obter o código do idioma
    var gtranslate = document.querySelector('.gtranslate_wrapper select');

    if (gtranslate) {
        gtranslate.value = langCode;
        gtranslate.dispatchEvent(new Event('change'));
    }
}


