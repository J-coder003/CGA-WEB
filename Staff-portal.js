document.addEventListener('DOMContentLoaded', function () {
    // Staff Login
    const staffLoginForm = document.getElementById('staffLoginForm');
    if (staffLoginForm) {
        staffLoginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Retrieve the username and password values
            const username = document.getElementById('staffUsername').value;
            const password = document.getElementById('staffPassword').value;

            // Perform simple validation
            if (username.trim() === '' || password.trim() === '') {
                alert('Please enter both username and password.');
                return;
            }

            // Retrieve users from local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Find the user with the matching credentials
            const user = users.find(u => u.username === username && u.password === password && u.role === 'staff');

            if (user) {
                // Store session data (for demonstration purposes)
                sessionStorage.setItem('staffLoggedIn', 'true');
                sessionStorage.setItem('staffUsername', username);

                // Redirect to the dashboard or another page upon successful login
                window.location.href = 'Staff-dashboard.html';
            } else {
                // Show an error message if login fails
                alert('Invalid username or password.');
            }
        });
    }

    // Staff Logout function
    function staffLogout() {
        // Clear session data
        sessionStorage.clear();

        // Redirect to the staff login page
        window.location.href = 'Staff-Login.html';
    }

    // Attach the staff logout function to the staff logout button, if it exists
    const staffLogoutButton = document.getElementById('staffLogoutButton');
    if (staffLogoutButton) {
        staffLogoutButton.addEventListener('click', staffLogout);
    }
});
