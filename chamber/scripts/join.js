// Timestamp
document.getElementById("timestamp").value = new Date().toLocaleString();

// Modals
document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.modal).showModal();
    });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
