window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let menu = document.querySelector('.menu-link');
    let about = document.querySelector('.about-link');
    let careers = document.querySelector('.careers-link');
    let contact = document.querySelector('.contact-link');
    let order = document.querySelector('.order-link');

    let submitBtn = document.querySelector('.submit-btn')
    let spanEmail = document.querySelector('.email-send');
    let emailInput = document.querySelector('.email-input');

    home.addEventListener('click', openHome)
    menu.addEventListener('click', openMenu);
    about.addEventListener('click', openAbout);
    careers.addEventListener('click', openCareers);
    contact.addEventListener('click', openContact);
    order.addEventListener('click', openOrder);

    submitBtn.addEventListener('click', submitButton);

    function openHome() {
        window.location.href = '../../index.html';
    }

    function openMenu() {
        window.location.href = '../menu/index.html';
    }

    function openAbout() {
        window.location.href = '../about-us/index.html';
    }

    function openCareers() {
        window.location.href = '../careers/index.html';
    }

    function openContact() {
        window.location.href = '../contact-us/index.html';
    }

    function openOrder() {
        window.location.href = '../online-order/index.html';
    }

    function submitButton() {
        if (emailInput.value !== '') {
            spanEmail.innerHTML = 'Your email has been submitted correctly.';
        }
    }
})