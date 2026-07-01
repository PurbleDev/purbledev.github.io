
// =========================
// NAVBAR SCROLL EFFECT
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


// =========================
// SCROLL REVEAL SYSTEM
// =========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

// Elements to animate
const elements = document.querySelectorAll(
    "section, .project-card, .skills span"
);

elements.forEach(el => observer.observe(el));


// =========================
// SMOOTH SCROLL ENHANCEMENT
// =========================

// (HTML already uses scroll-behavior: smooth)
// This just improves anchor offset feel (optional polish)

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});


// =========================
// HERO SMALL POLISH (optional feel boost)
// =========================

// subtle fade-in on load
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "0.6s ease";

    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });
});
