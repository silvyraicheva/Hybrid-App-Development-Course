import { setupEventListeners, showView } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    initializeApp();
});

// Save data to sessionStorage

function initializeApp() {
    showView("viewHome"); // Or any other default view for logged users
}
