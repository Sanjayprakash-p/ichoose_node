const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;

// Middleware setup
app.use(cors()); // Enable CORS for all origins

// Crossword data
const crosswordData = {
    rowwiseblockCount: 10,
    columnwiseblockCount: 10,
    crossword: [
        { questionCount: 1, question: "A confrontation", answer: "FIGHT", startindex: [0, 0], endindex: [0, 4], across: true, down: true },
        { questionCount: 2, question: "A common element used in construction", answer: "IRON", startindex: [1, 0], endindex: [1, 3], across: true, down: false },
        { questionCount: 3, question: "To rise or ascend", answer: "SOAR", startindex: [2, 0], endindex: [2, 3], across: true, down: false },
        { questionCount: 4, question: "Opposite of soft", answer: "HARD", startindex: [3, 0], endindex: [3, 3], across: true, down: false },
        { questionCount: 5, question: "Not recent", answer: "OLD", startindex: [4, 1], endindex: [4, 3], across: true, down: false },
        { questionCount: 6, question: "To deceive", answer: "LIE", startindex: [5, 2], endindex: [5, 4], across: true, down: false },
        { questionCount: 7, question: "A small container", answer: "BAG", startindex: [6, 3], endindex: [6, 5], across: true, down: false },
        { questionCount: 8, question: "To request or demand", answer: "ASK", startindex: [7, 3], endindex: [7, 5], across: true, down: false },
        { questionCount: 9, question: "To look at carefully", answer: "SEE", startindex: [8, 4], endindex: [8, 6], across: true, down: false },
        { questionCount: 10, question: "To proceed or continue", answer: "GO", startindex: [9, 5], endindex: [9, 6], across: true, down: false }
    ],
    down: [
        { number: 1, clue: "Seafood often seen in aquariums", answer: "FISH" }
    ],
    disableblockindex: [
        5, 6, 7, 8, 9,  
        14, 15, 16, 17, 18, 19, 
        24, 25, 26, 27, 28, 29, 
        34, 35, 36, 37, 38, 39, 
        40, 44, 45, 46, 47, 48, 49, 
        50, 51, 55, 56, 57, 58, 59, 
        60, 61, 62, 66, 67, 68, 69, 
        70, 71, 72, 76, 77, 78, 79, 
        80, 81, 82, 83, 87, 88, 89, 
        90, 91, 92, 93, 94, 97, 98, 99 
    ]
};

// Define the API endpoint
app.get('/crossword', (req, res) => {
    res.json(crosswordData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
