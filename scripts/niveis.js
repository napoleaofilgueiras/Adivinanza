document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("text").value;

    if (password === "boa vista") {
        window.location.href = "../pages/ljubow-dmitrijewna.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});
