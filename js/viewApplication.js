const appId = Number(window.location.search.split("id=")[1]);
const users = JSON.parse(localStorage.getItem("users"));
const applications = JSON.parse(localStorage.getItem("applications"));
const application = applications.find(a => a.id == appId);
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
    <a href="/ass1/admin/applications.html">Back</a><br>
    <div class="card-body">
        <h1 class="card-title">View Application Info</h1>
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
                    <td>${application.id}</td>
                </tr>
                <tr>
                    <td>User name</td>
                    <td>${application.username}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>${application.type}</td>
                </tr>
                <tr>
                    <td>Desctiption</td>
                    <td>${application.description}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;
};