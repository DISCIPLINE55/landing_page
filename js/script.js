// Dynamically update the current year in the footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

 // Mobile Menu Toggle
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

        