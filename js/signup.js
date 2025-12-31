document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("All fields are required");
        return;
    }

    let user = {
        name,
        email,
        password
    };

    localStorage.setItem("fbUser", JSON.stringify(user));
    alert("Signup Successful");

    window.location.href = "login.html";
});
