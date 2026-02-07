const results = document.getElementById("results");
const data = new URLSearchParams(window.location.search);

const fields = ["fname", "lname", "email", "phone", "business", "timestamp"];

fields.forEach(field => {
    if (data.has(field)) {
        const li = document.createElement("li");
        li.textContent = `${field.toUpperCase()}: ${data.get(field)}`;
        results.appendChild(li);
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
