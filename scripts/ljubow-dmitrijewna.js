document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("text").value;

    if (password === "somos") {
        window.location.href = "../pages/iniciais-matematicas.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});
