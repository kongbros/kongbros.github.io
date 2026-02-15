class CharacterGrid {
    constructor(options) {
        this.container = options.container;
        this.cols = options.cols || 5;
        this.rows = options.rows || 6;
        this.imgSrc = options.imgSrc || 'characters.png';
        
        this.imgWidth = 981;
        this.imgHeight = 1075;
        
        this.allCharacters = this.setupAllCharacters();

        if (options.charactersToDisplay) {
            this.renderCharacters(options.charactersToDisplay);
        } else {
            this.renderCharacters(this.allCharacters);
        }
    }

    setupAllCharacters() {
        const characters = [];
        const tileWidth = this.imgWidth / this.cols;
        const tileHeight = this.imgHeight / this.rows;


        for (let i = 0; i < this.cols * this.rows; i++) {
            const row = Math.floor(i / this.cols);
            const col = i % this.cols;
            
            const x = col * tileWidth;
            const y = row * tileHeight;
            
            var adjustedX = x;
            var adjustedY = y;

            if (col >= 1) {
                adjustedX += 52;
            }
            if (col >= 2) {
                adjustedX += 45;
            }
            if (col >= 3) {
                adjustedX += 48;
            }
            if (col >= 4) {
                adjustedX += 47;
            }
            
            if (row >= 1) {
                adjustedY += 35;
            }
            if (row >= 2) {
                adjustedY += 35;
            }
            if (row >= 3) {
                adjustedY += 35;
            }
            if (row >= 4) {
                adjustedY += 35;
            }
            if (row >= 5) {
                adjustedY += 35;
            }
            characters.push({
                id: i,
                row: row,
                col: col,
                x: adjustedX,
                y: adjustedY
            });
            console.log(characters[characters.length - 1]);
        }
        return characters;
    }

    renderCharacters(characters) {
        this.container.innerHTML = '';
        
        characters.forEach(characterInfo => {
            const character = this.allCharacters.find(c => c.id === characterInfo.id);
            if (!character) return;

            const characterItem = document.createElement('div');
            characterItem.className = 'character-item';
            
            const characterPreview = document.createElement('div');
            characterPreview.className = 'character-preview';
            characterPreview.style.backgroundImage = `url('${this.imgSrc}')`;
            
            const bgPosX = (character.x / this.imgWidth) * 100;
            const bgPosY = (character.y / this.imgHeight) * 100;
            const bgSizeW = this.cols * 100;
            const bgSizeH = this.rows * 100;

            characterPreview.style.backgroundSize = `${bgSizeW}% ${bgSizeH}%`;
            characterPreview.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;

            const characterIdTag = document.createElement('div');
            characterIdTag.className = 'character-info';
            characterIdTag.textContent = `ID: ${character.id}`;
            
            characterItem.appendChild(characterPreview);
            characterItem.appendChild(characterIdTag);
            this.container.appendChild(characterItem);
        });
    }
}
