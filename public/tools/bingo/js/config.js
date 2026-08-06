// Bingo Configuratie - MeetingMasters Online
// Pas deze instellingen aan per klant/event

const BingoConfig = {
    // Event informatie
    eventName: "MeetingMasters Bingo",

    // Kleuren (MeetingMasters huisstijl als default)
    colors: {
        primary: "#EEBE3D",      // MM Geel
        primaryLight: "#FFEEC1", // Banana
        secondary: "#2BA8AA",    // Aqua
        secondaryLight: "#C3DED6", // Ice
        text: "#545454",         // Dark Grey
        textLight: "#898989",    // Grey
        background: "#FFFFFF",   // Wit
        cardBackground: "#FFFFFF",
        crossed: "#2BA8AA",      // Aqua (groen) voor afgekruiste vakjes
        crossedLight: "#C3DED6", // Ice
        accent: "#C64A60",       // Rose (rood) voor kaartnummer en status
        border: "#C8C8C8"        // Light Grey
    },

    // Logo (URL of base64)
    logo: {
        url: "assets/logo.png",
        alt: "Klant Logo"
    },

    // Bingo content type: "words" of "images"
    contentType: "words",

    // Woorden voor woordenbingo (minimaal 24 nodig)
    words: [
        "Teamwork", "Innovatie", "Samenwerking", "Creativiteit",
        "Communicatie", "Feedback", "Doelen", "Strategie",
        "Cultuur", "Vertrouwen", "Groei", "Leiderschap",
        "Motivatie", "Resultaat", "Kwaliteit", "Flexibiliteit",
        "Respect", "Energie", "Focus", "Balans",
        "Verbinding", "Inspiratie", "Ontwikkeling", "Succes",
        "Passie", "Ambitie", "Visie", "Missie",
        "Waarden", "Purpose", "Impact", "Duurzaam"
    ],

    // Plaatjes voor plaatjesbingo (URLs of base64, minimaal 24 nodig)
    images: [
        // Voeg hier image URLs of base64 strings toe
    ],

    // Aantal unieke kaarten
    totalCards: 250,

    // Host wachtwoord (simpele beveiliging)
    hostPassword: "bingo2024"
};

// Exporteer voor gebruik in andere modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BingoConfig;
}
