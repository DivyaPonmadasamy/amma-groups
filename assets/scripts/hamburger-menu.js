const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.top-menu > nav');

// const nav = document.querySelector('nav');
// const servicesMenu = document.querySelector('.services-menu');
// const servicesToggle = document.querySelector('.services-toggle');

// servicesToggle.addEventListener('click', (e) => {
//     if (window.innerWidth <= 480) {
//         e.preventDefault();
//         servicesMenu.classList.toggle('open');
//     }
// });

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function funcUnderline(id) {
    let clicked_element = document.getElementById(id);

    clicked_element.classList.toggle("clicked");

    if(clicked_element.id === "services") {
        let nav_arrow = document.getElementById("rotate");
        nav_arrow.classList.toggle("clicked-i");
    }
}

document.querySelectorAll('.menu-header').forEach(header => {
    header.addEventListener('click', () => {
        const menuItem = header.parentElement;
        menuItem.classList.toggle('active');

        const content = menuItem.querySelector('.menu-content');
        if (menuItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    });
});