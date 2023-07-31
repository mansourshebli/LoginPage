document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this with your actual login validation logic
    if (username === "demo" && password === "password") {
        showMessage("Login successful!");
    } else {
        showMessage("Invalid username or password.");
    }
});

function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
}
