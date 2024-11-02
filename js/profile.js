const users = JSON.parse(localStorage.getItem("users"));
const admin = users.find(u => u.id === 10000);
console.log(admin);
function fillPage(user) {
    main.innerHTML =
        `
<div class="card col-11 mx-auto mt-3 p-3">
    <a href="/ass1/index.html">Main page</a>
    <div class="card-body">
        <h1 class="card-title">Your Info:</h1>
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

// Creating page content
const main = document.querySelector(".main");

const userEmail = localStorage.getItem("user");
if(userEmail !== null) {
    if(userEmail === admin.email) {
        window.location.replace("/admin/index.html");
    } else {
        const user = users.find(u => u.email === userEmail);
        fillPage(user);
    }
} else {
    window.location.replace("/ass1/login.html")
}