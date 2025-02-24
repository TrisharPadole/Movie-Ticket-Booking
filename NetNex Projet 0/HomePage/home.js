document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Search functionality
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const movies = document.querySelectorAll('.movie');

        movies.forEach(function(movie) {
            const title = movie.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });

    // Authentication modals
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    registerButton.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeLogin.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    closeRegister.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login logic here
        alert('Login successful!');
        loginModal.style.display = 'none';
    });

    // Handle register form submission
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle registration logic here
        alert('Registration successful!');
        registerModal.style.display = 'none';
    });
});