document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchinput');
    const fetchDataButton = document.getElementById('fetchData');
    const resultsDiv = document.getElementById('results');
    const parteDiv = document.getElementById('parte');

    fetchDataButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            fetch(`https://bible-api.com/${query}?translation=almeida`)
                .then(response => response.json())
                .then(data => {
                    if (data.text) {
                        resultsDiv.innerHTML = `<p>${data.text}</p>`;
                        parteDiv.innerHTML = `<p>${data.reference}</p>`;
                    } else {
                        resultsDiv.innerHTML = `<p>resultado não encontrado.</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    resultsDiv.innerHTML = `<p>ocorreu um erro, tente novamente.</p>`;
                });
        } else {
            resultsDiv.innerHTML = `<p>insira outro termo.</p>`;
        }
    });
});

