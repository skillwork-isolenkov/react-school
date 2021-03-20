window.addEventListener('load', function () {
    let username = document.querySelector('.username');
    let password = document.querySelector('.password');
    let button = document.querySelector('.btn');

    button.addEventListener('click', clickedBtn);

    function clickedBtn() {
        if (username.value !== '' && password.value !== '') {
            window.location.href = './login/index.html';
        }
    }
    username.value = '';
    password.value = '';
})