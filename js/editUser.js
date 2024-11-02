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
        alert("Data saved successfully!");
        window.location.replace("/ass1/admin/index.html");
    })
}