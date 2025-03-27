const levelExperience = {
    1: 400,
    2: 900,
    3: 1400,
    4: 2100,
    5: 2800,
    6: 3600,
    7: 4500,
    8: 5400,
    9: 6500,
    10: 7600,
    11: 8800,
    12: 10100,
    13: 11400,
    14: 12900,
    15: 14400,
    16: 16000,
    17: 17700,
    18: 19700,
    19: 21300,
    20: 23200,
    21: 25200,
    22: 27300,
    23: 29400,
    24: 31700,
    25: 34000,
    26: 36400,
    27: 38900,
    28: 41400,
    29: 44300,
    30: 47400,
    31: 50800,
    32: 54500,
    33: 58600,
    34: 68200,
    35: 67100,
    36: 71600,
    37: 76100,
    38: 80800,
    39: 85700,
    40: 90700,
    41: 95800,
    42: 101000,
    43: 106300,
    44: 111800,
    45: 117500,
    46: 123200,
    47: 129100,
    48: 135100,
    49: 141200,
    50: 147500,
    51: 153900,
    52: 160400,
    53: 167100,
    54: 173900,
    55: 180800,
    56: 187900,
    57: 195000,
    58: 202300,
    59: 209800, // richtigen Werte; Quelle siehe Foto im Ordner 
    60: 0 // Level 60 benötigt keine weitere Erfahrung
};

document.getElementById("calculateButton").addEventListener("click", calculateExperience);


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculateExperience();
    }
});

function calculateExperience() {

    const level = parseInt(document.getElementById("lvlInput").value);
    const gainedPercent = parseFloat(document.getElementById("gainedPercent").value);
    const expPerMob = parseFloat(document.getElementById("perMob").value);


    if (isNaN(level) || level < 1 || level > 60 || isNaN(gainedPercent) || gainedPercent < 0 || gainedPercent > 100) {
        alert("Bitte gebe ein Level zwischen 1-60 an.");
        return;
    }


    const totalExpForLevel = levelExperience[level];

    if (totalExpForLevel === undefined) {
        alert("Keine Daten für dieses Level verfügbar.");
        return;
    }

    // Bereits erreichte Erfahrung berechnen
    const gainedExp = (gainedPercent / 100) * totalExpForLevel;

    // Fehlende Erfahrung berechnen
    const expNeeded = totalExpForLevel - gainedExp;

    // Wenn XP pro Mob angegeben wurde
    if (!isNaN(expPerMob) && expPerMob > 0) {
        const monstersToKill = Math.ceil(expNeeded / expPerMob);

        // Ergebnis anzeigen mit XP pro Mob
        document.querySelector("output").textContent = 
            `Dir fehlen ${Math.ceil(expNeeded)} XP (${((expNeeded / totalExpForLevel) * 100).toFixed(2)}%) oder ${monstersToKill} Monster, um auf Level ${level + 1} zu kommen.`;
    } else {
        // Ergebnis anzeigen ohne XP pro Mob
        document.querySelector("output").textContent = 
            `Dir fehlen ${Math.ceil(expNeeded)} XP (${((expNeeded / totalExpForLevel) * 100).toFixed(2)}%), um auf Level ${level + 1} zu kommen.`;
    }

    // Animation des Drachen starten
    const dragon = document.getElementById("dragonGif");
    dragon.style.visibility = "visible"; // Drachen sichtbar machen
    dragon.style.animation = "flyAcross 12s linear"; // Animation anwenden
}
