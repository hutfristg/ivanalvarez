
document.addEventListener('DOMContentLoaded', function() {
    
        // Toggle button and navigation links functionality
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelectorAll(".navlinks li");

    togglebtn.addEventListener("click", function() {
        this.classList.toggle("click");
        nav.classList.toggle("open");
    });

    // Typed.js functionality for multiple languages
    var typed = new Typed(".input", {
        strings: ["Welcome!", "Bienvenido!", "Ciao!", "Bienvenue!", "欢迎!", 
            "환영합니다!", "Hoş geldiniz!", "ยินดีต้อนรับ!", "Benvenuto!", " Selamat Datang!"],
        typeSpeed: 60,  // Speed of typing in milliseconds
        backSpeed: 20,  // Speed of backspacing in milliseconds
        backDelay: 1000,  // Delay before starting to backspace
        startDelay: 500,  // Delay before starting to type
        loop: true,  // Loops through the strings indefinitely
        showCursor: true  // Show blinking cursor
    });

    const textSpan = document.querySelector('.falling-text');

    textSpan.addEventListener('mouseenter', function() {
        textSpan.classList.add('falling');
    });

    textSpan.addEventListener('mouseleave', function() {
        textSpan.classList.remove('falling');
    });

     window.onload = function() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };
});
