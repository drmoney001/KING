const photoInput = document.getElementById("photoInput");
const gallery = document.getElementById("galleryBox");

photoInput.addEventListener("change", function() {
    const files = Array.from(this.files);

    files.forEach(function(file) {
        if (!file.type.startsWith("image/")) return;

        const imageURL = URL.createObjectURL(file);

        const card = document.createElement("div");
        card.className = "photo-card";

        const image = document.createElement("img");
        image.src = imageURL;
        image.alt = "My uploaded picture";

        card.appendChild(image);
        gallery.appendChild(card);
    });

    this.value = "";
});


function toggleCard(card) {
    card.classList.toggle("active");
}
