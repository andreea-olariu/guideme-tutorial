// JAVASCRIPT = ce face pagina atunci cand apasam pe butoane.

// VARIABILA: retinem starea de spirit selectata.
let currentMood = "fericita";

// FUNCTIE: un set de instructiuni care se executa la click.
// Parametrul "mood" primeste "fericita", "calma" sau "trista".
function changeMood(mood) {
  currentMood = mood;

  // Conditii: alegem mesajul si imaginea potrivite.
  if (mood === "fericita") {
    document.body.className = "mood-happy";
    document.getElementById("moodEmoji").textContent = "☀️";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Sunshine");
    document.getElementById("moodMessage").textContent = "Astazi este ziua ta!";
  } else if (mood === "calma") {
    document.body.className = "mood-calm";
    document.getElementById("moodEmoji").textContent = "🌿";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Green leaves");
    document.getElementById("moodMessage").textContent = "Respira adanc. Expira incet.";
  } else if (mood === "trista") {
    document.body.className = "mood-sad";
    document.getElementById("moodEmoji").textContent = "🌧️";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Rain cloud");
    document.getElementById("moodMessage").textContent = "Este in regula sa te simti asa.";
  }

  // Marcam vizual butonul selectat.
  document.querySelectorAll(".mood-button").forEach(function(button) {
    const selected = button.dataset.mood === currentMood;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}


function changeMessage() {
  const element = document.getElementById("message");
  element.textContent = "Pot schimba mesajul cum vreau eu!";
  element.style.color = "purple";
}

function changePhoto() {
  document.getElementById("photo").src = "sun.png";
}

function changePhoto() {
  const image = document.getElementById("photo");
  if (image.src.includes("moon.png")) {
    image.src = "sun.png";
  } else {
    image.src = "moon.png";
  }
}


let counter = 0;

function changeCounter() {
    let p = document.getElementById("p-contor");
    counter++;
    p.textContent = counter;
}

let btn = document.getElementById("btn-contor");
btn.addEventListener("click", changeCounter);


let isDark = false;

function toggleTheme() {
    console.log(isDark)
    if (isDark === false) {
        document.body.style.backgroundColor = "#25253a";
        document.body.style.color = "white";
        isDark = true;
    } else {
        document.body.style.backgroundColor = "#fff2c9";
        document.body.style.color = "#222222";
        isDark = false;
    }
}
