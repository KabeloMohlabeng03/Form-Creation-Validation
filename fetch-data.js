document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('user-list');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();

        dataContainer.innerHTML = ''; // Clear loading message

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            dataContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.textContent = 'Failed to load user data.';
    }
});