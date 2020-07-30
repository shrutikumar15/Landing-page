// build the nav
function navMenu() {
    let nav = document.getElementById("navbar__list");
    let Sections = document.querySelectorAll('section');
    let navElementsFrag = document.createDocumentFragment();
    //add li elements
    for (section of Sections) {
        var id = section.id;
        var data_nav = section.dataset.nav;
        var li = document.createElement('li');
        //add anchor tag
        li.innerHTML = `<a href="#${id}" class="menu__link">${data_nav}</a>`;
        navElementsFrag.append(li);
    }

    nav.append(navElementsFrag);
}
navMenu();


//fucntion to check if 65% of the element is in view
function isScrolledIntoView(el) {
    var percentVisible = 0.65;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    var elemHeight = el.getBoundingClientRect().height;
    var overhang = elemHeight * (1 - percentVisible);

    var isVisible = (elemTop >= -overhang) && (elemBottom <= window.innerHeight + overhang);
    return isVisible;
}

// Add class 'active' to section when near top of viewport
function addClassActive() {
    let Sections = document.querySelectorAll('section');

    for (section of Sections) {
        navLink = document.querySelector(`[href="#${section.id}"]`);

        if (isScrolledIntoView(section)) {
            section.classList.add('your-active-class');
            navLink.classList.add('active');

        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    }
}
window.onscroll = function () { addClassActive() };

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const navLinks = document.querySelectorAll('.menu__link');

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (e) => {
            e.preventDefault();

            let Value = navLink.getAttribute('href');
            let target = document.querySelector(Value);
            var scrollDiv = target.offsetTop;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
        });
    });

};

scrollToSection();




