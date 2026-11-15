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
// DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

// Load Saved Theme
const savedTheme = localStorage.getItem("aranya-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("aranya-theme", "dark");
        themeToggle.textContent = "☀️ Light";
    } else {
        localStorage.setItem("aranya-theme", "light");
        themeToggle.textContent = "🌙 Dark";
    }

});
// ARANYA LANGUAGE SWITCH

const languageToggle = document.getElementById("languageToggle");

const translations = {
    bn: {
        navHome: "হোম",
        navAbout: "আমাদের সম্পর্কে",
        navProducts: "পণ্যসমূহ",
        navGallery: "গ্যালারি",
        navContact: "যোগাযোগ",
        navContactButton: "যোগাযোগ করুন",

        heroTag: "অরণ্য ডেইরি এন্ড ক্যাটল ফার্মে স্বাগতম",
        heroTitle: "প্রকৃতির যত্নে,<br>বিশুদ্ধতার পথে।",
        heroDescription: "প্রাকৃতিক পরিবেশে যত্ন ও ভালোবাসায় গড়ে ওঠা আমাদের খামার। বিশ্বাস ও গুণগত মানই আমাদের অঙ্গীকার।",
        heroExplore: "আমাদের খামার দেখুন",
        heroContact: "যোগাযোগ করুন",
aboutLabel: "অরণ্য সম্পর্কে",
aboutTitle: "আমাদের গল্প,<br>আমাদের অঙ্গীকার।",
aboutDescription1: "অরণ্য ডেইরি এন্ড ক্যাটল ফার্ম মৌলভীবাজারের বর্ষিজোড়ায় অবস্থিত একটি আধুনিক ডেইরি ও ক্যাটল ফার্ম।",
aboutDescription2: "প্রাণীর যত্ন, পরিচ্ছন্ন পরিবেশ এবং দায়িত্বশীল খামার ব্যবস্থাপনাকে আমরা সর্বোচ্চ গুরুত্ব দিই।",
aboutButton: "আরও জানুন →",
productsLabel: "আমাদের পণ্যসমূহ",
productsTitle: "আমাদের পণ্যসমূহ",
productsDescription: "অরণ্য ডেইরি এন্ড ক্যাটল ফার্মের নিজস্ব খামারের পণ্য।",

milkCategory: "তাজা দুগ্ধজাত পণ্য",
milkTitle: "খাঁটি গরুর দুধ",
milkDescription: "অরণ্য ডেইরি এন্ড ক্যাটল ফার্মের দুধ সংগ্রহ ও সরবরাহের তথ্য।",

gheeCategory: "ঐতিহ্যবাহী দুগ্ধজাত পণ্য",
gheeTitle: "খাঁটি ঘি",
gheeDescription: "অরণ্য ডেইরি এন্ড ক্যাটল ফার্মের ঘি সম্পর্কে বিস্তারিত জানতে যোগাযোগ করুন।",

milkUnit500: "৫০০ মিলি",
milkUnit1000: "১ লিটার",
gheeUnit: "৫০০ গ্রাম",
orderButton: "অর্ডার করুন →",
galleryLabel: "আমাদের খামারের মুহূর্ত",
galleryTitle: "অরণ্যের খামার",
galleryDescription: "আমাদের খামারের প্রতিদিনের কিছু মুহূর্ত।",
contactLabel: "যোগাযোগ করুন",
contactTitle: "অরণ্যের সঙ্গে<br>থাকুন সংযুক্ত।",
contactDescription: "আমাদের দুধ ও ঘি সম্পর্কে জানতে, অর্ডার করতে অথবা খামার সম্পর্কে বিস্তারিত জানতে যোগাযোগ করুন।",
callButton: "কল করুন →",

phoneLabel: "ফোন নম্বর",
emailLabel: "ইমেইল ঠিকানা",
locationLabel: "আমাদের অবস্থান",
locationAddress: "বর্ষিজোড়া, মৌলভীবাজার-৩২০০",
locationCountry: "সিলেট, বাংলাদেশ",
footerSlogan: "প্রকৃতির যত্নে, বিশুদ্ধতার পথে।",
footerQuickLinks: "গুরুত্বপূর্ণ লিংক",
footerAbout: "আমাদের সম্পর্কে",
footerGallery: "খামারের গ্যালারি",
footerContact: "যোগাযোগের তথ্য",
footerAddress: "বর্ষিজোড়া, মৌলভীবাজার",
footerFollow: "আমাদের অনুসরণ করুন",
copyright: "সর্বস্বত্ব সংরক্ষিত।"
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navProducts: "Products",
        navGallery: "Gallery",
        navContact: "Contact",
        navContactButton: "Contact Us",

        heroTag: "WELCOME TO ARANYA DAIRY & CATTLE FARM",
        heroTitle: "Caring for Nature,<br>Committed to Purity.",
        heroDescription: "Our farm is built with care and love in a natural environment. Quality and trust are our commitments.",
        heroExplore: "Explore Our Farm",
        heroContact: "Contact Us",
       aboutLabel: "ABOUT ARANYA",
aboutTitle: "Our Story,<br>Our Commitment.",
aboutDescription1: "Aranya Dairy & Cattle Farm is a modern dairy and cattle farm located in Barshijura, Moulvibazar.",
aboutDescription2: "We give the highest priority to animal care, a clean environment and responsible farm management.",
aboutButton: "Learn More →",
productsLabel: "OUR PRODUCTS",
productsTitle: "Our Products",
productsDescription: "Products from our own farm at Aranya Dairy & Cattle Farm.",

milkCategory: "FRESH DAIRY PRODUCT",
milkTitle: "Pure Cow Milk",
milkDescription: "Information about milk collection and supply from Aranya Dairy & Cattle Farm.",

gheeCategory: "TRADITIONAL DAIRY",
gheeTitle: "Pure Ghee",
gheeDescription: "Contact us to learn more about ghee from Aranya Dairy & Cattle Farm.",

milkUnit500: "500 ML",
milkUnit1000: "1 Litre",
gheeUnit: "500 Gram",
orderButton: "Order Now →",
galleryLabel: "OUR FARM MOMENTS",
galleryTitle: "Aranya Farm",
galleryDescription: "A glimpse into the everyday moments of our farm.",
contactLabel: "GET IN TOUCH",
contactTitle: "Stay Connected<br>with Aranya.",
contactDescription: "Contact us to learn about our milk and ghee, place an order, or know more about our farm.",
callButton: "Call Now →",

phoneLabel: "PHONE NUMBER",
emailLabel: "EMAIL ADDRESS",
locationLabel: "OUR LOCATION",
locationAddress: "Barshijura, Moulvibazar-3200",
locationCountry: "Sylhet, Bangladesh",
footerSlogan: "Caring for Nature, Committed to Purity.",
footerQuickLinks: "QUICK LINKS",
footerAbout: "About Us",
footerGallery: "Farm Gallery",
footerContact: "CONTACT INFORMATION",
footerAddress: "Barshijura, Moulvibazar",
footerFollow: "FOLLOW US",
copyright: "All Rights Reserved."
    }
};

function setLanguage(language) {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }

    });

    languageToggle.textContent = language === "bn" ? "English" : "বাংলা";

    document.documentElement.lang = language;

    localStorage.setItem("aranya-language", language);
}

// Load Saved Language
const savedLanguage = localStorage.getItem("aranya-language") || "bn";

setLanguage(savedLanguage);

// Language Button Click
languageToggle.addEventListener("click", () => {

    const currentLanguage = localStorage.getItem("aranya-language");

    const newLanguage = currentLanguage === "bn" ? "en" : "bn";

    setLanguage(newLanguage);

});