window.addEventListener('load', function () {
    let emailInput = document.getElementById('email-login');
    let passwordInput = document.getElementById('password-login');
    let emailLoginDiv = document.querySelector('.email-login-div');

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    emailInput.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if (emailInput.value.match(pattern)) {
            emailLoginDiv.classList.add("valid");
            emailLoginDiv.classList.remove("invalid");
            errorSpan.innerHTML = 'Your Email is Valid!';
            errorSpan.style.color = '#00ff00';

        } else {
            emailLoginDiv.classList.remove("valid");
            emailLoginDiv.classList.add("invalid");
            errorSpan.innerHTML = 'Please Enter Valid Email Adress!';
            errorSpan.style.color = '#ff0000';
        }
        if (pattern.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }

    let firstButton = document.querySelector('.button-login');
    let secondButton = document.querySelector('.sing-up-button');

    let firstName = document.getElementById('first-name');
    let surName = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let birthday = document.getElementById('birthday');

    email.addEventListener('change', checkEmail);

    firstButton.addEventListener('click', () => {
        if (emailInput.value !== '' && passwordInput.value !== '') {

            if (emailInput.value.length >= 8 && passwordInput.value.length >= 6) {
                window.location.href = './login/login.html';

            } else if (emailInput.value.length < 8) {
                document.getElementById("errorSpan").innerHTML = 'Please Enter Valid Email Adress!';
                errorSpan.style.color = '#ff0000';

            } else if (passwordInput.value.length < 6) {
                document.getElementById("errorSpan").innerHTML = 'Password should be minimum 6 symbols!';
                errorSpan.style.color = '#ff0000';
            }
        }
    })

    secondButton.addEventListener('click', () => {
        if (firstName.value !== '' && surName.value !== '' && email.value !== '' && password.value !== '' && birthday.value !== '') {
            if (email.value.length >= 8 && password.value.length >= 6) {
                window.location.href = './register/register.html';

            } else if (email.value.length < 8) {
                document.getElementById("second-error-span").innerHTML = 'Email should be minimum 8 symbols!';

            } else if (password.value.length < 6) {
                document.getElementById("second-error-span").innerHTML = 'Password should be minimum 6 symbols!';
            }
        }
    })

    emailInput.value = '';
    passwordInput.value = '';

    firstName.value = '';
    surName.value = '';
    email.value = '';
    password.value = '';
    birthday.value = '';
})