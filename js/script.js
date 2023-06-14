// toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#nav-menu");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


// scroll sections
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");



// scroll sections
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*= '+ id +']').classList.add('active');
            });
        }
    });

    // sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

