// Game state
let players = [
    { id: 1, name: "Player 1", credits: 1000, bidNumber: null, bidAmount: 0, hasBid: false, isWinner: false },
    { id: 2, name: "Player 2", credits: 1000, bidNumber: null, bidAmount: 0, hasBid: false, isWinner: false },
    { id: 3, name: "Player 3", credits: 1000, bidNumber: null, bidAmount: 0, hasBid: false, isWinner: false }
];
let currentPlayerIndex = 0;
let gamePhase = "bidding"; // "bidding" | "settled"
let luckyNumber = null;

// Initialize the game
function init() {
    renderPlayers();
    updatePrizePool();
    document.getElementById("resetBtn").addEventListener("click", resetGame);
}

// Render all player cards
function renderPlayers() {
    const container = document.getElementById("playersContainer");
    container.innerHTML = "";

    players.forEach((player, index) => {
        const card = document.createElement("div");
        card.className = `player-card ${index === currentPlayerIndex && gamePhase === "bidding" ? "active" : ""} ${player.isWinner ? "winner" : ""}`;
        card.id = `player-${player.id}`;

        card.innerHTML = `
                    <div class="player-name">${player.name}</div>
                    <div class="credit">Credits: ${player.credits}</div>
                    <div class="bid-section">
                        ${gamePhase === "bidding" && !player.hasBid ? `
                            <div class="bid-input">
                                <select id="num-${player.id}">
                                    ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("")}
                                </select>
                            </div>
                            <button class="bid-btn" onclick="submitBid(${player.id})">Submit Bid (100 Credits)</button>
                        ` : `
                            <div class="status ${player.isWinner ? "winner" : (gamePhase === "settled" && luckyNumber !== null && player.bidNumber !== luckyNumber ? "loser" : "neutral")}">
                                ${player.hasBid ? `Bid: Number ${player.bidNumber}, Amount ${player.bidAmount} credits` : "Waiting to bid"}
                            </div>
                        `}
                    </div>
                `;

        container.appendChild(card);
    });
}

// Update prize pool display
function updatePrizePool() {
    const total = players.reduce((sum, p) => sum + p.bidAmount, 0);
    document.getElementById("prizePool").textContent = total;
}

// Submit a bid
function submitBid(playerId) {
    const player = players.find(p => p.id === playerId);
    const numSelect = document.getElementById(`num-${playerId}`);

    const bidNumber = parseInt(numSelect.value);
    const bidAmount = 100;

    if (player.credits < bidAmount) {
        alert("Not enough credits!");
        return;
    }

    player.bidNumber = bidNumber;
    player.bidAmount = bidAmount;
    player.hasBid = true;

    updatePrizePool();
    renderPlayers();

    checkAllBidsSubmitted();
}

// Check if all players have submitted bids
function checkAllBidsSubmitted() {
    const allBid = players.every(p => p.hasBid);
    if (allBid) {
        settleGame();
    } else {
        currentPlayerIndex++;
        renderPlayers();
    }
}

// Settle the game
function settleGame() {
    gamePhase = "settled";
    luckyNumber = Math.floor(Math.random() * 10) + 1;

    const luckyNumEl = document.getElementById("luckyNumber");
    luckyNumEl.style.display = "block";
    document.getElementById("luckyNum").textContent = luckyNumber;

    const winners = players.filter(p => p.bidNumber === luckyNumber);
    const totalPrizePool = players.reduce((sum, p) => sum + p.bidAmount, 0);

    if (winners.length > 0) {
        const prize = Math.floor(totalPrizePool * 0.9);
        const perWinner = Math.floor(prize / winners.length);

        winners.forEach(p => {
            p.isWinner = true;
            p.credits += perWinner;
        });

        // Deduct bid amounts from all players
        players.forEach(p => {
            p.credits -= p.bidAmount;
        });
    } else {
        // No winner, return all bids
        // Credits remain the same (no deduction)
    }

    renderPlayers();
    document.getElementById("resetBtn").style.display = "block";
}

// Reset the game for next round
function resetGame() {
    players = players.map(p => ({
        ...p,
        bidNumber: null,
        bidAmount: 0,
        hasBid: false,
        isWinner: false
    }));
    currentPlayerIndex = 0;
    gamePhase = "bidding";
    luckyNumber = null;
    document.getElementById("luckyNumber").style.display = "none";
    document.getElementById("resetBtn").style.display = "none";
    renderPlayers();
    updatePrizePool();
}

// Start the game
init();