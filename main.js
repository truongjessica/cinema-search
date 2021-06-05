$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    clearPreviousSearchResults();
    getMovies(searchText);
  });
});

function clearPreviousSearchResults() {
  document.getElementById("movie").innerHTML = "";
}

var data;

function getMovie(searchText) {
  $.get(
    "https://www.omdbapi.com/?s=" + searchText + "&apikey=<API_KEY>",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      for (var i = 0; i < 10; i += 5) {
        var firstTitle = data.Search[i].Title;
        var firstPosterURL = data.Search[i].Poster;

        var secondTitle = data.Search[i + 1].Title;
        var secondPosterURL = data.Search[i + 1].Poster;

        var thirdTitle = data.Search[i + 2].Title;
        var thirdPosterURL = data.Search[i + 2].Poster;

        var fourthTitle = data.Search[i + 3].Title;
        var fourthPosterURL = data.Search[i + 3].Poster;

        var fifthTitle = data.Search[i + 4].Title;
        var fifthPosterURL = data.Search[i + 4].Poster;

        document.getElementById("movie").innerHTML += `<div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${firstPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${firstTitle}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${secondPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${secondTitle}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="${thirdPosterURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${thirdTitle}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that esearchTextual height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
        <img class="card-img-top" src="${fourthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fourthTitle}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="${fifthPosterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${fifthTitle}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that esearchTextual height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
      <br>`;
      }
    }
  );
}
