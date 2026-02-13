import { places } from "../data/places.mjs";

/* ===== Footer Dates ===== */
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

/* ===== Visit Message (localStorage) ===== */
const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    visitMessage.textContent =
        days < 1
            ? "Back so soon! Awesome!"
            : `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
}

localStorage.setItem("lastVisit", now);

/* ===== Build Discover Cards ===== */
const container = document.querySelector("#discover-cards");

places.forEach((place, index) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
    <h3>${place.name}</h3>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

    container.appendChild(card);
});