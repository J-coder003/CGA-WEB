document.addEventListener('DOMContentLoaded', async function () {
    const token = sessionStorage.getItem('token');
    if (!token) {
        window.location.href = 'Staff-Login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/dashboard', {
            headers: { 'Authorization': token }
        });

        if (response.ok) {
            const user = await response.json();
            document.getElementById('username').textContent = user.username;
            // Display other details
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
