# 🎬 Movie App

A simple **Movie App** that fetches and displays popular movies using The Movie Database (TMDb) API. Users can search for movies, view movie details in a modal.

## 🛠 Features

- **Popular Movies**: Display a list of popular movies fetched from the TMDb API.
- **Movie Search**: Search for movies by title and view matching results.
- **Movie Details**: Click on a movie to view detailed information including title, overview, release date, and rating.
  
## 💡 Tech Stack

This app is built with the following technologies:

- **HTML**: For structuring the content and layout.
- **CSS**: For styling the app and making it responsive.
- **JavaScript**: For handling API requests, dynamic content loading, and interactivity.
- **TMDb API**: To fetch data about movies and their details.

## 🔑 API Used

The app uses **The Movie Database (TMDb) API** to fetch movie data. You’ll need to replace the placeholder with your own API key to make the requests work.

- **API URL**:  
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY&page=1`
- **Search API URL**:  
  `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=`

> 🔑 **Note**: You need to sign up at [TMDb](https://www.themoviedb.org/) and get an API key to use this app.

## ⚡ Setup Instructions

To run the Movie App locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Harsh-sh7/movie-app.git
