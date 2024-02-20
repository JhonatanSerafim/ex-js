


document.addEventListener("DOMContentLoaded", function() {
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    previousButton.addEventListener('click', function() {
        window.location.href = '../ex-01/index.html'; // Substitua pelo caminho correto da página anterior
    });

    nextButton.addEventListener('click', function() {
        console.log("Abriu a página 2")
        window.location.href = '../ex-03/index.html'; // Substitua pelo caminho correto da próxima página
    });
});