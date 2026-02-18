import { getCareers } from './data.js';
import { openModal } from './modal.js';
import { savePreference, getPreference } from './storage.js';

// Responsive Navigation
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });
}

// Highlight Active Nav Link
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Careers Page Logic
const container = document.querySelector("#career-container");
const filterSelect = document.querySelector("#locationFilter");

if (container) {
    async function displayCareers(filter = "all") {
        const careers = await getCareers();

        container.innerHTML = "";

        const filteredCareers = filter === "all"
            ? careers
            : careers.filter(career => career.location === filter);

        filteredCareers.forEach(career => {
            const card = document.createElement("section");
            card.classList.add("card");

            card.innerHTML = `
        <img src="images/mining.jpg" alt="Mining operation site" loading="lazy">
        <h3>${career.title}</h3>
        <p><strong>Education:</strong> ${career.education}</p>
        <p><strong>Salary:</strong> ${career.salary}</p>
        <p><strong>Location:</strong> ${career.location}</p>
        <button class="info-btn">More Info</button>
      `;

            card.querySelector(".info-btn").addEventListener("click", () => {
                openModal(`
          <h2>${career.title}</h2>
          <p>${career.description}</p>
        `);
                savePreference("lastViewed", career.title);
            });

            container.appendChild(card);
        });
    }

    displayCareers();

    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => {
            displayCareers(e.target.value);
        });
    }

    const lastViewed = getPreference("lastViewed");
    if (lastViewed) {
        console.log("Last viewed career:", lastViewed);
    }
}
