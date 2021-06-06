var data;
var pageNumber = 1;

$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    clearScreen();
    getMovies(searchText);
  });
});

function clearScreen() {
  document.getElementById("movie").innerHTML = "";
}

function getMovie(searchText) {
  clearScreen();
  $.get(
    "https://www.omdbapi.com/?s=" + searchText + "&apikey=<API_KEY>",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      document.getElementById("movie").innerHTML += `<nav>
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a id="firstPage" class="page-link" href="#">${pageNumber}</a></li>
        <li class="page-item"><a id="secondPage" class="page-link" href="#">${
          pageNumber + 1
        }</a></li>
        <li class="page-item"><a id="thirdPage" class="page-link" href="#">${
          pageNumber + 2
        }</a></li>
        <li class="page-item">
          <a id="next" class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>`;

      for (var i = 0; i < 10; i += 5) {
        var firstTitle = data.Search[i].Title;
        var firstPosterURL = data.Search[i].Poster;
        var firstIMDBid = data.Search[i].imdbID;

        var secondTitle = data.Search[i + 1].Title;
        var secondPosterURL = data.Search[i + 1].Poster;
        var secondIMDBid = data.Search[i + 1].imdbID;

        var thirdTitle = data.Search[i + 2].Title;
        var thirdPosterURL = data.Search[i + 2].Poster;
        var thirdIMDBid = data.Search[i + 2].imdbID;

        var fourthTitle = data.Search[i + 3].Title;
        var fourthPosterURL = data.Search[i + 3].Poster;
        var fourthIMDBid = data.Search[i + 3].imdbID;

        var fifthTitle = data.Search[i + 4].Title;
        var fifthPosterURL = data.Search[i + 4].Poster;
        var fifthIMDBid = data.Search[i + 4].imdbID;

        document.getElementById("movie").innerHTML += `
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${firstPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${firstTitle}</h5>
            <button onclick="movieSelected('${firstIMDBid}')" type="button" class="btn btn-primary btn-sm">Show details</button>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${secondPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${secondTitle}</h5>
            <button onclick="movieSelected('${secondIMDBid}')" type="button" class="btn btn-primary btn-sm">Show details</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${thirdPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${thirdTitle}</h5>
            <button onclick="movieSelected('${thirdIMDBid}')" type="button" class="btn btn-primary btn-sm">Show details</button>
          </div>
        </div>
        <div class="card">
        <img class="card-img-top" src="${fourthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fourthTitle}</h5>
          <button onclick="movieSelected('${fourthIMDBid}')" type="button" class="btn btn-primary btn-sm">Show details</button>
          </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="${fifthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fifthTitle}</h5>
          <button onclick="movieSelected('${fifthIMDBid}')" type="button" class="btn btn-primary btn-sm">Show details</button>
          </div>
      </div>
      </div>
      <br>`;
      }
    }
  );
}

function movieSelected(imdbID) {
  clearScreen();
  sessionStorage.setItem("movieId", imdbID);
  clearScreen();
  $.get(
    "https://www.omdbapi.com/?i=" + imdbID + "&apikey=<API_KEY>",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      document.getElementById(
        "movie"
      ).innerHTML += `<div class="card mb-3" style="width: 80%; margin: 5% 10% 5% 10%">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${data.Poster}"
            alt="..."
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <h1 class="card-title">${data.Title}</h1>
          <h5 class="card-title"><strong>Release date:</strong> ${data.Released}</h5>
          <h5 class="card-title"><strong>Runtime:</strong> ${data.Runtime}</h5>
          <h5 class="card-title"><strong>Genre:</strong> ${data.Genre}</h5>
          <h5 class="card-title"><strong>Director:</strong> ${data.Director}</h5>
            <p class="card-text">
            ${data.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>`;
    }
  );
}