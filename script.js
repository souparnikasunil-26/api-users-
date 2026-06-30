const container = document.getElementById("user-container");

async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `
            <p class="error">${error.message}</p>
        `;
    }
}

fetchUsers();