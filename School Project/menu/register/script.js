window.addEventListener('load', function () {
    let home = document.querySelector('.home-element');
    let about = document.querySelector('.about-element');
    let gallery = document.querySelector('.gallery-element');
    let register = document.querySelector('.register-element');
    let login = document.querySelector('.login-element');
    let contact = document.querySelector('.contact-element');

    let button = document.querySelector('.registerbtn');

    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let mobile = document.querySelector('#mobile');
    let username = document.querySelector('#username');
    let password = document.querySelector('#psw');
    let repassword = document.querySelector('#psw-repeat');

    let registerSpan = document.querySelector('.register-span');
    let container = document.querySelector('.container');
    let signincontainer = document.querySelector('.signin');
    let registerConfirm = document.querySelector('main h2');

    let signInBtn = document.querySelector('.sign-in');

    let titleHead = document.querySelector('.title-head');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    gallery.addEventListener('click', openGallery);
    register.addEventListener('click', openRegister);
    login.addEventListener('click', openLogin);
    contact.addEventListener('click', openContact);

    button.addEventListener('click', registerBtnFunction);
    signInBtn.addEventListener('click', signInFunc);

    titleHead.addEventListener('click', titleHeadClick);

    function openHome() {
        window.location.href = '../../main/index.html';
    }

    function openAbout() {
        window.location.href = '../about-project/index.html';
    }

    function openGallery() {
        window.location.href = '../gallery/index.html';
    }

    function openRegister() {
        window.location.href = '../register/index.html';
    }

    function openLogin() {
        window.location.href = '../login/index.html';
    }

    function openContact() {
        window.location.href = '../contact/index.html';
    }

    function signInFunc() {
        window.location.href = '../login/index.html';
    }

    function registerBtnFunction() {
        if (name.value !== '' && email.value !== '' && mobile.value !== '' && username.value !== '' && password.value !== '' && repassword.value !== '') {
            registerConfirm.innerHTML = 'Registration Confirmation Message';
            registerSpan.innerHTML = 'Your account has been registered successfully. We will contact you soon for further process!'
            container.style.display = 'none';
            signincontainer.style.display = 'none';
        }
    }

    function titleHeadClick() {
        window.location.href = '../../main/index.html';
    }
})