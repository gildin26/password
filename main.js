console.log('Заработало')

const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');


toggleButton.addEventListener('click', function(){
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Скрыть'
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Показать'
    }
})