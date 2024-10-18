
const gridElement = document.getElementById('grid');
const gridSize = 20; 
const symbols = []; 


for (let i = 0; i < gridSize * gridSize; i++) {
    const symbol = document.createElement('span'); 
    symbol.classList.add('symbol'); 
    symbol.textContent = '@'; 
    gridElement.appendChild(symbol); 
    symbols.push(symbol);
}

function createLoopingWave() {
    const rect = gridElement.getBoundingClientRect(); 
    const centerX = rect.left + rect.width / 2; 
    const centerY = rect.top + rect.height / 2;
    const maxRadius = Math.max(rect.width, rect.height); 

    let currentRadius = 0;
    let expanding = true;

    const interval = setInterval(() => {
        if (expanding) {
            currentRadius += 5; 
            if (currentRadius >= maxRadius) expanding = false; 
        } else {
            currentRadius -= 5; 
            if (currentRadius <= 0) expanding = true;
        }

        symbols.forEach(symbol => {
            const symbolRect = symbol.getBoundingClientRect(); 
            const symbolX = symbolRect.left + symbolRect.width / 2;
            const symbolY = symbolRect.top + symbolRect.height / 2; 

            const distance = Math.sqrt(Math.pow(symbolX - centerX, 2) + Math.pow(symbolY - centerY, 2));

            if (distance < currentRadius) {
                const sizeIncrease = (maxRadius - distance) / 10; 
                symbol.style.fontSize = (20 + sizeIncrease) + 'px'; 
            } else {
                symbol.style.fontSize = '20px'; 
            }
        });
    }, 100); 
}
createLoopingWave();
