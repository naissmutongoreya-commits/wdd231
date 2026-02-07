// Set timestamp on page load
document.getElementById("timestamp").value = new Date().toLocaleString();

// Open modals
document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.modal).showModal();
    });
});

// Close modals
document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
