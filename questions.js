// ============================================
// FAMILY FEUD - QUESTIONS DATA
// Includes General + Classical Music Questions
// HOST KEEPS THIS AS ANSWER SHEET
// ============================================

const QUESTIONS_DB = [
    // ========== ORIGINAL GENERAL QUESTIONS ==========
    {
        question: "Name something you might find in a teenager's bedroom that parents would hate.",
        answers: [
            { text: "Dirty laundry", points: 42 },
            { text: "Video game mess", points: 28 },
            { text: "Half-eaten food", points: 16 },
            { text: "Loud music speakers", points: 9 },
            { text: "Hidden phone", points: 5 }
        ]
    },
    {
        question: "Tell me a reason people call in sick to work when they're not actually sick.",
        answers: [
            { text: "Need a mental health day", points: 38 },
            { text: "Hangover", points: 27 },
            { text: "Job interview elsewhere", points: 15 },
            { text: "Just want to sleep", points: 12 },
            { text: "Bad weather outside", points: 8 }
        ]
    },
    {
        question: "Name a famous landmark people want to visit before they die.",
        answers: [
            { text: "Eiffel Tower", points: 45 },
            { text: "Great Wall of China", points: 25 },
            { text: "Machu Picchu", points: 15 },
            { text: "Pyramids of Giza", points: 10 },
            { text: "Colosseum", points: 5 }
        ]
    },
    {
        question: "Something you might forget to bring on a beach vacation.",
        answers: [
            { text: "Sunscreen", points: 50 },
            { text: "Towel", points: 22 },
            { text: "Sunglasses", points: 14 },
            { text: "Charger", points: 8 },
            { text: "Flip flops", points: 6 }
        ]
    },
    {
        question: "Name a movie that almost everyone has seen at least once.",
        answers: [
            { text: "Titanic", points: 35 },
            { text: "The Lion King", points: 28 },
            { text: "Harry Potter", points: 20 },
            { text: "Star Wars", points: 12 },
            { text: "Forrest Gump", points: 5 }
        ]
    },
    {
        question: "What's something people do while waiting in line?",
        answers: [
            { text: "Scroll phone", points: 48 },
            { text: "Look around impatiently", points: 22 },
            { text: "Talk to companion", points: 15 },
            { text: "Check watch", points: 10 },
            { text: "Daydream", points: 5 }
        ]
    },

    // ========== CLASSICAL MUSIC QUESTIONS ==========
    {
        question: "Name the worst instrument to sit near or in front of in an orchestra.",
        answers: [
            { text: "Trumpet", points: 35 },
            { text: "Picolo", points: 29 },
            { text: "Viola", points: 17 },
            { text: "Trombone", points: 13 },
            { text: "Saxophone", points: 6 },
        ]
    },
    {
        question: "Which composer would you most want to have dinner with?",
        answers: [
            { text: "Mozart", points: 40 },
            { text: "Beethoven", points: 30 },
            { text: "Bach", points: 17 },
            { text: "Tchaikovsky", points: 13 },
        ]
    },
    {
        question: "What is the best time of day to practice an instrument?",
        answers: [
            { text: "Afternoon", points: 38 },
            { text: "Evening", points: 27 },
            { text: "Night", points: 20 },
            { text: "Morning", points: 15 }
        ]
    },
    {
        question: "What is the hardest instrument to learn to play?",
        answers: [
            { text: "Violin", points: 42 },
            { text: "Piano", points: 28 },
            { text: "Organ", points: 15 },
            { text: "Harp", points: 10 },
            { text: "Cello", points: 5 }
        ]
    },
    {
        question: "What is the most annoying thing about orchestra rehearsals?",
        answers: [
            { text: "Tuning", points: 35 },
            { text: "The conductor stopping", points: 27 },
            { text: "People playing wrong notes", points: 23 },
            { text: "Long rests", points: 15 },
            // { text: "Page turns", points: 8 }
        ]
    },
    {
        question: "What's the first thing you do when you get a new piece of music?",
        answers: [
            { text: "Sight read it", points: 45 },
            { text: "Listen to a recording", points: 25 },
            { text: "Look at the key signature", points: 15 },
            { text: "Check the tempo marking", points: 10 },
            { text: "Circle the hard parts", points: 5 }
        ]
    },
    {
        question: "What's the worst thing that can happen during a performance?",
        answers: [
            { text: "Memory slip", points: 40 },
            { text: "Broken string", points: 25 },
            { text: "Wrong entrance", points: 18 },
            { text: "Reed breaks", points: 12 },
            { text: "Drop your bow", points: 5 }
        ]
    },
    {
        question: "What's the most overplayed classical piece?",
        answers: [
            { text: "Canon in D", points: 45 },
            { text: "Für Elise", points: 25 },
            { text: "Flight of the Bumblebee", points: 15 },
            { text: "Clair de Lune", points: 10 },
            { text: "Moonlight Sonata", points: 5 }
        ]
    },
    {
        question: "Name a reason to skip orchestra rehearsal.",
        answers: [
            { text: "Sick", points: 48 },
            { text: "Too much homework", points: 22 },
            { text: "Concert the night before", points: 15 },
            { text: "It's your birthday", points: 10 },
            { text: "The music is boring", points: 5 }
        ]
    },
    {
        question: "Name something every music student procrastinates on.",
        answers: [
            { text: "Scales", points: 38 },
            { text: "Ear training", points: 27 },
            { text: "Music theory homework", points: 20 },
            { text: "Practicing sight reading", points: 10 },
            { text: "Learning new repertoire", points: 5 }
        ]
    },
    {
        question: "What's the best snack to bring to a long orchestra rehearsal?",
        answers: [
            { text: "Granola bar", points: 35 },
            { text: "Banana", points: 28 },
            { text: "Nuts", points: 18 },
            { text: "Dark chocolate", points: 12 },
            { text: "Apple", points: 7 }
        ]
    },
    {
        question: "Name a composer whose music is deceptively difficult to play.",
        answers: [
            { text: "Mozart", points: 42 },
            { text: "Bach", points: 29 },
            { text: "Ravel", points: 18 },
            { text: "Debussy", points: 11 },
        ]
    },
    {
        question: "What do you do during a 32-bar rest?",
        answers: [
            { text: "Count silently", points: 35 },
            { text: "Zone out", points: 25 },
            { text: "Check your phone", points: 20 },
            { text: "Turn pages quietly", points: 12 },
            { text: "Nap", points: 8 }
        ]
    },
    {
        question: "Name an instrument that gets all the best solos.",
        answers: [
            { text: "Violin", points: 48 },
            { text: "Flute", points: 22 },
            { text: "Oboe", points: 15 },
            { text: "Cello", points: 10 },
            { text: "Clarinet", points: 5 }
        ]
    }
];

// Helper function to shuffle questions
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create a working copy that can be shuffled
let activeQuestions = shuffleQuestions([...QUESTIONS_DB]);

// Log to console for host reference
console.log("🎵 FAMILY FEUD - CLASSICAL MUSIC EDITION 🎵");
console.log(`Loaded ${activeQuestions.length} questions (${QUESTIONS_DB.length} total in database)`);
console.log("📋 Host: Keep this console open or print questions.js for answer sheet");