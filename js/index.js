// LOADER SCREEN
const preloader =  document.getElementById('preloader')
window.addEventListener('load', () => {
    preloader.style.display = 'none';
})

// RESPONSIVE MENU
const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".nav-menu");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else 
        entry.target.classList.remove("show")
    })
})

const offScreen = document.querySelectorAll(".hidden");
offScreen.forEach((el) => observer.observe(el))


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach( n => n.addEventListener("click",
() => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))