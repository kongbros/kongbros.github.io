// 게임 상태
const BOARD_SIZE = 11;
const CENTER = 5;

const TERRAIN = {
    DESERT: 'desert',
    MEADOW: 'meadow',
    OASIS: 'oasis'
};

const PLAYER = {
    WHITE: 'white',
    BLACK: 'black'
};

let board = [];
let selectedKnight = null;
let currentTurn = PLAYER.WHITE;
let gameOver = false;

// DOM 요소
const boardEl = document.getElementById('board');
const boardContainer = document.getElementById('board-container');
const turnBadge = document.getElementById('turn-badge');
const turnText = document.getElementById('turn-text');
const resultModal = document.getElementById('result-modal');
const rulesModal = document.getElementById('rules-modal');
const winnerText = document.getElementById('winner-text');
const winnerDetail = document.getElementById('winner-detail');

// 초기화
function init() {
    board = [];
    selectedKnight = null;
    currentTurn = PLAYER.WHITE;
    gameOver = false;

    createBoard();
    placeKnights();
    renderBoard();
    updateUI();
}

// 지형 타입 결정
function getTerrainType(row, col) {
    if (row === CENTER && col === CENTER) {
        return TERRAIN.OASIS;
    }

    if ((row === CENTER && Math.abs(col - CENTER) <= 2 && Math.abs(col - CENTER) >= 1) ||
        (col === CENTER && Math.abs(row - CENTER) <= 2 && Math.abs(row - CENTER) >= 1)) {
        return TERRAIN.MEADOW;
    }

    if (Math.abs(row - CENTER) === 1 && Math.abs(col - CENTER) === 1) {
        return TERRAIN.MEADOW;
    }

    return TERRAIN.DESERT;
}

// 보드 생성
function createBoard() {
    for (let row = 0; row < BOARD_SIZE; row++) {
        board[row] = [];
        for (let col = 0; col < BOARD_SIZE; col++) {
            board[row][col] = {
                terrain: getTerrainType(row, col),
                knight: null
            };
        }
    }
}

// 나이트 배치
function placeKnights() {
    const topLeftWhite = [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0]];
    topLeftWhite.forEach(([r, c]) => board[r][c].knight = PLAYER.WHITE);

    const topRightBlack = [[0, 8], [0, 9], [0, 10], [1, 10], [2, 10]];
    topRightBlack.forEach(([r, c]) => board[r][c].knight = PLAYER.BLACK);

    const bottomRightWhite = [[8, 10], [9, 10], [10, 8], [10, 9], [10, 10]];
    bottomRightWhite.forEach(([r, c]) => board[r][c].knight = PLAYER.WHITE);

    const bottomLeftBlack = [[8, 0], [9, 0], [10, 0], [10, 1], [10, 2]];
    bottomLeftBlack.forEach(([r, c]) => board[r][c].knight = PLAYER.BLACK);
}

// 보드 렌더링
function renderBoard() {
    boardEl.innerHTML = '';

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const cell = document.createElement('div');
            cell.className = `cell ${board[row][col].terrain}`;
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (board[row][col].knight) {
                const knight = document.createElement('span');
                knight.className = `knight ${board[row][col].knight}`;
                knight.textContent = '♞';
                cell.appendChild(knight);

                if (board[row][col].knight === currentTurn && !gameOver) {
                    cell.classList.add('selectable');
                }
            }

            cell.addEventListener('click', () => handleCellClick(row, col));
            boardEl.appendChild(cell);
        }
    }
}

// 셀 클릭 처리
function handleCellClick(row, col) {
    if (gameOver) return;

    const cell = board[row][col];

    if (selectedKnight) {
        const moves = getValidMoves(selectedKnight.row, selectedKnight.col);
        const move = moves.find(m => m.row === row && m.col === col);

        if (move) {
            moveKnight(selectedKnight.row, selectedKnight.col, row, col);
            return;
        }
    }

    if (cell.knight === currentTurn) {
        selectKnight(row, col);
    }
}

// 나이트 선택
function selectKnight(row, col) {
    clearSelection();
    selectedKnight = { row, col };

    const cellEl = getCellElement(row, col);
    cellEl.classList.add('selected');

    const moves = getValidMoves(row, col);
    moves.forEach(move => {
        const moveCellEl = getCellElement(move.row, move.col);
        moveCellEl.classList.add('movable');
    });
}

// 선택 해제
function clearSelection() {
    selectedKnight = null;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('selected', 'movable');
    });
}

// 셀 요소 가져오기
function getCellElement(row, col) {
    return boardEl.children[row * BOARD_SIZE + col];
}

// 유효한 이동 위치 계산
function getValidMoves(row, col) {
    const moves = [];

    // L자 이동
    const knightMoves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    knightMoves.forEach(([dr, dc]) => {
        const newRow = row + dr;
        const newCol = col + dc;

        if (isValidPosition(newRow, newCol)) {
            const targetTerrain = board[newRow][newCol].terrain;
            const targetKnight = board[newRow][newCol].knight;

            let canMove = false;

            if (targetTerrain === TERRAIN.OASIS) {
                canMove = true;
            } else if (targetTerrain === TERRAIN.MEADOW) {
                canMove = false;
            } else if (targetTerrain === TERRAIN.DESERT) {
                canMove = true;
            }

            if (canMove && targetKnight === null) {
                moves.push({ row: newRow, col: newCol });
            }
        }
    });

    // 직진 이동
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    directions.forEach(([dr, dc]) => {
        let newRow = row + dr;
        let newCol = col + dc;
        let lastValidPos = null;

        while (isValidPosition(newRow, newCol)) {
            const targetKnight = board[newRow][newCol].knight;

            if (targetKnight !== null) {
                break;
            }

            lastValidPos = { row: newRow, col: newCol };
            newRow += dr;
            newCol += dc;
        }

        if (lastValidPos && (lastValidPos.row !== row || lastValidPos.col !== col)) {
            moves.push({ row: lastValidPos.row, col: lastValidPos.col });
        }
    });

    return moves;
}

// 유효한 위치인지 확인
function isValidPosition(row, col) {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

// 나이트 이동
function moveKnight(fromRow, fromCol, toRow, toCol) {
    const player = board[fromRow][fromCol].knight;

    board[fromRow][fromCol].knight = null;
    board[toRow][toCol].knight = player;

    clearSelection();

    if (toRow === CENTER && toCol === CENTER) {
        gameOver = true;
        showWinner(player);
    } else {
        currentTurn = currentTurn === PLAYER.WHITE ? PLAYER.BLACK : PLAYER.WHITE;
    }

    renderBoard();
    updateUI();
}

// 승자 표시
function showWinner(player) {
    const playerName = player === PLAYER.WHITE ? '백' : '흑';
    winnerText.textContent = `${playerName} 승리!`;
    winnerDetail.textContent = '오아시스에 먼저 도착했습니다!';
    resultModal.classList.remove('hide');
}

// UI 업데이트
function updateUI() {
    // 턴 배지 업데이트
    turnBadge.className = `turn-badge ${currentTurn}`;
    turnText.textContent = currentTurn === PLAYER.WHITE ? '백 차례' : '흑 차례';

    // 보드 컨테이너 스타일 업데이트
    boardContainer.className = `board-container ${currentTurn}`;
}

// 이벤트 리스너
document.getElementById('restart').addEventListener('click', init);
document.getElementById('result-restart').addEventListener('click', () => {
    resultModal.classList.add('hide');
    init();
});

document.getElementById('show-rules').addEventListener('click', () => {
    rulesModal.classList.remove('hide');
});

document.getElementById('close-rules').addEventListener('click', () => {
    rulesModal.classList.add('hide');
});

rulesModal.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        rulesModal.classList.add('hide');
    }
});

// 게임 시작
init();
