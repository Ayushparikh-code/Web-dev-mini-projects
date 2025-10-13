class ColorPaletteGenerator {
    constructor() {
        this.currentPalette = [];
        this.lockedColors = [];
        this.savedPalettes = [];
        this.paletteSize = 5;
        
        this.initializeElements();
        this.loadSavedPalettes();
        this.generatePalette();
        this.bindEvents();
    }

    initializeElements() {
        this.generateBtn = document.getElementById('generateBtn');
        this.saveBtn = document.getElementById('saveBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.paletteContainer = document.getElementById('paletteContainer');
        this.savedPalettesList = document.getElementById('savedPalettesList');
    }

    bindEvents() {
        this.generateBtn.addEventListener('click', () => this.generatePalette());
        this.saveBtn.addEventListener('click', () => this.savePalette());
        this.clearBtn.addEventListener('click', () => this.clearSavedPalettes());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'g' || e.key === 'G') {
                this.generatePalette();
            } else if (e.key === 's' || e.key === 'S') {
                this.savePalette();
            }
        });
    }

    generateRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
        const lightness = Math.floor(Math.random() * 30) + 40;  // 40-70%
        
        return this.hslToHex(hue, saturation, lightness);
    }

    generateHarmoniousColor(baseHue, type) {
        let newHue;
        const saturation = Math.floor(Math.random() * 20) + 70; // 70-90%
        const lightness = Math.floor(Math.random() * 30) + 40;  // 40-70%

        switch (type) {
            case 'analogous':
                newHue = (baseHue + Math.floor(Math.random() * 60) - 30) % 360;
                break;
            case 'complementary':
                newHue = (baseHue + 180) % 360;
                break;
            case 'triadic':
                newHue = (baseHue + 120) % 360;
                break;
            case 'splitComplementary':
                const offset = Math.random() > 0.5 ? 150 : 210;
                newHue = (baseHue + offset) % 360;
                break;
            default:
                newHue = Math.floor(Math.random() * 360);
        }

        if (newHue < 0) newHue += 360;
        return this.hslToHex(newHue, saturation, lightness);
    }

    generatePalette() {
        const newPalette = [];
        const baseHue = Math.floor(Math.random() * 360);
        const harmonyTypes = ['analogous', 'complementary', 'triadic', 'splitComplementary', 'random'];

        for (let i = 0; i < this.paletteSize; i++) {
            if (this.lockedColors[i]) {
                newPalette.push(this.currentPalette[i]);
            } else {
                if (i === 0) {
                    newPalette.push(this.generateRandomColor());
                } else {
                    const harmonyType = harmonyTypes[Math.floor(Math.random() * harmonyTypes.length)];
                    if (harmonyType === 'random') {
                        newPalette.push(this.generateRandomColor());
                    } else {
                        newPalette.push(this.generateHarmoniousColor(baseHue, harmonyType));
                    }
                }
            }
        }

        this.currentPalette = newPalette;
        this.renderPalette();
    }

    renderPalette() {
        this.paletteContainer.innerHTML = '';

        this.currentPalette.forEach((color, index) => {
            const colorCard = this.createColorCard(color, index);
            this.paletteContainer.appendChild(colorCard);
        });
    }

    createColorCard(color, index) {
        const card = document.createElement('div');
        card.className = 'color-card generating';
        
        const colorDisplay = document.createElement('div');
        colorDisplay.className = 'color-display';
        colorDisplay.style.backgroundColor = color;
        
        const lockBtn = document.createElement('button');
        lockBtn.className = `lock-btn ${this.lockedColors[index] ? 'locked' : ''}`;
        lockBtn.innerHTML = this.lockedColors[index] ? 
            '<i class="fas fa-lock"></i>' : '<i class="fas fa-lock-open"></i>';
        lockBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleLock(index);
        });
        
        colorDisplay.appendChild(lockBtn);
        
        const colorInfo = document.createElement('div');
        colorInfo.className = 'color-info';
        
        const colorCode = document.createElement('div');
        colorCode.className = 'color-code';
        colorCode.textContent = color.toUpperCase();
        
        const copyHint = document.createElement('div');
        copyHint.className = 'copy-hint';
        copyHint.textContent = 'Click to copy';
        
        colorInfo.appendChild(colorCode);
        colorInfo.appendChild(copyHint);
        
        card.appendChild(colorDisplay);
        card.appendChild(colorInfo);
        
        card.addEventListener('click', () => this.copyToClipboard(color));
        
        return card;
    }

    toggleLock(index) {
        this.lockedColors[index] = !this.lockedColors[index];
        this.renderPalette();
        
        const action = this.lockedColors[index] ? 'locked' : 'unlocked';
        this.showNotification(`Color ${action}!`);
    }

    copyToClipboard(color) {
        navigator.clipboard.writeText(color).then(() => {
            this.showNotification(`Copied ${color} to clipboard!`);
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = color;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification(`Copied ${color} to clipboard!`);
        });
    }

    savePalette() {
        if (this.currentPalette.length === 0) {
            this.showNotification('Generate a palette first!', 'error');
            return;
        }

        const paletteData = {
            id: Date.now(),
            colors: [...this.currentPalette],
            timestamp: new Date().toLocaleDateString()
        };

        this.savedPalettes.unshift(paletteData);
        this.saveToLocalStorage();
        this.renderSavedPalettes();
        this.showNotification('Palette saved successfully!');
    }

    loadPalette(paletteData) {
        this.currentPalette = [...paletteData.colors];
        this.lockedColors = new Array(this.paletteSize).fill(false);
        this.renderPalette();
        this.showNotification('Palette loaded!');
    }

    deleteSavedPalette(id) {
        this.savedPalettes = this.savedPalettes.filter(palette => palette.id !== id);
        this.saveToLocalStorage();
        this.renderSavedPalettes();
        this.showNotification('Palette deleted!');
    }

    clearSavedPalettes() {
        if (this.savedPalettes.length === 0) {
            this.showNotification('No saved palettes to clear!', 'error');
            return;
        }

        if (confirm('Are you sure you want to clear all saved palettes?')) {
            this.savedPalettes = [];
            this.saveToLocalStorage();
            this.renderSavedPalettes();
            this.showNotification('All saved palettes cleared!');
        }
    }

    renderSavedPalettes() {
        this.savedPalettesList.innerHTML = '';

        if (this.savedPalettes.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'No saved palettes yet. Create and save some beautiful color combinations!';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = '#666';
            emptyMessage.style.fontStyle = 'italic';
            this.savedPalettesList.appendChild(emptyMessage);
            return;
        }

        this.savedPalettes.forEach(palette => {
            const paletteDiv = document.createElement('div');
            paletteDiv.className = 'saved-palette';

            const colorsDiv = document.createElement('div');
            colorsDiv.className = 'saved-colors';

            palette.colors.forEach(color => {
                const colorDiv = document.createElement('div');
                colorDiv.className = 'saved-color';
                colorDiv.style.backgroundColor = color;
                colorDiv.title = color;
                colorDiv.addEventListener('click', () => this.copyToClipboard(color));
                colorsDiv.appendChild(colorDiv);
            });

            const loadBtn = document.createElement('button');
            loadBtn.className = 'load-palette';
            loadBtn.innerHTML = '<i class="fas fa-download"></i> Load';
            loadBtn.addEventListener('click', () => this.loadPalette(palette));

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-palette';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.addEventListener('click', () => this.deleteSavedPalette(palette.id));

            const dateSpan = document.createElement('span');
            dateSpan.textContent = palette.timestamp;
            dateSpan.style.fontSize = '0.8rem';
            dateSpan.style.color = '#666';

            paletteDiv.appendChild(colorsDiv);
            paletteDiv.appendChild(dateSpan);
            paletteDiv.appendChild(loadBtn);
            paletteDiv.appendChild(deleteBtn);

            this.savedPalettesList.appendChild(paletteDiv);
        });
    }

    saveToLocalStorage() {
        localStorage.setItem('colorPalettes', JSON.stringify(this.savedPalettes));
    }

    loadSavedPalettes() {
        const saved = localStorage.getItem('colorPalettes');
        if (saved) {
            this.savedPalettes = JSON.parse(saved);
            this.renderSavedPalettes();
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ColorPaletteGenerator();
});

// Add some fun easter eggs
let konamiSequence = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiSequence.push(e.keyCode);
    
    if (konamiSequence.length > konamiCode.length) {
        konamiSequence.shift();
    }
    
    if (konamiSequence.join(',') === konamiCode.join(',')) {
        // Easter egg: Rainbow palette
        const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff'];
        const generator = window.colorGenerator;
        if (generator) {
            generator.currentPalette = rainbowColors;
            generator.renderPalette();
            generator.showNotification('🌈 Rainbow mode activated! 🌈');
        }
        konamiSequence = [];
    }
});

// Make the generator globally accessible for easter eggs
let colorGenerator;
document.addEventListener('DOMContentLoaded', () => {
    colorGenerator = new ColorPaletteGenerator();
    window.colorGenerator = colorGenerator;
});