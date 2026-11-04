
/*
  BINE AI VENIT ÎN JAVASCRIPT! 🚀

  JavaScript ne ajută să facem o pagină web interactivă.

  Cu JavaScript putem:
  - Să afișăm mesaje
  - Să schimbăm texte
  - Să modificăm culori
  - Să reacționăm la apăsarea unui buton
  - Să folosim variabile și funcții

  CUM TESTĂM MODIFICĂRILE?
  1. Modifică o valoare din cod.
  2. Salvează fișierul (Ctrl + S).
  3. Reîncarcă pagina în browser (Refresh).
  4. Apasă butonul și vezi ce se întâmplă!

  IMPORTANT:
  Liniile care încep cu // sunt comentarii.
  Calculatorul le ignoră.
  Ele ne ajută să înțelegem codul.
*/


// ==================================================
// EXERCIȚIUL 1: PRIMUL MEU BUTON 👋
// ==================================================

// O FUNCȚIE este un grup de instrucțiuni
// care execută o anumită acțiune.
//
// function = cuvântul folosit pentru a crea o funcție.
// sayHello = numele funcției.
// () = parantezele funcției.
// {} = între acolade scriem instrucțiunile.
//
// alert() afișează un mesaj într-o fereastră.
//
// TODO:
// Schimbă textul dintre ghilimele.
// Poți scrie un salut sau o glumă!

function sayHello() {
  alert("Salut! Acesta este primul meu buton interactiv!");
}


// ==================================================
// EXERCIȚIUL 2: VARIABILE + SCHIMBAREA TEXTULUI 💌
// ==================================================

// O VARIABILĂ este ca o cutie în care
// putem păstra informații.
// let este folosit pentru a crea o variabilă.
// myMessage este numele variabilei.
// Textul dintre ghilimele este valoarea ei.
//
// TODO:
// Schimbă mesajul cu unul inventat de tine.
// Poți adăuga și emoji-uri!

let myMessage = "You can do amazing things! ✨";

// Această funcție schimbă textul de pe pagină.
// document.getElementById("message")
// caută elementul HTML cu id="message".
// textContent schimbă textul elementului.
// Folosim valoarea variabilei myMessage
// pentru a afișa mesajul ales.

function changeMessage() {
  document.getElementById("message").textContent = myMessage;
}


// ==================================================
// EXERCIȚIUL 3: SALUT PERSONALIZAT 😄
// ==================================================

// Putem folosi o variabilă într-o funcție.
// Semnul + poate uni două texte.
// Exemplu:
// "Salut, " + "Alex"
// devine "Salut, Alex"
// TODO:
// Schimbă numele Alex cu numele tău.
// BONUS: Modifică și mesajul de salut.

let myName = "Alex";

function greet() {
  alert("Salut, " + myName + "! 👋");
}


// ==================================================
// EXERCIȚIUL 4: COLOREAZĂ PAGINA 🌈
// ==================================================

// JavaScript poate modifica aspectul paginii.
// backgroundColor reprezintă culoarea de fundal.
// Culorile pot fi scrise folosind coduri HEX.
// Un cod HEX începe cu # și are 6 caractere.
//
// Exemple:
// #FFB6C1 = roz deschis
// #ADD8E6 = albastru deschis
// #FFFF99 = galben deschis
// #90EE90 = verde deschis
// #E6E6FA = mov deschis
//
// TODO:
// Înlocuiește codul #FFB6C1 cu altă culoare.
// Salvează și vezi cum arată pagina!

function changeColor() {
  document.body.style.backgroundColor = "#FFB6C1";
}


// ==================================================
// EXERCIȚIUL 5: TEXT URIAȘ 🔎
// ==================================================

// Putem modifica dimensiunea textului din JavaScript.
// fontSize reprezintă dimensiunea textului.
// px înseamnă pixeli.
// Exemple:
// 16px = text obișnuit
// 30px = text mare
// 50px = text foarte mare
//
// TODO:
// Înlocuiește 30px cu 40px sau 50px.
// Ce se întâmplă când apeși butonul?

function makeTextBigger() {
  document.getElementById("message").style.fontSize = "30px";
}


// ==================================================
// EXERCIȚIUL 6: CONTOR DE CLICK-URI 🔢
// ==================================================

// Variabilele pot păstra și numere.
// Aici pornim contorul de la 0.

let count = 0;

// De fiecare dată când apăsăm butonul:
// 1. Adunăm 1 la valoarea variabilei count.
// 2. Afișăm noul număr pe pagină.
//
// count = count + 1
// înseamnă că luăm valoarea actuală
// și adăugăm 1.
//
// TODO:
// Apasă butonul de mai multe ori.
//
// BONUS:
// Schimbă + 1 în + 5.
// Ce se întâmplă acum?

function increaseCount() {
  count = count + 1;
  document.getElementById("counter").textContent = count;
}


// ==================================================
// EXERCIȚIUL 7: CUM TE SIMȚI ASTĂZI? 😊
// ==================================================

// O variabilă poate păstra și un emoji.
//
// TODO:
// Schimbă emoji-ul cu unul care te reprezintă.
//
// Exemple:
// 😎 = relaxat
// 🥳 = fericit
// 😴 = obosit
// 🚀 = motivat

let mood = "😊";

// Funcția afișează emoji-ul în pagina HTML.

function showMood() {
  document.getElementById("mood").textContent = mood;
}


// ==================================================
// EXERCIȚIUL 8: MAGIE CU TEXTUL 🪄
// ==================================================

// Putem ascunde sau afișa elemente HTML.
// display = "none" ascunde elementul.
// display = "block" îl afișează.
//
// TODO:
// Apasă butonul pentru a ascunde mesajul.
// BONUS:
// Înlocuiește "none" cu "block".
// Ce se întâmplă?

function hideMessage() {
  document.getElementById("secretMessage").style.display = "none";
}
