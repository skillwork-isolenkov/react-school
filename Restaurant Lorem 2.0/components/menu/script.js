window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let about = document.querySelector('.about-link');
    let menu = document.querySelector('.menu-link');
    let team = document.querySelector('.team-link');
    let gallery = document.querySelector('.gallery-link');
    let blog = document.querySelector('.blog-link');
    let reservation = document.querySelector('.reservation-link');
    let contact = document.querySelector('.contact-link');


    let starters = document.querySelector('#starters');
    let mainDishes = document.querySelector('#main-dishes');
    let deserts = document.querySelector('#deserts');
    let drinks = document.querySelector('#drinks');

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

    starters.addEventListener('click', openStarters);
    mainDishes.addEventListener('click', openDishes);
    deserts.addEventListener('click', openDeserts);
    drinks.addEventListener('click', openDrinks);

    burgerBtn.addEventListener('click', burgerFunc);

    function openHome() {
        window.location.href = '../../main-page/index.html';
    }

    function openAbout() {
        window.location.href = '../about-us/index.html';
    }

    function openMenu() {
        window.location.href = './index.html';
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
        window.location.href = '../reservation/index.html';
    }

    function openContact() {
        window.location.href = '../contact-us/index.html';
    }


    function openStarters() {
        document.querySelector('.slider-starters').style.display = "flex";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
    }
    function openDishes() {
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
        document.querySelector('.slider-main').style.display = "flex";
    }

    function openDeserts() {
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "flex";
    }

    function openDrinks() {
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "flex";
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