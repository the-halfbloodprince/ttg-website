import WOW from 'wowjs';

export default function () {
       
    //Stickiness()
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area"); var sticky = header_navbar.offsetTop; var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) { header_navbar.classList.add("sticky"); logo.src = "/images/logo/ttg_logo.png"; } else { header_navbar.classList.remove("sticky"); logo.src = "/images/logo/ttg_log_white.png"; }
    }; new WOW.WOW().init(); let navbarToggler = document.querySelector(".mobile-menu-btn"); navbarToggler.addEventListener('click', function () { navbarToggler.classList.toggle("active"); });
};
