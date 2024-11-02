const userId = Number(window.location.search.split("id=")[1]);
const users = JSON.parse(localStorage.getItem("users"));
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
    <div class="card-body">
        <h1 class="card-title mb-3 text-center">Create user</h1>
        <form class="form">
            <div class="mb-3">
                <label for="email">User email</label>
                <input class="form-control" type="email" id="email" required>
            </div>
            <div class="mb-3">
                <label for="email">User password</label>
                <input class="form-control" type="text" id="password" required>
            </div>
            <div class="mb-3">
                <label for="fname">User first name</label>
                <input class="form-control" type="text" id="fname" required>
            </div>
            <div class="mb-3">
                <label for="lname">User last name</label>
                <input class="form-control" type="text" id="lname" required>
            </div>
            <button class="btn btn-primary col-12" id="submitData">Create</button>
        </form>
    </div>
</div>
`
    document.getElementById("submitData").addEventListener("click", () => {
        event.preventDefault();
        const user = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("New user saved successfully!");
        window.location.replace("/ass1/admin/index.html");
    })
}

