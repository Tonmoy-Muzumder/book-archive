const SearchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = ` http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
            
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${doc.cover_i}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <p class="card-text">This book </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Author :${doc.author_name}</li>
            <li class="list-group-item">Publisher : ${doc.publisher.slice(0, 50)} <br>
            publish-date : ${doc.publish_date.slice(0, 50)}</li>
            <li class="list-group-item">Version : ${doc._version_}</li>
          </ul>
        </div>
        `;
        searchResult.appendChild(div);
    })
}