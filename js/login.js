const users = JSON.parse(localStorage.getItem("users"));
const admin = users.find(u => u.id === 10000);

if(localStorage.getItem("user") !== null) {
    const user = localStorage.getItem("user");
    if(user === admin.email) {
        window.location.replace("/ass1/admin/index.html");
    } else {
        window.location.replace("/ass1/profile.html")
    }
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
            <button class="btn btn-primary col-12 mb-3" id="submitLogin">Log in</button>
            <a href="register.html">Don't have an account?</a>
        </form>
    </div>
</div>`;

document.getElementById("submitLogin").addEventListener("click", () => {
    event.preventDefault();
    console.log(123);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user !== undefined) {
        localStorage.setItem("user", user.email);
        if (user.email === admin.email) {
            window.location.replace("/ass1/admin/index.html");
        } else {
            window.location.replace("/ass1/profile.html")
        }
    } else {
        alert("Incorrect data!");
    }
});


