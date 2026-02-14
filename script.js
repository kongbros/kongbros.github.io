const difficultySelect = document.getElementById('difficulty');
const imageInput = document.getElementById('image-input');
const gameContainer = document.getElementById('game');
const setupContainer = document.getElementById('setup');
const puzzleContainer = document.getElementById('puzzle-container');
const previewImage = document.getElementById('preview-image');
const timeEl = document.getElementById('time');
const movesEl = document.getElementById('moves');
const winMessage = document.getElementById('win-message');
const scoreEl = document.getElementById('score');
const playAgainBtn = document.getElementById('play-again');

const GRID_COLS = 4;
const GRID_ROWS = 5;

let moves = 0;
let timer;
let time = 0;
let puzzleState = [];
let originalState = [];
let audioCtx = null;

// Sound Effect Function
function playMoveSound() {
    if (!audioCtx) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A note
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);

    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
}


imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imageUrl = event.target.result;
            previewImage.src = imageUrl;
            startGame(imageUrl);
        };
        reader.readAsDataURL(file);
    }
});

playAgainBtn.addEventListener('click', () => {
    winMessage.classList.add('hidden');
    setupContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
});


function startGame(imageUrl) {
    setupContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    puzzleContainer.innerHTML = '';
    moves = 0;
    time = 0;
    movesEl.textContent = moves;
    timeEl.textContent = time;

    clearInterval(timer);
    timer = setInterval(() => {
        time++;
        timeEl.textContent = time;
    }, 1000);

    puzzleState = [];
    originalState = [];

    for (let i = 0; i < GRID_ROWS * GRID_COLS; i++) {
        const piece = document.createElement('div');
        const col = i % GRID_COLS;
        const row = Math.floor(i / GRID_COLS);

        const pieceData = {
            id: i,
            element: piece,
            originalPos: i,
            currentPos: i,
        };
        
        if (i < GRID_ROWS * GRID_COLS - 1) {
            piece.classList.add('puzzle-piece');
            piece.style.backgroundImage = `url(${imageUrl})`;
            piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
            piece.dataset.id = i;
        } else {
            piece.classList.add('empty-piece');
            pieceData.id = -1; // Empty piece
        }
        
        originalState.push(pieceData);
        puzzleState.push(pieceData);
    }

    const difficulty = parseInt(difficultySelect.value, 10);
    scramblePuzzle(difficulty);

    renderPuzzle();
    checkAndApplyEffects();
}

function scramblePuzzle(difficulty) {
    const shuffleMoves = difficulty * 10;
    let lastMove = -1;

    for (let i = 0; i < shuffleMoves; i++) {
        const emptyIndex = puzzleState.findIndex(p => p.id === -1);
        const neighbors = [];

        // Get valid neighbors
        const top = emptyIndex - GRID_COLS;
        if (top >= 0 && top !== lastMove) neighbors.push(top);

        const bottom = emptyIndex + GRID_COLS;
        if (bottom < puzzleState.length && bottom !== lastMove) neighbors.push(bottom);

        const left = emptyIndex - 1;
        if (emptyIndex % GRID_COLS !== 0 && left !== lastMove) neighbors.push(left);

        const right = emptyIndex + 1;
        if (emptyIndex % GRID_COLS !== GRID_COLS - 1 && right !== lastMove) neighbors.push(right);
        
        const validNeighbors = neighbors.filter(n => n !== lastMove);
        const moveIndex = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];

        // Swap
        [puzzleState[emptyIndex], puzzleState[moveIndex]] = [puzzleState[moveIndex], puzzleState[emptyIndex]];
        lastMove = emptyIndex; // The new empty spot
    }
}


function renderPuzzle() {
    puzzleContainer.innerHTML = '';
    puzzleState.forEach((pieceData, index) => {
        pieceData.currentPos = index;
        puzzleContainer.appendChild(pieceData.element);
    });
}

puzzleContainer.addEventListener('click', (e) => {
    // Initialize AudioContext on first user interaction
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (e.target.classList.contains('puzzle-piece')) {
        const pieceId = parseInt(e.target.dataset.id, 10);
        const pieceIndex = puzzleState.findIndex(p => p.id === pieceId);
        const emptyIndex = puzzleState.findIndex(p => p.id === -1);

        if (areAdjacent(pieceIndex, emptyIndex)) {
            // Move the piece
            [puzzleState[pieceIndex], puzzleState[emptyIndex]] = [puzzleState[emptyIndex], puzzleState[pieceIndex]];
            moves++;
            movesEl.textContent = moves;
            playMoveSound();
            renderPuzzle();

            // --- Effects Handling ---

            // 1. Clear all shake effects from the board for a clean slate.
            puzzleState.forEach(p => p.element.classList.remove('shake'));

            // 2. Update all sparkle effects on the board.
            checkAndApplyEffects();

            // 3. Conditionally apply shake effect ONLY to the moved piece.
            const movedPieceNewIndex = emptyIndex;
            const movedPieceData = puzzleState[movedPieceNewIndex];
            const isMovedPieceCorrect = movedPieceData.id === movedPieceNewIndex;

            if (isMovedPieceCorrect) {
                const row = Math.floor(movedPieceNewIndex / GRID_COLS);
                const col = movedPieceNewIndex % GRID_COLS;
                let hasCorrectNeighbor = false;

                if (row > 0 && puzzleState[movedPieceNewIndex - GRID_COLS].id === (movedPieceNewIndex - GRID_COLS)) hasCorrectNeighbor = true;
                if (!hasCorrectNeighbor && row < GRID_ROWS - 1 && puzzleState[movedPieceNewIndex + GRID_COLS].id === (movedPieceNewIndex + GRID_COLS)) hasCorrectNeighbor = true;
                if (!hasCorrectNeighbor && col > 0 && puzzleState[movedPieceNewIndex - 1].id === (movedPieceNewIndex - 1)) hasCorrectNeighbor = true;
                if (!hasCorrectNeighbor && col < GRID_COLS - 1 && puzzleState[movedPieceNewIndex + 1].id === (movedPieceNewIndex + 1)) hasCorrectNeighbor = true;

                if (hasCorrectNeighbor) {
                    movedPieceData.element.classList.add('shake');
                }
            }
            
            checkWin();
        }
    }
});

function areAdjacent(index1, index2) {
    const col1 = index1 % GRID_COLS;
    const row1 = Math.floor(index1 / GRID_COLS);
    const col2 = index2 % GRID_COLS;
    const row2 = Math.floor(index2 / GRID_COLS);

    return (Math.abs(col1 - col2) === 1 && row1 === row2) || (Math.abs(row1 - row2) === 1 && col1 === col2);
}

function checkAndApplyEffects() {
    // 1. Clear all existing sparkle effects
    puzzleState.forEach(p => {
        if (p.element) {
            p.element.classList.remove(
                'sparkle-top', 'sparkle-right', 'sparkle-bottom', 'sparkle-left'
            );
        }
    });

    // 2. Apply new effects based on current positions
    puzzleState.forEach((pieceData, index) => {
        if (pieceData.id === -1) return; // Skip empty piece

        // Check if the current piece is in its correct original position
        const isCurrentPieceCorrect = pieceData.id === index;
        if (!isCurrentPieceCorrect) return;

        const row = Math.floor(index / GRID_COLS);
        const col = index % GRID_COLS;

        // Check neighbors
        // Top
        if (row > 0) {
            const neighborIndex = index - GRID_COLS;
            const neighborPiece = puzzleState[neighborIndex];
            if (neighborPiece.id === neighborIndex) { // Check if neighbor is also correct
                pieceData.element.classList.add('sparkle-top');
                neighborPiece.element.classList.add('sparkle-bottom');
            }
        }
        // Right
        if (col < GRID_COLS - 1) {
            const neighborIndex = index + 1;
            const neighborPiece = puzzleState[neighborIndex];
            if (neighborPiece.id === neighborIndex) {
                pieceData.element.classList.add('sparkle-right');
                neighborPiece.element.classList.add('sparkle-left');
            }
        }
    });
}


function checkWin() {
    const isWin = puzzleState.every((p, i) => p.id === i || (p.id === -1 && i === puzzleState.length -1));
    
    if (isWin) {
        clearInterval(timer);
        // Temporarily fill the last piece to show full image
        const finalPiece = puzzleState.find(p => p.id === -1).element;
        if(finalPiece) {
            const finalImageIndex = GRID_ROWS * GRID_COLS - 1;
            const col = finalImageIndex % GRID_COLS;
            const row = Math.floor(finalImageIndex / GRID_COLS);
            finalPiece.classList.remove('empty-piece');
            finalPiece.classList.add('puzzle-piece');
            finalPiece.style.backgroundImage = previewImage.src ? `url(${previewImage.src})` : 'none';
            finalPiece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
        }

        checkAndApplyEffects(); // Final sparkle before showing win message
        
        setTimeout(() => {
            const score = Math.max(10, 10000 - time * 10 - moves * 20);
            scoreEl.textContent = score;
            winMessage.classList.remove('hidden');
        }, 500); // Wait a bit for the effect to be seen
    }
}
