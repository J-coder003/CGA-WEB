document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const role = document.getElementById('regRole').value;
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const email = document.getElementById('regEmail').value;

        if (role.trim() === '' || username.trim() === '' || password.trim() === '' || email.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        const user = {
            username: username,
            password: password,
            email: email,
            role: role
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(u => u.username === username)) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        
        if (role === 'student') {
            window.location.href = 'Portal-Login.html';
        } else if (role === 'staff') {
            window.location.href = 'Staff-Login.html';
        }
    });
});
