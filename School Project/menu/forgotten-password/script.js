window.addEventListener('load', function () {
    let home = document.querySelector('.home-element');
    let about = document.querySelector('.about-element');
    let gallery = document.querySelector('.gallery-element');
    let register = document.querySelector('.register-element');
    let login = document.querySelector('.login-element');
    let contact = document.querySelector('.contact-element');

    let resetPasswordBtn = document.querySelector('.reset-password');

    let username = document.querySelector('#username');
    let email = document.querySelector('#email');

    let registerSpan = document.querySelector('.register-span');
    let container = document.querySelector('.container');
    let signincontainer = document.querySelector('.signin');

    let loginBtn = document.querySelector('.login-button');

    let titleHead = document.querySelector('.title-head');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    gallery.addEventListener('click', openGallery);
    register.addEventListener('click', openRegister);
    login.addEventListener('click', openLogin);
    contact.addEventListener('click', openContact);

    resetPasswordBtn.addEventListener('click', resetPasswordBtnFunction);
    loginBtn.addEventListener('click', loginBtnFunction);

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


    function resetPasswordBtnFunction() {
        if (username.value !== '' && email.value !== '') {
            registerSpan.innerHTML = 'Your password has been reset!'
            container.style.display = 'none';
            signincontainer.style.display = 'none';
        }
    }

    function loginBtnFunction() {
        window.location.href = '../login/index.html';
    }

    function titleHeadClick() {
        window.location.href = '../../main/index.html';
    }
})