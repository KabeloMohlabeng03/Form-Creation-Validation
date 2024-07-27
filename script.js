document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value;

        let isValid = true;
        const messages = [];

        if (usernameInput.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters');
        }

        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push('Email is not valid');
        }

        if (passwordInput.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters');
        }

        if (isValid) {
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.textContent = 'Registration successful!';
        } else {
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.innerHTML = messages.join('<br>');
        }

        feedbackDiv.style.display = 'block';
    });
});