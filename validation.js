// Registration Form Validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.remove());

    let isValid = true;

    // Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('name', 'Name is required');
        isValid = false;
    }

    // Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    // Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long');
        isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    // Age
    const age = document.getElementById('age').value;
    if (isNaN(age) || age < 18 || age > 100) {
        showError('age', 'Age must be a number between 18 and 100');
        isValid = false;
    }

    // Terms and Conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        showError('terms', 'You must agree to the Terms and Conditions');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.remove());

    let isValid = true;

    // Email
    const email = document.getElementById('loginEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('loginEmail', 'Invalid email format');
        isValid = false;
    }

    // Password
    const password = document.getElementById('loginPassword').value;
    if (password.length === 0) {
        showError('loginPassword', 'Password is required');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});

// Helper function to display error messages
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = message;
    element.parentNode.insertBefore(error, element.nextSibling);
}
