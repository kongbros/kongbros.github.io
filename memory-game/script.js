class MemoryGame {
    constructor() {
        this.gameBoard = document.getElementById('game-board');
        this.movesCount = document.getElementById('moves-count');
        this.timeElement = document.getElementById('time');
        this.restartButton = document.getElementById('restart');
        this.showCharactersButton = document.getElementById('show-characters');
        this.charactersModal = document.getElementById('characters-modal');
        this.charactersGrid = document.getElementById('characters-grid-modal');
        this.closeCharactersButton = document.getElementById('close-characters');
        this.resultContainer = document.getElementById('result');
        this.resultMoves = document.getElementById('result-moves');
        this.resultTime = document.getElementById('result-time');
        this.resultRestartButton = document.getElementById('result-restart');
        
        this.cards = [];
        this.flippedCards = [];
        this.moves = 0;
        this.matches = 0;
        this.gameStarted = false;
        this.timer = null;
        this.seconds = 0;
        
        this.characterHandler = new CharacterGrid({
            container: this.charactersGrid
        });
        
        this.init();
    }
    
    init() {
        this.createCards();
        this.shuffleCards();
        this.renderCards();
        this.attachEventListeners();
    }
    
    createCards() {
        // 30개 캐릭터 중 랜덤으로 10개 선택
        const shuffledCharacters = [...this.characterHandler.allCharacters].sort(() => Math.random() - 0.5);
        const selectedCharacters = shuffledCharacters.slice(0, 10);
        this.selectedCharacters = selectedCharacters; // 선택된 캐릭터들 저장
        this.cards = [];
        
        selectedCharacters.forEach(character => {
            // 각 캐릭터에 대해 2장의 카드 생성
            this.cards.push({
                id: character.id,
                characterId: character.id,
                x: character.x,
                y: character.y,
                matched: false
            });
            this.cards.push({
                id: character.id + 30, // 고유 ID를 위해 30 더함
                characterId: character.id,
                x: character.x,
                y: character.y,
                matched: false
            });
        });
    }
    
    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    renderCards() {
        this.gameBoard.innerHTML = '';
        
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = index;
            cardElement.dataset.characterId = card.characterId;

            const bgPosX = (card.x / this.characterHandler.imgWidth) * 100;
            const bgPosY = (card.y / this.characterHandler.imgHeight) * 100;
            const bgSizeW = this.characterHandler.cols * 100;
            const bgSizeH = this.characterHandler.rows * 100;
            
            cardElement.innerHTML = `
                <div class="card-front"></div>
                <div class="card-back">
                    <div class="character-image" style="background-image: url('characters.png'); background-size: ${bgSizeW}% ${bgSizeH}%; background-position: ${bgPosX}% ${bgPosY}%; width: 100%; height: 100%; border-radius: 10px;"></div>
                </div>
            `;
            
            cardElement.addEventListener('click', () => this.flipCard(index));
            this.gameBoard.appendChild(cardElement);
        });
    }
    
    flipCard(index) {
        if (!this.gameStarted) {
            this.startGame();
        }
        
        const card = this.cards[index];
        const cardElement = this.gameBoard.children[index];
        
        // 이미 뒤집힌 카드나 매치된 카드는 무시
        if (card.matched || this.flippedCards.includes(index)) {
            return;
        }
        
        // 두 장의 카드가 이미 뒤집혀 있다면 추가 클릭 방지
        if (this.flippedCards.length >= 2) {
            return;
        }
        
        // 카드 뒤집기
        cardElement.classList.add('flipped');
        this.flippedCards.push(index);
        
        // 두 장의 카드가 뒤집혔을 때
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.movesCount.textContent = this.moves;
            this.checkMatch();
        }
    }
    
    checkMatch() {
        const [firstIndex, secondIndex] = this.flippedCards;
        const firstCard = this.cards[firstIndex];
        const secondCard = this.cards[secondIndex];
        
        if (firstCard.characterId === secondCard.characterId) {
            // 매치 성공
            setTimeout(() => {
                this.gameBoard.children[firstIndex].classList.add('matched');
                this.gameBoard.children[secondIndex].classList.add('matched');
                firstCard.matched = true;
                secondCard.matched = true;
                this.matches++;
                this.flippedCards = [];
                
                // 게임 완료 확인
                if (this.matches === 10) {
                    this.endGame();
                }
            }, 500);
        } else {
            // 매치 실패
            setTimeout(() => {
                this.gameBoard.children[firstIndex].classList.remove('flipped');
                this.gameBoard.children[secondIndex].classList.remove('flipped');
                this.flippedCards = [];
            }, 1000);
        }
    }
    
    startGame() {
        this.gameStarted = true;
        this.timer = setInterval(() => {
            this.seconds++;
            this.updateTimer();
        }, 1000);
    }
    
    updateTimer() {
        const minutes = Math.floor(this.seconds / 60);
        const secs = this.seconds % 60;
        this.timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    endGame() {
        clearInterval(this.timer);
        
        setTimeout(() => {
            this.resultMoves.textContent = this.moves;
            this.resultTime.textContent = this.timeElement.textContent;
            this.resultContainer.classList.remove('hide');
        }, 500);
    }
    
    restartGame() {
        // 게임 상태 초기화
        this.cards = [];
        this.flippedCards = [];
        this.moves = 0;
        this.matches = 0;
        this.gameStarted = false;
        this.seconds = 0;
        
        // UI 초기화
        this.movesCount.textContent = '0';
        this.timeElement.textContent = '00:00';
        this.resultContainer.classList.add('hide');
        
        // 타이머 정지
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // 새 게임 시작
        this.init();
    }
    
    attachEventListeners() {
        this.restartButton.addEventListener('click', () => this.restartGame());
        this.resultRestartButton.addEventListener('click', () => this.restartGame());
        this.showCharactersButton.addEventListener('click', () => this.showCharacters());
        this.closeCharactersButton.addEventListener('click', () => this.hideCharacters());
        this.charactersModal.addEventListener('click', (e) => {
            if (e.target === this.charactersModal) {
                this.hideCharacters();
            }
        });
    }
    
    showCharacters() {
        this.characterHandler.renderCharacters(this.selectedCharacters);
        this.charactersModal.classList.remove('hide');
    }
    
    hideCharacters() {
        this.charactersModal.classList.add('hide');
    }
}

// 게임 시작
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
});
