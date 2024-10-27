function fillPage(user) {
    main.innerHTML =
        `
<div class="card col-11 mx-auto mt-3 p-3">
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
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email && u.password === password);
    fillPage(user);
})