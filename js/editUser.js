const userId = Number(window.location.search.split("id=")[1]);

const users = JSON.parse(localStorage.getItem("users"));
const user = users.find(u => u.id == userId);

const admin = {
    "email": "admin@astanait.edu.kz",
    "password": "qwerty123asd"
};

function validateAdmin(email, password) {
    if(email === admin["email"] && password === admin["password"]) {
        fillAdminPage();
    } else {
        alert("Incorrect data!")
    }
}

function fillAdminPage() {
    main.innerHTML =
`
<div class="card col-11 mx-auto mt-3 p-3">
    <div class="card-body">
        <h1 class="card-title mb-3 text-center">Edit user info</h1>
        <h3>User ID: ${user.id}</h3>
        <form class="form">
            <div class="mb-3">
                <label for="email">User email</label>
                <input class="form-control" type="email" id="email" value="${user.email}" required>
            </div>
            <div class="mb-3">
                <label for="email">User password</label>
                <input class="form-control" type="text" id="password" value="${user.password}" required>
            </div>
            <div class="mb-3">
                <label for="fname">User first name</label>
                <input class="form-control" type="text" id="fname" value="${user.fname}" required>
            </div>
            <div class="mb-3">
                <label for="lname">User last name</label>
                <input class="form-control" type="text" id="lname" value="${user.lname}" required>
            </div>
            <button class="btn btn-primary col-12" id="submitData">Edit</button>
        </form>
    </div>
</div>
`
    document.getElementById("submitData").addEventListener("click", () => {
        event.preventDefault();
        user.email = document.getElementById("email").value;
        user.password = document.getElementById("password").value;
        user.fname = document.getElementById("fname").value;
        user.lname = document.getElementById("lname").value;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Data saved successfully!\n The page will bve reload");
        window.location.reload();
    })
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
})