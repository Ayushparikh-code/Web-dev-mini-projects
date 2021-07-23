# Movie Finder App - React Based Application   

### About the Project
A single page web application that allows users to search movies based on their query.


### Technologies

- React
  - Hooks
  - Components
- CSS
  - CSS Flex
- Javascript
  - Fetch API
  - ES6
- API
  - OMDB API

### Libraries Used

* `styled-components`
* `axios`

### API Used
Open Movie Database (OMDB) API

Generate API key from : http://www.omdbapi.com/apikey.aspx

### API Info

* Method: `GET`
* Search URL: `https://www.omdbapi.com/?s={MOVIE_NAME}&apikey={API_KEY}`
* Movie Details URL: `https://www.omdbapi.com/?i={MOVIE_ID}&apikey={API_KEY}`

### How It Works

- Search a movie in the search input
- Grabs the movie information from OMDB API.
- Information is returned has a JSON object
- Using React components to structure data into presentational format
- Using CSS to create visually appealing and user friendly application

### Screenshots

Initially, the UI looks like:

<img src="https://github.com/khushi-purwar/Web-dev-mini-projects/blob/dev-kp/react-movie-app/Screenshots/ss1.png?raw=true" />

Type your movie in the search bar

<img src="https://github.com/khushi-purwar/Web-dev-mini-projects/blob/dev-kp/react-movie-app/Screenshots/ss2.png?raw=true" />

After clicking on any movie, first it will show the loader and then the movie detailed information

<img src="https://github.com/khushi-purwar/Web-dev-mini-projects/blob/dev-kp/react-movie-app/Screenshots/ss3.png?raw=true" />

<img src="https://github.com/khushi-purwar/Web-dev-mini-projects/blob/dev-kp/react-movie-app/Screenshots/ss4.png?raw=true" />

### Live Demo

<img src="https://github.com/khushi-purwar/Web-dev-mini-projects/blob/dev-kp/react-movie-app/Screenshots/demo.gif?raw=true" />
