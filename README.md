# Cinema Search

Click [here](https://truongjessica.github.io/cinema-search/) to check out Cinema Search!

Cinema Search is a web application that enables users to search for movie details. It was built with HTML/CSS and Bootstrap for the UI, the [OMDb API](https://omdbapi.com/) for the movie details, JavaScript for the functionality, and deployed with GitHubPages.

Cinema Search works by allowing users to enter a search query and retrieving the results back from the OMDb API.

If there are ten or more results for the search query, the results will display in 5 x 2 grids with 10 results on each page as the API only provides ten results at a time. However, there is a paginification feature that allows users to show more results.

<img src="https://raw.githubusercontent.com/truongjessica/cinema-search/main/gifs/pages.gif" width="800">

Users can select a specific movie to view its details.

<img src="https://raw.githubusercontent.com/truongjessica/cinema-search/main/gifs/movie.gif" width="800">

If there are less than four results for the search query, the results will display the details for all of the results.

<img src="https://raw.githubusercontent.com/truongjessica/cinema-search/main/gifs/less4.gif" width="800">

## Cinema Search Details
- Title
- Poster
- Release Date
- Runtime
- Genre
- Director

## Cinema Search Features
- No Movie Found Alert
- No Movie Poster Found Alternate Image
- No Movie Data Found Placeholders
- Pagnification

## Challenges

- Show More Results
	- I tried implementing a Show More Results button at the bottom of each 5 x 2 grid, but kept running into bugs with the pagnification feature.
- 6-9 Results Display Error
	- For search queries with 6-9 results for the page, only the first five results will display (e.g. queries with only 6-9 results will display five results on the front page or queries with a total number of results ending in 6-9 will display five results on the last page). This is due to the fact that movie cards are added 5 at a time. I tried fixing this by adding each individual card individually to prevent errors when there were not enough cards, but doing so resulted in the cards displaying either at different sizes or at 100% width, resulting in bad UI. An idea I had for resolving this error was hard coding the size dimensions for the cards, but for now, I am leaving it as it is.

## Conclusion

I am really proud of the final product! I learned a lot during the process of building out the web application as I had not worked extensively with JavaScript and APIs before. I also love movies so this was a really fun project to work on.
