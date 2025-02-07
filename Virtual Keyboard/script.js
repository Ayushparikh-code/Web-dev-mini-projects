let keys = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

if (keys.length > 0 && keyPad && display) {
    let capsLockMode = false;

    keys.forEach(key => {
        key.addEventListener('click', function() {
            if (this.classList.contains('caps')) {
                this.classList.toggle('active');
                keyPad.classList.toggle('uppercase');
                capsLockMode = !capsLockMode; // Toggle capsLockMode
            } else if (this.classList.contains('backspace')) {
                // Remove the last character from display
                display.innerText = display.innerText.slice(0, -1);
            } else {
                // Append the key value to the display
                const keyValue = capsLockMode ? this.dataset.key.toUpperCase() : this.dataset.key.toLowerCase();
                display.innerText += keyValue;
            }
        });
    });
}


