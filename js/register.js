const users = JSON.parse(localStorage.getItem("users"));

// Creating page content
const main = document.querySelector(".main");
main.innerHTML = `
<div class="card col-6 mx-auto mt-3 p-3">
    <div class="card-body">
        <h1 class="card-title mb-3">Register</h1>
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
</div>`;

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
    localStorage.setItem("user", user.email);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("/ass1/index.html");
})


