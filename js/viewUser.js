const userId = Number(window.location.search.split("id=")[1]);
const users = JSON.parse(localStorage.getItem("users"));
const user = users.find(u => u.id == userId);
const currentUser = localStorage.getItem("user");
const admin = users.find(u => u.id === 10000);
const main = document.querySelector(".main");

if(currentUser !== null) {
    if(currentUser === admin.email) {
        fillAdminPage();
    } else {
        window.location.replace("/ass1/profile.html");
    }
} else {
    window.location.replace("/ass1/login.html");
}

function fillAdminPage() {
    main.innerHTML =
`
<div class="card col-11 mx-auto mt-3 p-3">
    <a href="/ass1/admin/index.html">Back</a><br>
    <a href="/ass1/admin/editUser.html?id=${user.id}">Edit user</a>
    <div class="card-body">
        <h1 class="card-title">View User Info</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr>
                    <td>ID</td>
                    <td>${user.id}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${user.email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>${user.password}</td>
                </tr>
                <tr>
                    <td>Fisrt Name</td>
                    <td>${user.fname}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>${user.lname}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;
};