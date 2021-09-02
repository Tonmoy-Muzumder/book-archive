const resultFound = document.getElementById('resut-found');
console.log('get result', resultFound);

const SearchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText)


  const url = ` http://openlibrary.org/search.json?q=${searchText}`;
  
  

  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));

  // clear data
  searchField.value = '';
}



const displaySearchResult = docs => {
  console.log('abc', docs.length)
  const searchResult = document.getElementById('search-result');
  docs.forEach(doc => {
    const cover_i =doc.cover_i;
    console.log(cover_i)
    const imgUrl = `https://covers.openlibrary.org/b/id/${cover_i}.jpg`
    
    // fetch(imgUrl)
    // .then(res => res.json())
    // .then(data => console.log(data));

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <p class="card-text">This book give you more confidence. Read the Book to becoming a WEB DEVELOPER</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Author : ${doc.author_name[0]}</li>
            <li class="list-group-item">Publisher : ${doc.publisher[0]} <br>
            publish-date : ${doc.publish_date[0]}</li>
            <li class="list-group-item">Version : ${doc._version_}</li>
          </ul>
        </div>
        `;
    searchResult.appendChild(div);
  })
}
//  fetch (`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`)