window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let about = document.querySelector('.about-link');
    let menu = document.querySelector('.menu-link');
    let team = document.querySelector('.team-link');
    let gallery = document.querySelector('.gallery-link');
    let blog = document.querySelector('.blog-link');
    let reservation = document.querySelector('.reservation-link');
    let contact = document.querySelector('.contact-link');

    let reservationBtn = document.querySelector('.button');

    let name = document.querySelector('.input-name');
    let email = document.querySelector('.input-email');
    let number = document.querySelector('.input-number');
    let persons = document.querySelector('#persons');
    let date = document.querySelector('.input-date');
    let time = document.querySelector('.input-time');
    let message = document.querySelector('.message');

    let burgerBtn = document.querySelector('#burger-menu');
    let timesClicked = 0;


    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    menu.addEventListener('click', openMenu);
    team.addEventListener('click', openTeam);
    gallery.addEventListener('click', openGallery);
    blog.addEventListener('click', openBlog);
    reservation.addEventListener('click', openReservation);
    contact.addEventListener('click', openContact);

    reservationBtn.addEventListener('click', reservationFunc);

    burgerBtn.addEventListener('click', burgerFunc);

    function openHome() {
        window.location.href = '../../main-page/index.html';
    }

    function openAbout() {
        window.location.href = '../about-us/index.html';
    }

    function openMenu() {
        window.location.href = '../menu/index.html';
    }

    function openTeam() {
        window.location.href = '../team/index.html';
    }

    function openGallery() {
        window.location.href = '../gallery/index.html';
    }

    function openBlog() {
        window.location.href = '../blog/index.html';
    }

    function openReservation() {
        window.location.href = './index.html';
    }

    function openContact() {
        window.location.href = '../contact-us/index.html';
    }

    function reservationFunc(e) {
        e.preventDefault();
        if (name.value !== '' && email.value !== '' && number.value !== '' && persons.value !== '' && date.value !== '' && time.value !== '') {
            message.textContent = 'Your table is booked!'
        }
        name.value = '';
        email.value = '';
        number.value = '';
        persons.value = '';
        date.value = '';
        time.value = '';
    }

    function burgerFunc() {
        timesClicked++;
        burgerBtn.style.marginLeft = "55px"
        if (timesClicked % 2 === 0) {
            document.querySelector('.navbar ul').style.display = "none";
        } else {
            document.querySelector('.navbar ul').style.display = "block";
        }
    }
})