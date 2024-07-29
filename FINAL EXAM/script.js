document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const inventoryTable = document.getElementById('inventory-table');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle login logic here
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    });

    document.querySelector('.button.is-info').addEventListener('click', () => {
        addItem();
    });

    function addItem() {
        const itemName = prompt('Enter item name:');
        const itemQuantity = prompt('Enter item quantity:');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td>
                <button class="button is-small is-warning">Edit</button>
                <button class="button is-small is-danger">Delete</button>
            </td>
        `;

        row.querySelector('.button.is-warning').addEventListener('click', () => {
            editItem(row);
        });

        row.querySelector('.button.is-danger').addEventListener('click', () => {
            deleteItem(row);
        });

        inventoryTable.appendChild(row);
    }

    function editItem(row) {
        const itemName = prompt('Enter new item name:', row.children[0].textContent);
        const itemQuantity = prompt('Enter new item quantity:', row.children[1].textContent);

        row.children[0].textContent = itemName;
        row.children[1].textContent = itemQuantity;
    }

    function deleteItem(row) {
        inventoryTable.removeChild(row);
    }
});
