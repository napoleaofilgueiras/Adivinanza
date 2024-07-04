document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("text").value;

    if (password === "cegos") {
        window.location.href = "../pages/tap.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});
