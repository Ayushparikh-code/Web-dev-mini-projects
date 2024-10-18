document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thank you for reaching out, ' + name + '! We will get back to you shortly.';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
    }
});
