
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
    10: 7800,
    11: 9000,
    12: 10400,
    13: 11900,
    14: 13500,
    15: 15200,
    16: 17000,
    17: 18900,
    18: 20900,
    19: 23000,
    20: 25200,
    21: 27500,
    22: 29900,
    23: 32400,
    24: 35000,
    25: 37700,
    26: 40500,
    27: 43400,
    28: 46400,
    29: 49500,
    30: 52700,
    31: 56000,
    32: 59400,
    33: 62900,
    34: 66500,
    35: 70200,
    36: 74000,
    37: 77900,
    38: 81900,
    39: 86000,
    40: 90200,
    41: 94500,
    42: 98900,
    43: 103400,
    44: 108000,
    45: 112700,
    46: 117500,
    47: 122400,
    48: 127400,
    49: 132500,
    50: 137700,
    51: 143000,
    52: 148400,
    53: 153900,
    54: 173900,
    55: 165200,
    56: 171000,
    57: 176900,
    58: 182900,
    59: 209800, // Aktualisierter Wert
    60: 0 // Level 60 benötigt keine weitere Erfahrung
};


document.getElementById("calculateButton").addEventListener("click", calculateExperience);

function calculateExperience() {
    // Eingabewerte holen
    const level = parseInt(document.getElementById("lvlInput").value);
    const gainedPercent = parseFloat(document.getElementById("gainedPercent").value);
    const expPerMob = parseFloat(document.getElementById("perMob").value);

    // Eingaben validieren
    if (isNaN(level) || level < 1 || level > 60 || isNaN(gainedPercent) || gainedPercent < 0 || gainedPercent > 100) {
        alert("Bitte gib gültige Eingabewerte ein.");
        return;
    }

    // Gesamte benötigte EXP für das Level
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
}
