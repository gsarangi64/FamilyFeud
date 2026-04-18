// ============================================
// FAMILY FEUD - SIMPLE VERSION
// ============================================

let currentQuestionIndex = 0;
let currentQuestionData = null;
let answersState = [];
let teamAScore = 0;
let teamBScore = 0;
let activeTeam = "A";
let roundPointsPool = 0;
let roundActive = true;
let strikes = 0;
let stealAvailable = false;
let waitingForStealGuess = false;
let stealResolved = false;

// DOM Elements
const questionDisplay = document.getElementById("questionDisplay");
const answersContainer = document.getElementById("answersContainer");
const scoreASpan = document.getElementById("scoreA");
const scoreBSpan = document.getElementById("scoreB");
const statusDiv = document.getElementById("statusMessage");
const nextRoundBtn = document.getElementById("nextRoundBtn");
const resetGameBtn = document.getElementById("resetGameBtn");
const stealBtn = document.getElementById("stealBtn");
const strikeBtn = document.getElementById("strikeBtn");

const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");

function updateScoresUI() {
    scoreASpan.innerText = teamAScore;
    scoreBSpan.innerText = teamBScore;
}

function updateStrikeDisplay() {
    const strikesList = [strike1, strike2, strike3];
    strikesList.forEach((el, idx) => {
        if (idx < strikes) {
            el.innerHTML = "🔴";
        } else {
            el.innerHTML = "⚪";
        }
    });
}

function renderAnswers() {
    if (!currentQuestionData) return;
    answersContainer.innerHTML = "";
    answersState.forEach((ans, idx) => {
        const card = document.createElement("div");
        card.className = `answer-card ${ans.revealed ? "revealed" : ""}`;
        
        const rank = idx + 1;
        
        if (ans.revealed) {
            // Show: "1. Dirty laundry (42 pts)"
            card.innerHTML = `<div class="answer-rank">${rank}.</div><div class="answer-text">${ans.text}</div><div class="answer-points">${ans.points} pts</div>`;
        } else {
            // Show: "1. ???"
            card.innerHTML = `<div class="answer-rank">${rank}.</div><div class="answer-text hidden-answer">???</div>`;
        }
        
        if (!ans.revealed && roundActive && !waitingForStealGuess) {
            card.style.cursor = "pointer";
            card.addEventListener("click", () => handleAnswerReveal(idx));
        } else if (!ans.revealed && waitingForStealGuess) {
            card.style.cursor = "pointer";
            card.addEventListener("click", () => handleStealGuess(idx));
        }
        
        answersContainer.appendChild(card);
    });
}

function updateStatusMessage() {
    if (!roundActive) {
        statusDiv.innerHTML = `Round over! Press NEXT QUESTION.`;
        return;
    }
    if (waitingForStealGuess) {
        statusDiv.innerHTML = `STEAL MODE! Team ${activeTeam === "A" ? "B" : "A"} - click a hidden answer to steal ${roundPointsPool} points!`;
        return;
    }
    statusDiv.innerHTML = `Team ${activeTeam}'s turn | Strikes: ${strikes}/3 | Bank: ${roundPointsPool} pts`;
    if (stealAvailable && !stealResolved && strikes > 0) {
        statusDiv.innerHTML += ` | Other team can STEAL!`;
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= activeQuestions.length) {
        currentQuestionIndex = 0;
        activeQuestions = shuffleQuestions([...QUESTIONS_DB]);
    }
    
    currentQuestionData = activeQuestions[currentQuestionIndex];
    questionDisplay.innerText = currentQuestionData.question;
    
    answersState = currentQuestionData.answers.map(ans => ({
        text: ans.text,
        points: ans.points,
        revealed: false
    }));
    
    roundPointsPool = 0;
    roundActive = true;
    strikes = 0;
    stealAvailable = false;
    waitingForStealGuess = false;
    stealResolved = false;
    
    updateStrikeDisplay();
    renderAnswers();
    updateStatusMessage();
}

function handleAnswerReveal(index) {
    if (!roundActive || waitingForStealGuess) return;
    if (answersState[index].revealed) return;
    
    answersState[index].revealed = true;
    roundPointsPool += answersState[index].points;
    renderAnswers();
    
    const allRevealed = answersState.every(a => a.revealed === true);
    if (allRevealed) {
        if (activeTeam === "A") teamAScore += roundPointsPool;
        else teamBScore += roundPointsPool;
        updateScoresUI();
        statusDiv.innerHTML = `PERFECT! Team ${activeTeam} wins ${roundPointsPool} points!`;
        roundActive = false;
        return;
    }
    
    if (strikes > 0) {
        stealAvailable = true;
    }
    updateStatusMessage();
}

function addStrike() {
    if (!roundActive || waitingForStealGuess) {
        statusDiv.innerHTML = "Can't add strike right now.";
        return;
    }
    if (strikes >= 3) return;
    
    strikes++;
    updateStrikeDisplay();
    
    if (strikes >= 3) {
        statusDiv.innerHTML = `3 STRIKES! Team ${activeTeam} loses the round. Other team can STEAL ${roundPointsPool} points!`;
        stealAvailable = true;
        return;
    }
    
    statusDiv.innerHTML = `STRIKE ${strikes}/3! Wrong answer. Team ${activeTeam} continues.`;
    stealAvailable = true;
}

function attemptSteal() {
    if (!roundActive || waitingForStealGuess || !stealAvailable || stealResolved) {
        statusDiv.innerHTML = "Steal not available right now.";
        return;
    }
    
    waitingForStealGuess = true;
    statusDiv.innerHTML = `STEAL MODE! Team ${activeTeam === "A" ? "B" : "A"} - click a hidden answer to steal!`;
    renderAnswers();
}

function handleStealGuess(index) {
    if (!waitingForStealGuess) return;
    if (answersState[index].revealed) {
        statusDiv.innerHTML = "Pick a hidden answer!";
        return;
    }
    
    waitingForStealGuess = false;
    stealResolved = true;
    const stealingTeam = activeTeam === "A" ? "B" : "A";
    
    if (index === 0) {
        if (stealingTeam === "A") teamAScore += roundPointsPool;
        else teamBScore += roundPointsPool;
        statusDiv.innerHTML = `STEAL SUCCESS! Team ${stealingTeam} steals ${roundPointsPool} points!`;
    } else {
        if (activeTeam === "A") teamAScore += roundPointsPool;
        else teamBScore += roundPointsPool;
        statusDiv.innerHTML = `STEAL FAILED! Team ${activeTeam} keeps ${roundPointsPool} points!`;
    }
    
    updateScoresUI();
    answersState[index].revealed = true;
    roundActive = false;
    
    // Reveal all remaining answers
    answersState.forEach(ans => { if (!ans.revealed) ans.revealed = true; });
    renderAnswers();
}

function nextRound() {
    if (roundActive && !waitingForStealGuess) {
        // Reveal any hidden answers before moving on
        answersState.forEach(ans => { if (!ans.revealed) ans.revealed = true; });
        renderAnswers();
        roundActive = false;
        setTimeout(() => {
            currentQuestionIndex++;
            activeTeam = activeTeam === "A" ? "B" : "A";
            loadQuestion();
        }, 1500);
        return;
    }
    
    currentQuestionIndex++;
    activeTeam = activeTeam === "A" ? "B" : "A";
    loadQuestion();
}

function resetGame() {
    teamAScore = 0;
    teamBScore = 0;
    currentQuestionIndex = 0;
    activeTeam = "A";
    updateScoresUI();
    loadQuestion();
}

// Event Listeners
nextRoundBtn.addEventListener("click", nextRound);
resetGameBtn.addEventListener("click", resetGame);
stealBtn.addEventListener("click", attemptSteal);
strikeBtn.addEventListener("click", addStrike);

// Initialize
function init() {
    activeQuestions = shuffleQuestions([...QUESTIONS_DB]);
    loadQuestion();
    updateScoresUI();
}

init();