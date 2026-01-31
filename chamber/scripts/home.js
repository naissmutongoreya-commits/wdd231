const apiKey = "YOUR_OPENWEATHER_API_KEY";
const city = "Bulawayo";
const lat = -20.15;
const lon = 28.58;

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  document.querySelector("#temp").textContent = data.list[0].main.temp.toFixed(1);
  document.querySelector("#desc").textContent = data.list[0].weather[0].description;

  const forecastDiv = document.querySelector("#forecast");
  forecastDiv.innerHTML = "";

  const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

  days.forEach(day => {
    const p = document.createElement("p");
    p.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp.toFixed(1)}°C`;
    forecastDiv.appendChild(p);
  });
}

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const qualified = data.members.filter(
    member => member.membership === 2 || member.membership === 3
  );

  qualified.sort(() => 0.5 - Math.random());
  const selected = qualified.slice(0, 3);

  const container = document.querySelector("#spotlight-container");

  selected.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name}">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Website</a>
      <p>Level: ${member.membership}</p>
    `;

    container.appendChild(card);
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getWeather();
loadSpotlights();
