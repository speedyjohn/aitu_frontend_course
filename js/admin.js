const users = JSON.parse(localStorage.getItem("users"));
const admin = users.find(u => u.id === 10000);
const userEmail = localStorage.getItem("user");
function deleteUser(userId) {
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
    <a href="/ass1/index.html">Main page</a>
    <a href="/ass1/admin/applications.html">Applications</a>
    <div class="card-body">
        <h1 class="card-title mb-3 text-center" id="title12">Users</h1>
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

if(localStorage.getItem("user") === admin.email) {
    fillAdminPage();
} else {
    window.location.replace("/ass1/login.html")
}
if(userEmail !== null) {
    if(userEmail === admin.email) {
        fillAdminPage();
    } else {
        window.location.replace("/ass1/profile.html")
    }
} else {
    window.location.replace("/ass1/login.html")
}