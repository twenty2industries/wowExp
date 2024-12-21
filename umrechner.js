document.querySelector("button").addEventListener("click", calculateMonsters);

function calculateMonsters() {
    // Eingabewerte holen
    const level = parseInt(document.getElementById("lvlInput").value);
    const gainedExp = parseInt(document.getElementById("gainedExp").value);
    const totalExpForLevel = parseInt(document.getElementById("hundertPercent").value);
    const expPerMob = parseInt(document.getElementById("perMob").value);

    // Überprüfen, ob alle Eingabefelder korrekt ausgefüllt sind
    if (isNaN(level) || isNaN(gainedExp) || isNaN(totalExpForLevel) || isNaN(expPerMob)) {
        alert("Bitte fülle alle Felder korrekt aus.");
        return;
    }

    // Berechne, wie viel Erfahrung noch fehlt, um das nächste Level zu erreichen
    const expNeeded = totalExpForLevel - gainedExp;

    // Berechne, wie viele Monster getötet werden müssen
    const monstersToKill = Math.ceil(expNeeded / expPerMob);

    // Ergebnis im Output-Feld anzeigen
    document.querySelector("output").textContent = `Du musst ${monstersToKill} Monster töten, um auf Level ${level + 1} zu kommen.`;
}
