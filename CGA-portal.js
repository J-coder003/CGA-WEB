document.addEventListener('DOMContentLoaded', function () {
    // Student Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Retrieve the username and password values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Perform simple validation
            if (username.trim() === '' || password.trim() === '') {
                alert('Please enter both username and password.');
                return;
            }

            // Retrieve users from local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Find the user with the matching credentials
            const user = users.find(u => u.username === username && u.password === password && u.role === 'student');

            if (user) {
                // Store session data (for demonstration purposes)
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);

                // Redirect to the dashboard or another page upon successful login
                window.location.href = 'Portal-Dashboard.html';
            } else {
                // Show an error message if login fails
                alert('Invalid username or password.');
            }
        });
    }

    // Logout function
    function logout() {
        // Clear session data
        sessionStorage.clear();

        // Redirect to the login page
        window.location.href = 'Portal-Login.html';
    }

    // Attach the logout function to the student logout button, if it exists
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
