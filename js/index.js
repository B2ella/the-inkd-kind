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

// FAQ SECTION 
let toggles = document.getElementsByClassName('toggle');
let contentdiv = document.getElementsByClassName('content');
let icon = document.getElementsByClassName('icon');

console.log(toggles, contentdiv, icon);

for (let i = 0 ; i < toggles.length; i++){
    toggles[i].addEventListener('click', ()=> {
        if( parseInt(contentdiv[i].style.height) 
        != contentdiv[i].scrollHeight){
        contentdiv[i].style.height = contentdiv
        [i].scrollHeight + "px";
        icon[i].classList.remove('fa-plus');
        icon[i].classList.add('fa-minus');
        }
        else {
            contentdiv[i].style.height = "0px";
            icon[i].classList.remove('fa-minus');
            icon[i].classList.add('fa-plus');
        }

    })
}