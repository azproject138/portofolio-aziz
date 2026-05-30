// HAMBURGER MENU

const hamburger =
document.getElementById("hamburger");

const navMenu =
document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

// CLOSE MENU AFTER CLICK

document
.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

// SCROLL NAVBAR

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(18,18,18,.95)";

    }else{

        navbar.style.background =
        "rgba(18,18,18,.85)";
    }

});

// REVEAL ANIMATION

const reveals =
document.querySelectorAll(
".section,.timeline-item,.project-card,.contact-card,.certificate-card"
);

function revealElements(){

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("active");
        }

    });

}

reveals.forEach(el => {

    el.classList.add("reveal");

});

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// ACTIVE NAVIGATION

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(scrollY >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");
        }

    });

});