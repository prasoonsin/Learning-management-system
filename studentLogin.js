document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    if (username && password) {
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Please enter both username and password.');
    }
});