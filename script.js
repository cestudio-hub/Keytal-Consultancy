/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav > a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   HERO FORM
========================================= */

const heroForm = document.getElementById("heroForm");

if (heroForm) {

    heroForm.addEventListener("submit", function () {

        const button = heroForm.querySelector("button");

        if (button) {

            button.innerHTML = "Sending...";
            button.style.background = "#2d8a55";
            button.disabled = true;

        }

        /*
        DO NOT USE event.preventDefault() HERE.

        The form must submit normally to FormSubmit.
        */

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        if (formMessage) {

            formMessage.innerHTML =
                "Thank you! Your enquiry is being submitted.";

        }

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .why-card, .process-item, .trust-item"
);

if (revealElements.length > 0) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

}


/* =========================================
   AWARD IMAGE LIGHTBOX
========================================= */

const awardLinks = document.querySelectorAll(".award-lightbox");
const lightbox = document.getElementById("awardLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


/* Open Lightbox */

awardLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = this.href;

        const image = this.querySelector("img");

        if (image) {
            lightboxImage.alt = image.alt;
        }

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});


/* Close Button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeAwardLightbox
    );

}


/* Click Outside Image */

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeAwardLightbox();
        }

    });

}


/* ESC Key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeAwardLightbox();
    }

});


/* Close Function */

function closeAwardLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");
    document.body.style.overflow = "";

}
