const menuToggle = document.querySelector(".menu-toggle");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector("#themeToggle");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const navmenu = document.querySelector(".nav-links");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerText = " 🌞";
} else {
    themeToggle.innerText = " 🌙";
}

menuToggle.addEventListener('click', () => {
    navmenu.classList.toggle('active');
});

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.innerText = " 🌞";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.innerText = " 🌙";
    }
});


window.addEventListener("scroll", function () {
    
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    
    let current="";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop-100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
            console.log(current);        
        }
    });

    navLinks.forEach(function(link){
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});


scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    });
});

