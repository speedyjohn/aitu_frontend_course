const admin = {
    "email": "admin@astanait.edu.kz",
    "password": "qwerty123asd"
};
const users = JSON.parse(localStorage.getItem("users"));

function validateAdmin(email, password) {
    if(email === admin["email"] && password === admin["password"]) {
        fillAdminPage();
    } else {
        alert("Incorrect data!")
    }
}

function deleteUser(userId) {
    console.log(123)
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));
        alert("User deleted successfully! The page will be reload.")
        window.location.reload();
    } else {
        alert("An error has occured.")
    }
}


function fillAdminPage() {
    main.innerHTML =
`
<div class="card col-11 mx-auto mt-3 p-3">
    <div class="card-body">
        <h1 class="card-title mb-3 text-center">Users</h1>
        <a class="mb-3 btn btn-primary" href="/ass1/admin/createUser.html">Create new user</a>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tbody"></tbody>
        </table>
    </div>
</div>
`;
    const tableBody = document.getElementById("tbody");
    users.forEach(user => {
            const row =
`<tr scope="row">
    <td>${user.id}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.fname}</td>
    <td>${user.lname}</td>
    <td>
        <a href="/ass1/admin/viewUser.html?id=${user.id}"><i class="fa-solid fa-eye"></i></a>
        <a href="/ass1/admin/editUser.html?id=${user.id}"><i class="fa-solid fa-pen"></i></a>
        <button id="delete-${user.id}" class="text-danger bg-transparent border-0" onclick="deleteUser(${user.id})"><i class="fa-solid fa-trash"></i></button>
    </td>
</tr>`;
        tableBody.innerHTML += row;
        });
}

// Creating page content
const main = document.querySelector(".main");
main.innerHTML = `
<div class="card col-6 mx-auto mt-3 p-3">
    <div class="card-body">
        <h1 class="card-title mb-3">Log in</h1>
        <form class="form">
            <div class="mb-3">
                <label for="email">Enter email</label>
                <input class="form-control" type="email" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password">Enter password</label>
                <input class="form-control" type="password" id="password" required>
            </div>
            <button class="btn btn-primary col-12" id="submitLogin">Log in</button>
        </form>
    </div>
</div>`;

document.getElementById("submitLogin").addEventListener("click", () => {
    event.preventDefault();
    validateAdmin(document.getElementById("email").value,
        document.getElementById("password").value);
});
