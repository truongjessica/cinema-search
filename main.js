var data;
var pageNumber = 1;
var currentSearch = "";
var lastSearch = "";

function clearScreen() {
  document.getElementById("movie").innerHTML = "";
}

function getSearchResults(searchText) {
  clearScreen();

  currentSearch = searchText;

  if (currentSearch != lastSearch) {
    pageNumber = 1;
    lastSearch = currentSearch;
  }

  $.get(
    "https://www.omdbapi.com/?s=" +
      searchText +
      "&type=movie&apikey=8050d45e&page=" +
      pageNumber,
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      if (rawdata.totalResults < 10) {
        void(0);
      }
      else if (pageNumber == 1) {
        document.getElementById(
          "movie"
        ).innerHTML += `<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a onclick="nextPage('${searchText}')" class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>`;
      } else if (pageNumber == rawdata.totalResults / 10) {
        document.getElementById(
          "movie"
        ).innerHTML += `<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
        <li class="page-item">
        <a onclick="prevPage('${searchText}')" class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
        </ul>
      </nav>`;
      } else {
        document.getElementById(
          "movie"
        ).innerHTML += `<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a onclick="prevPage('${searchText}')" class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item">
            <a onclick="nextPage('${searchText}')" class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>`;
      }

      maxResults = 10;
      if (rawdata.totalResults < 10) {
        maxResults = rawdata.totalResults;
      }

      for (var i = 0; i < maxResults; i += 5) {
        var firstTitle = data.Search[i].Title;
        var firstIMDBid = data.Search[i].imdbID;

        var firstPosterURL = data.Search[i].Poster;
        if (firstPosterURL == "N/A") {
          firstPosterURL = "moviePosterAlt.png";
        }

        var secondTitle = data.Search[i + 1].Title;
        var secondIMDBid = data.Search[i + 1].imdbID;

        var secondPosterURL = data.Search[i + 1].Poster;
        if (secondPosterURL == "N/A") {
          secondPosterURL = "moviePosterAlt.png";
        }

        var thirdTitle = data.Search[i + 2].Title;
        var thirdIMDBid = data.Search[i + 2].imdbID;

        var thirdPosterURL = data.Search[i + 2].Poster;
        if (thirdPosterURL == "N/A") {
          thirdPosterURL = "moviePosterAlt.png";
        }

        var fourthTitle = data.Search[i + 3].Title;
        var fourthIMDBid = data.Search[i + 3].imdbID;

        var fourthPosterURL = data.Search[i + 3].Poster;
        if (fourthPosterURL == "N/A") {
          fourthPosterURL = "moviePosterAlt.png";
        }

        var fifthTitle = data.Search[i + 4].Title;
        var fifthIMDBid = data.Search[i + 4].imdbID;

        var fifthPosterURL = data.Search[i + 4].Poster;
        if (fifthPosterURL == "N/A") {
          fifthPosterURL = "moviePosterAlt.png";
        }

        document.getElementById("movie").innerHTML += `
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${firstPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${firstTitle}</h5>
            <button onclick="getMovieDetails('${firstIMDBid}')" type="button" class="btn btn-outline-info">Show details</button>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${secondPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${secondTitle}</h5>
            <button onclick="getMovieDetails('${secondIMDBid}')" type="button" class="btn btn-outline-info">Show details</button>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${thirdPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${thirdTitle}</h5>
            <button onclick="getMovieDetails('${thirdIMDBid}')" type="button" class="btn btn-outline-info">Show details</button>
            </div>
        </div>
        <div class="card">
        <img class="card-img-top" src="${fourthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fourthTitle}</h5>
          <button onclick="getMovieDetails('${fourthIMDBid}')" type="button" class="btn btn-outline-info">Show details</button>
          </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="${fifthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fifthTitle}</h5>
          <button onclick="getMovieDetails('${fifthIMDBid}')" type="button" class="btn btn-outline-info">Show details</button>
          </div>
      </div>
      </div>
      <br>`;
      }
    }
  );
}

function prevPage(searchText) {
  pageNumber -= 1;
  getSearchResults(searchText);
}

function nextPage(searchText) {
  pageNumber += 1;
  getSearchResults(searchText);
}

function getMovieDetails(imdbID) {
  sessionStorage.setItem("movieId", imdbID);
  clearScreen();
  $.get(
    "https://www.omdbapi.com/?i=" + imdbID + "&apikey=8050d45e&plot=full",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      poster = data.Poster;
      if (poster == "N/A") {
        poster = "moviePosterAlt.png";
      }

      title = data.Title;
      if (title == "N/A") {
        title = "Title Not Found";
      }

      releaseDate = data.Released;
      if (releaseDate == "N/A") {
        releaseDate = "Release Date Not Found";
      }

      runtime = data.Runtime;
      if (runtime == "N/A") {
        runtime = "Runtime Not Found";
      }

      genre = data.Genre;
      if (genre == "N/A") {
        genre = "Genre Not Found";
      }

      director = data.Director;
      if (director == "N/A") {
        director = "Director Not Found";
      }

      plot = data.Plot;
      if (plot == "N/A") {
        plot = "Plot Not Found";
      }

      document.getElementById(
        "movie"
      ).innerHTML += `<button onclick="getSearchResults(currentSearch)" type="button" class="btn btn-outline-success">Back</button>
      <div class="card mb-3" style="width: 80%; margin: 5% 10% 5% 10%">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${poster}"
            alt="..."
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <h5 class="card-title"><strong>Release date:</strong> ${releaseDate}</h5>
          <h5 class="card-title"><strong>Runtime:</strong> ${runtime}</h5>
          <h5 class="card-title"><strong>Genre:</strong> ${genre}</h5>
          <h5 class="card-title"><strong>Director:</strong> ${director}</h5>
            <p style="font-size: 80%"class="card-text">
            ${plot}
            </p>
          </div>
        </div>
      </div>
    </div>`;
    }
  );
}
