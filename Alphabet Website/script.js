document.addEventListener('DOMContentLoaded', () => {
    const alphabetGrid = document.getElementById('alphabetGrid');
    const modal = document.getElementById('imageModal');
    const modalLetter = document.getElementById('modalLetter');
    const modalWord = document.getElementById('modalWord');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Example words and image paths (replace with actual image paths or placeholder URLs)
    const examples = {
        A: { word: 'Apple', image: 'images/a.jpg' },
        B: { word: 'Ball', image: 'images/b.jpg' },
        C: { word: 'Cat', image: 'images/c.jpg' },
        D: { word: 'Dog', image: 'images/d.jpg' },
        E: { word: 'Elephant', image: 'images/e.jpg' },
        F: { word: 'Fish', image: 'images/f.jpg' },
        G: { word: 'Giraffe', image: 'images/g.jpg' },
        H: { word: 'House', image: 'images/h.jpg' },
        I: { word: 'Ice Cream', image: 'images/i.jpg' },
        J: { word: 'Jellyfish', image: 'images/j.jpg' },
        K: { word: 'Kite', image: 'images/k.jpg' },
        L: { word: 'Lion', image: 'images/l.jpg' },
        M: { word: 'Monkey', image: 'images/m.jpg' },
        N: { word: 'Nest', image: 'images/n.jpg' },
        O: { word: 'Orange', image: 'images/o.jpg' },
        P: { word: 'Penguin', image: 'images/p.jpg' },
        Q: { word: 'Queen', image: 'images/q.jpg' },
        R: { word: 'Rabbit', image: 'images/r.jpg' },
        S: { word: 'Sun', image: 'images/s.jpg' },
        T: { word: 'Tiger', image: 'images/t.jpg' },
        U: { word: 'Umbrella', image: 'images/u.jpg' },
        V: { word: 'Violin', image: 'images/v.jpg' },
        W: { word: 'Whale', image: 'images/w.jpg' },
        X: { word: 'Xylophone', image: 'images/x.jpg' },
        Y: { word: 'Yak', image: 'images/y.jpg' },
        Z: { word: 'Zebra', image: 'images/z.jpg' }
    };

    // Create letter boxes
    alphabet.forEach(letter => {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        letterBox.innerHTML = `
            ${letter}
            <img src="${examples[letter].image}" alt="${examples[letter].word}" class="example-image" title="${examples[letter].word}">
        `;
        // Add click event to open modal
        letterBox.addEventListener('click', () => {
            modalLetter.textContent = letter;
            modalWord.textContent = examples[letter].word;
            modalImage.src = examples[letter].image;
            modalImage.alt = examples[letter].word;
            modal.classList.add('show');
        });
        alphabetGrid.appendChild(letterBox);
    });

    // Close modal on close button click
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close modal on clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});