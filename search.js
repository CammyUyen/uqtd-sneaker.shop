const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchIcon.addEventListener('click', function () {
    searchInput.focus();
});

searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const results = products.filter(function (product) {
        return product.toLowerCase().includes(keyword);
    });

    displayResults(results);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    results.forEach(function (result) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = result;
        searchResults.appendChild(link);
    });

    searchResults.style.display = 'block';
}

// Dữ liệu sản phẩm mẫu
const products = [
    'Sản phẩm 1',
    'Sản phẩm 2',
    'Sản phẩm 3',
    'Sản phẩm 4',
    'Sản phẩm 5',
];