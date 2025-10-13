/**
 * Simple Joke App - JavaScript functionality
 * Works completely offline with local jokes
 * Features smooth animations and beautiful UI
 */

class JokeApp {
    constructor() {
        this.jokes = [
            {
                setup: "Why don't scientists trust atoms?",
                punchline: "Because they make up everything!"
            },
            {
                setup: "Why did the scarecrow win an award?",
                punchline: "He was outstanding in his field!"
            },
            {
                setup: "Why don't eggs tell jokes?",
                punchline: "They'd crack each other up!"
            },
            {
                setup: "What do you call a fake noodle?",
                punchline: "An impasta!"
            },
            {
                setup: "How does a penguin build its house?",
                punchline: "Igloos it together!"
            },
            {
                setup: "What do you call a bear with no teeth?",
                punchline: "A gummy bear!"
            },
            {
                setup: "Why don't skeletons fight each other?",
                punchline: "They don't have the guts!"
            },
            {
                setup: "What do you call a dinosaur that crashes his car?",
                punchline: "Tyrannosaurus Wrecks!"
            },
            {
                setup: "Why did the math book look so sad?",
                punchline: "Because it had too many problems!"
            },
            {
                setup: "What do you call a sleeping bull?",
                punchline: "A bulldozer!"
            },
            {
                setup: "Why did the cookie go to the doctor?",
                punchline: "Because it felt crumbly!"
            },
            {
                setup: "What do you call a fish wearing a bowtie?",
                punchline: "Sofishticated!"
            },
            {
                setup: "Why don't programmers like nature?",
                punchline: "It has too many bugs!"
            },
            {
                setup: "What do you call a cow with no legs?",
                punchline: "Ground beef!"
            },
            {
                setup: "Why did the bicycle fall over?",
                punchline: "Because it was two tired!"
            },
            {
                setup: "What do you call a magical dog?",
                punchline: "A labracadabrador!"
            },
            {
                setup: "Why don't scientists trust stairs?",
                punchline: "Because they're always up to something!"
            },
            {
                setup: "What do you call a group of disorganized cats?",
                punchline: "A cat-astrophe!"
            },
            {
                setup: "Why did the coffee file a police report?",
                punchline: "It got mugged!"
            },
            {
                setup: "What do you call a belt made of watches?",
                punchline: "A waist of time!"
            }
        ];
        this.usedJokes = new Set();
        
        this.elements = {
            jokeBtn: document.getElementById('jokeBtn'),
            setup: document.getElementById('setup'),
            punchline: document.getElementById('punchline'),
            loading: document.getElementById('loading'),
            jokeContent: document.getElementById('jokeContent'),
            jokeCard: document.getElementById('jokeCard')
        };
        
        this.isLoading = false;
        this.init();
    }

    init() {
        this.elements.jokeBtn.addEventListener('click', () => this.getNewJoke());
        
        // Add keyboard support
        this.elements.jokeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.getNewJoke();
            }
        });

        // Add welcome animation on page load
        this.showWelcomeAnimation();
    }

    showWelcomeAnimation() {
        // Add a slight delay before showing the welcome animation
        setTimeout(() => {
            this.elements.jokeCard.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.elements.jokeCard.style.transform = 'scale(1)';
            }, 200);
        }, 500);
    }

    async getNewJoke() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoading();
        this.disableButton();

        // Simulate loading time for better UX
        await this.delay(800);

        try {
            const joke = this.getRandomJoke();
            await this.displayJoke(joke);
        } catch (error) {
            console.error('Error getting joke:', error);
        } finally {
            this.isLoading = false;
            this.enableButton();
            this.hideLoading();
        }
    }

    getRandomJoke() {
        // If we've used all jokes, reset the used jokes set
        if (this.usedJokes.size >= this.jokes.length) {
            this.usedJokes.clear();
            console.log('🔄 All jokes used! Starting over...');
        }
        
        // Get available jokes (not used yet)
        const availableJokes = this.jokes.filter((_, index) => !this.usedJokes.has(index));
        
        // Select a random joke from available ones
        const randomIndex = Math.floor(Math.random() * availableJokes.length);
        const selectedJoke = availableJokes[randomIndex];
        
        // Find the original index and mark as used
        const originalIndex = this.jokes.indexOf(selectedJoke);
        this.usedJokes.add(originalIndex);
        
        return selectedJoke;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async displayJoke(joke) {
        // Hide punchline first
        this.elements.punchline.style.display = 'none';
        
        // Animate joke card
        await this.animateJokeCard();
        
        // Display setup
        this.elements.setup.textContent = joke.setup;
        
        // Show punchline after a delay
        setTimeout(() => {
            this.elements.punchline.textContent = joke.punchline;
            this.elements.punchline.style.display = 'block';
            
            // Add punchline animation
            this.elements.punchline.style.opacity = '0';
            this.elements.punchline.style.transform = 'translateY(20px)';
            
            // Force reflow
            this.elements.punchline.offsetHeight;
            
            // Animate in
            this.elements.punchline.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            this.elements.punchline.style.opacity = '1';
            this.elements.punchline.style.transform = 'translateY(0)';
        }, 800);
    }

    animateJokeCard() {
        return new Promise(resolve => {
            // Scale down
            this.elements.jokeCard.style.transform = 'scale(0.95)';
            this.elements.jokeCard.style.opacity = '0.7';
            
            setTimeout(() => {
                // Scale back up
                this.elements.jokeCard.style.transform = 'scale(1)';
                this.elements.jokeCard.style.opacity = '1';
                resolve();
            }, 300);
        });
    }

    showLoading() {
        this.elements.jokeContent.style.display = 'none';
        this.elements.loading.style.display = 'flex';
    }

    hideLoading() {
        this.elements.loading.style.display = 'none';
        this.elements.jokeContent.style.display = 'block';
    }

    disableButton() {
        this.elements.jokeBtn.disabled = true;
        this.elements.jokeBtn.querySelector('.btn-text').textContent = 'Loading...';
        this.elements.jokeBtn.style.cursor = 'not-allowed';
    }

    enableButton() {
        this.elements.jokeBtn.disabled = false;
        this.elements.jokeBtn.querySelector('.btn-text').textContent = 'Get New Joke';
        this.elements.jokeBtn.style.cursor = 'pointer';
    }


    // Add keyboard shortcuts
    handleKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Space bar or Enter to get new joke
            if ((e.code === 'Space' || e.code === 'Enter') && 
                e.target === document.body && 
                !this.isLoading) {
                e.preventDefault();
                this.getNewJoke();
            }
        });
    }
}

// Add CSS animations for error indicator
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new JokeApp();
    
    // Add some fun console messages
    console.log('🎭 Simple Joke App loaded!');
    console.log('💡 Tip: Press Space or Enter to get a new joke!');
    console.log(`📚 Loaded ${app.jokes.length} hilarious jokes!`);
    
    // Add a fun easter egg
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konami.join(',')) {
            console.log('🎉 Konami Code activated! You found the easter egg!');
            document.body.style.animation = 'rainbow 2s ease-in-out';
            
            // Add rainbow animation
            const rainbowStyle = document.createElement('style');
            rainbowStyle.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(rainbowStyle);
            
            setTimeout(() => {
                document.body.style.animation = '';
                rainbowStyle.remove();
            }, 2000);
            
            konamiCode = [];
        }
    });
});
