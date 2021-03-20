window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let menu = document.querySelector('.menu-link');
    let about = document.querySelector('.about-link');
    let careers = document.querySelector('.careers-link');
    let contact = document.querySelector('.contact-link');
    let order = document.querySelector('.order-link');

    home.addEventListener('click', openHome)
    menu.addEventListener('click', openMenu);
    about.addEventListener('click', openAbout);
    careers.addEventListener('click', openCareers);
    contact.addEventListener('click', openContact);
    order.addEventListener('click', openOrder);

    function openHome() {
        window.location.href = './index.html';
    }

    function openMenu() {
        window.location.href = './menu/menu/index.html';
    }

    function openAbout() {
        window.location.href = './menu/about-us/index.html';
    }

    function openCareers() {
        window.location.href = './menu/careers/index.html';
    }

    function openContact() {
        window.location.href = './menu/contact-us/index.html';
    }

    function openOrder() {
        window.location.href = './menu/online-order/index.html';
    }
})