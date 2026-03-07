const personajes = [
  "Julius Caesar · Estratega y político clave de Roma.",
  "Cleopatra VII · Última reina del Egipto ptolemaico.",
  "Genghis Khan · Fundador del Imperio Mongol.",
  "Mansa Musa · Emperador de Mali y símbolo de prosperidad."
];

const efemerides = [
  "1876: Alexander Graham Bell patenta el teléfono.",
  "1493: Cristóbal Colón regresa de su primer viaje.",
  "1936: Alemania remilitariza Renania.",
  "1965: Marcha de Selma por derechos civiles en EE.UU."
];

const timelineData = [
  { year: "500 a.C", event: "Imperio Persa domina Medio Oriente" },
  { year: "44 a.C", event: "Muerte de Julio César" },
  { year: "476", event: "Caída del Imperio Romano de Occidente" },
  { year: "1492", event: "Llegada de Colón a América" },
  { year: "1914", event: "Inicio de la Primera Guerra Mundial" }
];

const atlasByRegion = {
  europa: "Europa · En 476 d.C. se fragmenta Occidente tras la caída de Roma.",
  asia: "Asia · Siglos de dinastías imperiales y rutas comerciales euroasiáticas.",
  africa: "África · Reinos como Mali y Aksum destacan por comercio y cultura.",
  america: "América · Civilizaciones precolombinas y posterior expansión colonial.",
  "medio-oriente": "Medio Oriente · Centro de imperios antiguos y religiones abrahámicas."
};

const personajeDia = document.querySelector("#personaje-dia");
const efemeridesList = document.querySelector("#efemerides");
const timelineList = document.querySelector("#timeline-list");
const slider = document.querySelector("#year-slider");
const yearLabel = document.querySelector("#year-label");
const atlasInfo = document.querySelector("#atlas-info");
const regionButtons = document.querySelectorAll(".map-region");

const dayIndex = new Date().getDate() % personajes.length;
personajeDia.textContent = personajes[dayIndex];

efemerides.slice(0, 3).forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  efemeridesList.appendChild(li);
});

timelineData.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${item.year}</strong> · ${item.event}`;
  timelineList.appendChild(li);
});

slider.addEventListener("input", (e) => {
  const year = Number(e.target.value);
  yearLabel.textContent = year <= 0 ? `${Math.abs(year)} a.C` : `${year} d.C`;

  if (year < -500) {
    atlasInfo.innerHTML = "<p><strong>Edad Antigua temprana</strong></p><p>Primeras ciudades-estado y expansión de civilizaciones fluviales.</p>";
  } else if (year < 500) {
    atlasInfo.innerHTML = "<p><strong>Antigüedad clásica</strong></p><p>Roma, Han y otros grandes sistemas imperiales.</p>";
  } else if (year < 1500) {
    atlasInfo.innerHTML = "<p><strong>Edad Media</strong></p><p>Reinos, califatos y redes comerciales intercontinentales.</p>";
  } else if (year < 1900) {
    atlasInfo.innerHTML = "<p><strong>Edad Moderna</strong></p><p>Colonización, revoluciones científicas e industrialización.</p>";
  } else {
    atlasInfo.innerHTML = "<p><strong>Edad Contemporánea</strong></p><p>Guerras mundiales, descolonización y globalización.</p>";
  }
});

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    regionButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const region = button.dataset.region;
    atlasInfo.innerHTML = `<p><strong>${button.textContent}</strong></p><p>${atlasByRegion[region]}</p>`;
  });
});
