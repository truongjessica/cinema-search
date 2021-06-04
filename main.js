var data;

function getMovie(searchText) {
  $.get(
    "https://www.omdbapi.com/?s=" + searchText + "&apikey=<API_KEY>",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);
      var title = data.Search[0].Title;
      var year = data.Search[0].Year;
      var posterURL = data.Search[0].Poster;
      document.getElementById("movie").innerHTML = `<div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="${posterURL}" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <h5 class="card-title">${year}</h5>

          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that esearchTextual height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>`;
    }
  );
}
