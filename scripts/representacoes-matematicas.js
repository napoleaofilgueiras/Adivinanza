document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("text").value;

    if (password === "com") {
        window.location.href = "../pages/olhar-no-vazio.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});
