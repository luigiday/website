function loadPage(page) {
    const content = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        });
}
