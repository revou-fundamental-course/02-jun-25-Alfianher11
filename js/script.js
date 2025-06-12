// Add interactivity if needed in future
console.log("Portfolio website loaded.");

// Greet the user
window.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greetingText = "";

    if (hours < 12) {
        greetingText = "Good morning";
    } else if (hours < 18) {
        greetingText = "Good afternoon";
    } else {
        greetingText = "Good evening";
    }

    const name = prompt("Hi! Welcome! What's your name?");
    greetingElement.textContent = `${greetingText}, ${name || "guest"}! Welcome to my portfolio website.`;
});


/* =================== HEADER =================== */

/* =================== MAIN Content =================== */


/* Tulisan diatas bannernya ganti ganti */
const quotes = [
    "\"Stay curious, keep building, and never stop learning.\"",
    "\"Great things are done by a series of small things brought together.\"",
    "\"Code is like humor. When you have to explain it, it’s bad.\"",
    "\"Discipline is the bridge between goals and accomplishment.\""
];

let index = 0;
const quoteEl = document.getElementById("quote-text");

setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteEl.textContent = quotes[index];
}, 5000);

setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[quoteIndex];
}, 5000); // ganti setiap 5 detik


/*Bannernya gerak boy*/
let indexBanner = 0;

window.onload = function () {
    showBanner();
    setInterval(nextBanner, 3000);
};

function nextBanner() {
    const listImage = document.getElementsByClassName("banner-img");
    indexBanner = (indexBanner + 1) % listImage.length;
    showBanner();
}

function showBanner() {
    const listImage = document.getElementsByClassName("banner-img");
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }
    listImage[indexBanner].style.display = "block";
    console.log("Menampilkan gambar ke:", indexBanner);
}

/* =================== Footer =================== */

