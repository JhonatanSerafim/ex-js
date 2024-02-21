// Bloco de código para realizar a páginação

document.addEventListener("DOMContentLoaded", function() {
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    previousButton.addEventListener('click', function() {
        window.location.href = '../ex-01/ex-01.html'; // Substitua pelo caminho correto da página anterior
    });

    nextButton.addEventListener('click', function() {
        console.log("Abriu a página 2")
        window.location.href = '../ex-02/ex-02.html'; // Substitua pelo caminho correto da próxima página
    });
});

// Bloco defini o título do exercicio

document.addEventListener("DOMContentLoaded", function() {
    // Obter o nome do arquivo da URL
    const currentPage = window.location.pathname.split('/').pop();
    // Remover a extensão do arquivo
    const pageTitle = currentPage.split('.')[0];
    // Atualizar o conteúdo do título e deixa maiusculo
    const pageTitles = document.getElementsByClassName('pageTitle');
        for (let i = 0; i < pageTitles.length; i++) {
            pageTitles[i].innerText = pageTitle.toUpperCase();
        }
});