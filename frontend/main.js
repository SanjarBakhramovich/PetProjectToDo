document.addEventListener("DOMContentLoaded", function(){
    const userList = document.getElementById("user-list");
    const userForm = document.getElementById("user-form");

    async function fetchUsers() {
        const response = await fetch("http://localhost:8080/users");
        const users = await response.json();
        userList.innerHTML = users.map(user=> `<li>$user.name (${user.email})</li>`)
    }

    userForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email})
        });

        if (response.ok) {
            fetchUsers();
        }
    })
})