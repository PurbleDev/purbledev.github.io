// =========================
// DISCORD COPY FUNCTION
// =========================

const discordBtn = document.getElementById("discordCopy");

function showToast(text) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = text;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

discordBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const discordTag = "@purbledev";

    navigator.clipboard.writeText(discordTag)
        .then(() => {
            showToast("Discord copied: " + discordTag);
        })
        .catch(() => {
            showToast("Failed to copy Discord");
        });
});

// =========================
// PROJECT MODAL SYSTEM (CROSSFADE VERSION)
// =========================

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

// TWO IMAGES FOR SMOOTH CROSSFADE
const modalImageA = document.getElementById("modalImageA");
const modalImageB = document.getElementById("modalImageB");

let activeImage = modalImageA;
let inactiveImage = modalImageB;

let currentImages = [];
let currentIndex = 0;
let interval;


// =========================
// IMAGE CROSSFADE FUNCTION
// =========================

function setImage(src) {
    inactiveImage.src = src;

    inactiveImage.onload = () => {
        inactiveImage.classList.add("active");
        activeImage.classList.remove("active");

        // swap
        const temp = activeImage;
        activeImage = inactiveImage;
        inactiveImage = temp;
    };
}


// =========================
// OPEN MODAL
// =========================

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {

        modal.classList.remove("hidden");

        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        // =========================
        // TAGS
        // =========================
        modalTags.innerHTML = "";
        card.dataset.tags.split(",").forEach(tag => {
            const span = document.createElement("span");
            span.textContent = tag.trim();
            modalTags.appendChild(span);
        });

        // =========================
        // IMAGES
        // =========================
        currentImages = card.dataset.images.split(",").map(img => img.trim());
        currentIndex = 0;

        clearInterval(interval);

        setImage(currentImages[0]);

        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % currentImages.length;
            setImage(currentImages[currentIndex]);
        }, 3000);

        // =========================
        // OPTIONAL LINK
        // =========================
        if (card.dataset.link && card.dataset.link.trim() !== "") {
            modalLink.classList.remove("hidden");
            modalLink.href = card.dataset.link;
        } else {
            modalLink.classList.add("hidden");
        }

    });
});


// =========================
// CLOSE MODAL
// =========================

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    clearInterval(interval);
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        clearInterval(interval);
    }
});


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

const elements = document.querySelectorAll(
    "section, .project-card, .skills span"
);

elements.forEach(el => observer.observe(el));


// =========================
// SMOOTH ANCHOR SCROLL
// =========================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});


// =========================
// PAGE FADE IN
// =========================

window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "0.6s ease";

    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });
});