Film Finder
I’ve caught up on a list of TV shows and movies and want to get recommendations for what to watch next, but aren’t sure where to look. In this project, I’ll use my knowledge of HTTP requests and asynchronous JavaScript to create a movie discovery app that will recommend random movies by genre. I’ll be able to choose from several genres, and like or dislike a movie to get another suggestion.

To check the app, you’ll need to create an account on The Movie Database, website(https://www.themoviedb.org/signup). After you create your account and verify your email address, click on your user icon at the top right corner and navigate to the Settings page.

On the Settings page, navigate to the API section and click on the link to Request an API Key to register as a Developer.

You’ll be asked to enter some personal information like your address and phone number. This is pretty common. Many APIs use this information to keep track of how their data is being used. As a part of your registration, you will also be asked to provide a URL for the site where you will be using this API. Here, you can list

Check out these instructions(https://developers.themoviedb.org/3/getting-started/introduction) if you need further assistance with registering for an API key. Remember not to share this API key with others!

Walkthrough:
Population Drop-down Menu with Genres
1.
I've saved the API key i've obtained from the TMDB API to the tmdbKey variable.
2.
I took the API’s base URL from the TMDB documentation and save it to the tmdbBaseUrl variable.

I append specific endpoints to this URL for each of our requests to the TMDB API.

3.
For the next several step I worked on the getGenres() function to fetch a list of genres from the API.

On the TMDB documentation to there's “Genres” API endpoint. I Created a variable called genreRequestEndpoint inside getGenres() and set it to the “Genres” API endpoint.

4.
Then used query parameters to add more specificity to my request. Still inside the getGenres() function, created a variable called requestParams and set it to a query string where the key is api_key and the value is tmdbKey.

5.
I've put together the URL where I’ll send my fetch request. Created a variable called urlToFetch and set it to a string that consists of tmdbBaseUrl, followed by genreRequestEndpoint, followed by requestParams.

6.
Turn getGenres() into an asynchronous function that returns a promise. I include my fetch() request in this function, and made it asynchronous to simplify handling the promise my API call returns.

7.
I needed a straightforward way to catch and handle errors if my fetch() request fails. Underneath my variable declarations inside the getGenres() function, add a try/catch statement. "logged caught errors to the console to see results".

8.
In the try block, I used fetch() to send a GET request to urlToFetch. Await the response and save it to a variable called response. I needed to await the resolution of our fetch() call so that i can do something with the data I get back.

9.
Still inside the try block, I created a conditional statement that checks if the .ok property of the response object evaluates to a truthy value.

10.
Inside the if statement of my try block, I captured the data that I populated my dropdown menu. To get the requested data, convert the response object to a JSON object. Await the resolution of this method and save it to a variable called jsonResponse.

11.
To make sure my code is working, I logged jsonResponse to the console inside my if statement. The value of genres is an array that lists TMDB’s genres.

Saved the genres property of jsonResponse in a variable called genres. Logged this variable to the console to confirm that it contains the correct information.

12.
Returned genres as the very last line of the if statement inside my try block of the getGenres() function.


13.Get a Random Movie
For the next several steps I worked inside getMovies() to fetch a list of movies based on the genre selected from the list of genres I returned in getGenres().

I took the “Movie Discover” API endpoint from the TMDB documentation and saved the API endpoint to a variable called discoverMovieEndpoint.

14.
Like I did for getGenres(), I created a variable called requestParams. Set it equal to a query string with two parameters. The first is my api_key with the value, tmdbKey. The second parameter has the with_genres key with its value set to the selectedGenre variable.

selectedGenre stores the returned value from a moviescript function (the getSelectedGenre() function in moviescript.js) that captures the user’s selected genre.

I also put together the URL where I’ll send my fetch request. Created a variable called urlToFetch. Set it to a string that consists of tmdbBaseUrl, followed by discoverMovieEndpoint, then requestParams.

15.
Turned getMovies() into an asynchronous function that returns a promise. This simplifies handling the promise that my fetch() request will return.

Added try/catch blocks inside getMovies().
In the catch block, log any errors to the console. In the try block, I used fetch() to send a GET request to urlToFetch. Await the response and save it to a variable called response.

16.
Still inside the try block, I created an if statement that checks if the .ok property of the response object evaluates to a truthy value.

Inside the if statement, I converted the response to a JSON object. Await the resolution of this method, and save it to a variable called jsonResponse.

I Logged the jsonResponse object to the console. To see my output in the console, I called getMovies() after the function declaration. In the console, At this point, "results" holds an array of all the movies in the first page of results.

17.
Below jsonResponse variable declaration in the if statement, I stored the results property of jsonResponse in a variable called movies. Logged this variable to the console to confirm that it contains the correct information.

Returned movies as the last line of the if statement. Later on, I’ll use this list to select a random movie as a suggestion.

After I've checked what movies logs to the console, I removed the getMovies() function call. Otherwise, it will automatically execute every time you run my program, causing unexpected or wrong resuls.


18.Get Movie Info
For the next several steps, I worked inside the getMovieInfo() function to fetch the details of a random movie from the list of movies I returned in getMovies().

Made getMovieInfo() to accept a parameter, movie. Then, inside the function, I created a variable called movieId that is set to the id property of the movie parameter. I needed id property to make another call to the TMDB API.

19.
Referenced the TMDB documentation to find the movie “Details” endpoint. Saved it to a variable called movieEndpoint and replace {movie_id} in the endpoint with my movieId variable.

20.
I created my query params and the URL where I’ll send my fetch() request. I Created a variable called requestParams and set it to be a query string with one parameter with api_key set to tmdbKey.

I Created a variable called urlToFetch. Set it equal to a string that consists of tmdbBaseUrl, followed by movieEndpoint, then requestParams.

21.
Turned getMovieInfo() into an asynchronous function that returns a promise. Add a try/catch block inside getMovieInfo(), after my variable declarations.

In the catch block, logged any errors to the console. In the try block, used fetch() to send a GET request to urlToFetch. Await the response and save it to a variable called response.

22.
Inside try block, I create an if statement that checks if the .ok property of the response object evaluates to a truthy value.

My response contains a single object with details about the given movie. Inside the if statement, I converted this response to a JSON object. Await the resolution of this method, and save it to a variable called movieInfo.

Return movieInfo as the last line of the if block.

23.Display Movie
For this next set of tasks, I worked inside the showRandomMovie() function to piece together my functionality and render a random movie’s info to the page.

Turned showRandomMovie() into an asynchronous function. Then, on the last line of the function, call getMovies(), await its return, and saved it to a variable called movies. Since getMovies() returns a promise, I need to await its resolution so that I can do something with its return value in upcoming steps.

24.
Below my movies declaration, called getRandomMovie(), passing movies as the argument. Stored the returned value in a variable called randomMovie.

25.
Below my randomMovie declaration, call getMovieInfo(), passing randomMovie as the argument. Await its return and saved it to a variable called info.

27.
Finally, as the last line of the showRandomMovie() function, I called displayMovie(), passing info as the argument.

Run your program to see movie suggestions. Like or dislike each movie to be shown another random suggestion. Change genres to get different suggestions based on your interests.

-----------------------------------------------------------------------

Project Folder Structure
film-finder
│
├── index.html
├── style.css
├── script.js
└── moviescript.js


