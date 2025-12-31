document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let data = JSON.parse(localStorage.getItem("fbUser"));

    if (!data) {
        alert("No account found. Please sign up.");
        return;
    }

    if (email === data.email && password === data.password) {
        alert("Login Successful");
        window.location.href = "page21.html";
    } else {
        alert("Invalid Credentials");
    }
});
