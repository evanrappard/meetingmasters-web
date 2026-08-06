// Bingo Configuration - MeetingMasters Online (English)

const BingoConfig = {
    // Event information
    eventName: "MeetingMasters Bingo",

    // Colours (MeetingMasters brand as default)
    colors: {
        primary: "#EEBE3D",      // MM Yellow
        primaryLight: "#FFEEC1", // Banana
        secondary: "#2BA8AA",    // Aqua
        secondaryLight: "#C3DED6", // Ice
        text: "#545454",         // Dark Grey
        textLight: "#898989",    // Grey
        background: "#FFFFFF",   // White
        cardBackground: "#FFFFFF",
        crossed: "#2BA8AA",      // Aqua (green) for crossed cells
        crossedLight: "#C3DED6", // Ice
        accent: "#C64A60",       // Rose (red) for card number and status
        border: "#C8C8C8"        // Light Grey
    },

    // Logo (URL or base64)
    logo: {
        url: "../assets/logo.png",
        alt: "Client Logo"
    },

    // Bingo content type: "words" or "images"
    contentType: "words",

    // Words for word bingo (at least 24 required)
    words: [
        "Teamwork", "Innovation", "Collaboration", "Creativity",
        "Communication", "Feedback", "Goals", "Strategy",
        "Culture", "Trust", "Growth", "Leadership",
        "Motivation", "Results", "Quality", "Flexibility",
        "Respect", "Energy", "Focus", "Balance",
        "Connection", "Inspiration", "Development", "Success",
        "Passion", "Ambition", "Vision", "Mission",
        "Values", "Purpose", "Impact", "Sustainability"
    ],

    // Images for image bingo (URLs or base64, at least 24 required)
    images: [],

    // Number of unique cards
    totalCards: 250,

    // Host password (simple security)
    hostPassword: "bingo2024"
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BingoConfig;
}
