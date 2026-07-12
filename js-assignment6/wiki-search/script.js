const searchInput = document.getElementById('search');
const outputDiv = document.getElementById('output');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetchData(searchTerm);
    } else {
        outputDiv.innerHTML = '';
    }
});

function fetchData(searchTerm) {
    const url = `https://apis.ccbp.in/wiki-search?search=${encodeURIComponent(searchTerm)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.search_results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            outputDiv.innerHTML = 'Error fetching results. Please try again.';
        });
}

function displayResults(results) {
    if (!results || results.length === 0) {
        outputDiv.innerHTML = 'No results found.';
        return;
    }

    const html = results.map(result => `
    <div class="result-item">
      <a href="${result.link}" target="_blank" rel="noopener noreferrer">
        <h3>${result.title}</h3>
      </a>
      <p>${result.description}</p>
    </div>
  `).join('');

    outputDiv.innerHTML = html;
}
