document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const messageElement = document.getElementById('message');
    
    forgotPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        const email = document.getElementById('forgotEmail').value.trim();
        
        if (email === '') {
            alert('Please enter your email address.');
            return;
        }
        
        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if the email exists
        const user = users.find(u => u.email === email);
        
        if (user) {
            // Simulate sending a reset link
            messageElement.textContent = 'A password reset link has been sent to your email address.';
            messageElement.style.color = 'green';
            
            // Here you would typically send an email with a reset link
        } else {
            messageElement.textContent = 'No account found with that email address.';
            messageElement.style.color = 'red';
        }
    });
});
