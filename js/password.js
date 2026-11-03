
(function () {
    const screen = document.getElementById("password-screen");
    const form = document.getElementById("password-form");
    const input = document.getElementById("password-input");
    const error = document.getElementById("password-error");

    // Check whether the website was already unlocked
    if (localStorage.getItem("siteUnlocked") === "true") {
        screen.classList.add("hidden");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (input.value === "schoolmoney100$") {

            // Remember the successful login
            localStorage.setItem("siteUnlocked", "true");

            // Remove the password screen
            screen.classList.add("hidden");

        } else {

            // Show incorrect password message
            error.style.display = "block";

            input.value = "";
            input.focus();
        }
    });
})();
