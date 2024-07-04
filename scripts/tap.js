window.onload = function() {
    var audio = document.getElementById('audio')
    audio.onplay();
};


document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("text").value;

    if (password === "nada além") {
        window.location.href = "../pages/mais.html";
    }   else if (password === "nada alem") {
        window.location.href = "../pages/mais.html";
    }  else {
        alert("Senha incorreta. Tente novamente.");
    }
});
