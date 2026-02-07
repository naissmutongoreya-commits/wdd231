const results = document.getElementById("results");
const params = new URLSearchParams(window.location.search);

const fields = [
    { name: "fname", label: "First Name" },
    { name: "lname", label: "Last Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Mobile Phone" },
    { name: "business", label: "Business Name" },
    { name: "timestamp", label: "Date Submitted" }
];

fields.forEach(field => {
    if (params.has(field.name)) {
        const li = document.createElement("li");
        li.textContent = `${field.label}: ${params.get(field.name)}`;
        results.appendChild(li);
    }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

