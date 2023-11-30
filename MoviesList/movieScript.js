const addBtn      = document.getElementById('addBtn');         // blue
const removeBtn   = document.getElementById('removeBtn');      // orange
const moviesList  = document.getElementById('moviesList');     // yellow
const newMovieBox = document.getElementById('movieTitleBox');  // red

function addNewMovie() {
    let movieTitleText = newMovieBox.value;

    let movieItem = document.createElement('li');
    let movieTitle = document.createTextNode(movieTitleText);
    movieItem.appendChild(movieTitle);
    moviesList.appendChild(movieItem);

    newMovieBox.value = null;
}

function removeAllMovies() {
    let allMovies = moviesList.children; //allMovies is an ARRAY of li elements
    
    while (allMovies.length > 0) {
        allMovies.item(0).remove();
    }
}

addBtn.addEventListener('click', addNewMovie);
removeBtn.addEventListener('click', removeAllMovies);