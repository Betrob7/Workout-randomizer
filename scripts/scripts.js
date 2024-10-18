// Arrays för träningspass för varje muskelgrupp
const benTräningspass = ["Squats", "Walking Lounges", "Marklyft", "Benspark", "Hamstring Curl"];
const ryggTräningspass = ["Pull-ups", "Rodd", "Marklyft", "Latsdrag", "Ryggresningar"];
const armTräningspass = ["Bicepscurl", "Tricepspress", "Hantelcurl", "Dips", "Armhävningar"];
const axlarTräningspass = ["Axelpress", "Lateral Raises", "Front Raises", "Face Pulls", "Arnold Press"];
const mageTräningspass = ["Planka", "Resväskan", "Sit-ups", "Mountain Climbers", "Leg Raises"];

// Funktion för att slumpa fram ett träningspass
function slumpaPass(träningslista) {
    const slumpatPass = träningslista[Math.floor(Math.random() * träningslista.length)];
    document.getElementById("resultat").innerText = slumpatPass; // Visar slumpat pass i <p>-taggen
}

// Lägg till event listeners för varje knapp
document.getElementById("benBtn").addEventListener("click", function() {
    slumpaPass(benTräningspass);
});

document.getElementById("ryggBtn").addEventListener("click", function() {
    slumpaPass(ryggTräningspass);
});

document.getElementById("armBtn").addEventListener("click", function() {
    slumpaPass(armTräningspass);
});

document.getElementById("axlarBtn").addEventListener("click", function() {
    slumpaPass(axlarTräningspass);
});

document.getElementById("mageBtn").addEventListener("click", function() {
    slumpaPass(mageTräningspass);
});
