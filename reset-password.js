document.addEventListener('DOMContentLoaded', function () {
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const messageElement = document.getElementById('message');
    
    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        const email = document.getElementById('resetEmail').value.trim();
        const newPassword = document.getElementById('resetPassword').value.trim();
        
        if (email === '' || newPassword === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find the user and update the password
        const userIndex = users.findIndex(u => u.email === email);
        
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            messageElement.textContent = 'Your password has been successfully reset.';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'No account found with that email address.';
            messageElement.style.color = 'red';
        }
    });
});
