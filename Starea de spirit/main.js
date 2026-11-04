// JAVASCRIPT = ce face pagina atunci cand apasam pe butoane.

// VARIABILA: retinem starea de spirit selectata.
let currentMood = "fericita";

// FUNCTIE: un set de instructiuni care se executa la click.
// Parametrul "mood" primeste "fericita", "calma" sau "trista".
function changeMood(mood) {
  currentMood = mood;

  // Conditii: alegem mesajul si imaginea potrivite.
  // O conditie este o instructiune care verifica daca ceva este adevarat sau fals.
  // Exemplu din viata reala:
  // Daca afara ploua, ia umbrela. Daca nu ploua, nu lua umbrela.

  // Daca starea de spirit este fericita, schimbam clasa, emoji-ul si mesajul corespunzator.
  if (mood === "fericita") {
    document.body.className = "mood-happy";

    // Alegem elementul cu id-ul moodEmoji si ii schimbam continutul si atributul aria-label.
    document.getElementById("moodEmoji").textContent = "☀️";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Sunshine");

    // Similar pentru mesajul de stare de spirit, alegem elementul cu id-ul moodMessage si ii schimbam continutul.
    document.getElementById("moodMessage").textContent = "Astazi este ziua ta!";
  } 
  
  // Daca starea de spirit este calma, schimbam clasa, emoji-ul si mesajul corespunzator.
  else if (mood === "calma") {
    document.body.className = "mood-calm";
    document.getElementById("moodEmoji").textContent = "🌿";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Green leaves");
    document.getElementById("moodMessage").textContent = "Respira adanc. Expira incet.";
  } 
  
  // Daca starea de spirit este trista, schimbam clasa, emoji-ul si mesajul corespunzator.
  else if (mood === "trista") {
    document.body.className = "mood-sad";
    document.getElementById("moodEmoji").textContent = "🌧️";
    document.getElementById("moodEmoji").setAttribute("aria-label", "Rain cloud");
    document.getElementById("moodMessage").textContent = "Este in regula sa te simti asa.";
  }

  // Marcam vizual butonul selectat.
  document.querySelectorAll(".mood-button").forEach(function (button) {
    const selected = button.dataset.mood === currentMood;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

// schimba mesajul afisat in pagina.
function changeMessage() {
  // Alegem elementul cu id-ul "message" si ii schimbam continutul si culoarea.
  const element = document.getElementById("message");
  // Schimbam continutul si culoarea mesajului.
  element.textContent = "Pot schimba mesajul cum vreau eu!";
  element.style.color = "purple";
}


function changePhoto() {
  // Alegem elementul cu id-ul "photo" si ii schimbam sursa intre "moon.png" si "sun.png".
  // Atentie -> trebuie sa decomentam sectiunea cu poza in HTML pentru ca aceasta functie sa functioneze.
  const image = document.getElementById("photo");
  if (image.src.includes("moon.png")) {
    image.src = "sun.png";
  } else {
    image.src = "moon.png";
  }
}

let isDark = false;

function toggleTheme() {
  // Schimbam tema intre modul intunecat si cel deschis.
  if (isDark === false) {
    // Setam culorile pentru modul intunecat.
    // document.body este elementul <body> al paginii, putem schimba stilul direct.
    document.body.style.backgroundColor = "#25253a";
    document.body.style.color = "white";
    isDark = true;
  } else {
    document.body.style.backgroundColor = "#fff2c9";
    document.body.style.color = "#222222";
    isDark = false;
  }
}
