const applications = JSON.parse(localStorage.getItem("applications"));
const users = JSON.parse(localStorage.getItem("users"));
const admin = users.find(u => u.id === 10000);
const userEmail = localStorage.getItem("user");
function deleteApplication(applicationId) {
    const applicationIndex = applications.findIndex(a => a.id === applicationId);
    if (applicationIndex !== -1) {
        applications.splice(applicationIndex, 1);
        localStorage.setItem('applications', JSON.stringify(applications));
        alert("Application deleted successfully! The page will be reload.")
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
    <a href="/ass1/admin/index.html">Users</a>
    <div class="card-body">
        <h1 class="card-title mb-3 text-center">Applications</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody id="tbody"></tbody>
        </table>
    </div>
</div>
`;
    const tableBody = document.getElementById("tbody");
    applications.forEach(application => {
        const row =
`<tr scope="row">
    <td>${application.id}</td>
    <td>${application.username}</td>
    <td>${application.type}</td>
    <td>${application.description}</td>
    <td>
        <a href="/ass1/admin/viewApplication.html?id=${application.id}"><i class="fa-solid fa-eye"></i></a>
        <button id="delete-${application.id}" class="text-danger bg-transparent border-0" onclick="deleteApplication(${application.id})"><i class="fa-solid fa-trash"></i></button>
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