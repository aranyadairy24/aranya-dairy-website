// FARM GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("lightboxClose");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});
// Footer Current Year

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
// Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});
// Close Mobile Menu After Clicking a Link
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});