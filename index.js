
// GROUP C WEBSITE JAVASCRIPT


// 1. MEMBER CARD SCROLL ANIMATION

const memberCards = document.querySelectorAll(".member-card");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            cardObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


memberCards.forEach((card) => {

    cardObserver.observe(card);

});


// 2. CHECK MEMBER PHOTOGRAPHS

const memberImages = document.querySelectorAll(".member-image img");

memberImages.forEach((img) => {

    img.addEventListener("error", () => {

        img.style.display = "none";

        const parent = img.closest(".member-image");

        parent.style.background =
            "linear-gradient(145deg, #f6c4f1, #c76bc9, #713078)";

        console.warn(
            "Photograph not found: " + img.getAttribute("src")
        );

    });

});


// 3. SIMPLE PAGE LOADING EFFECT

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
