# Movies App

This is a **beautiful Movie application** built using **React** that allows users to browse, search, and explore movies and TV shows. The app offers a clean and user-friendly interface, showcasing trending, popular, and top-rated movies in carousel form. Users can also filter, sort, and view detailed information for each movie or TV show, including trailers, cast, and similar recommendations.

> **Note:** Due to restrictions on **Jio network** or **Jio SIM data**, the TMDB API may not work on this network. To view this site, please use a VPN.

## Demo Link

[Movies App by Jitendra - Live Demo](https://movies-app-by-jitendra1998.netlify.app/)

## Screenshots

1. **Home Page**  
   The homepage displays trending, popular, and top-rated movies in a visually appealing layout.

   ![Home Page](https://i.postimg.cc/RF1wQRNh/movie-app.png)

2. **Movie Details Page**  
   This page provides detailed information about a selected movie or TV show, including trailers, cast, and similar movies.

   ![Movie Details Page](https://i.postimg.cc/59nC4jzh/movie-details-page.png)

## User Stories

1. **Trending Movies**: Display trending movies, giving users the option to filter by day or week.
2. **Popular and Top Rated Movies**: Show what's popular and the top-rated movies and TV shows, presented in carousel form.
3. **Carousel Navigation**: For larger screens, provide buttons to navigate left or right within the carousels.
4. **Movie/TV Show Selection**: Allow users to choose between popular movies or TV shows, and see top-rated content.
5. **Search Functionality**: Users can search for any movie or TV show through the search bar.
6. **Detailed Information**: Display detailed information about selected movies or TV shows, such as:
   - Poster image
   - Rating
   - Genres
   - Release date
7. **Filters and Sorting**: Let users apply filters and sorting options to their movie or TV show searches.
8. **Trailer Playback**: Give users the option to watch official trailers.
9. **Similar Movies**: Show a list of similar movies or TV shows on the details page.
10. **Favorites**: Allow users to mark movies or TV shows as favorites.

## Key Features

1. **Search Movies or TV Shows**: The search bar allows users to easily find their favorite content.
2. **Trending Section**: Users can toggle between trending movies for the day or week.
3. **Popular and Top Rated Movies/TV Shows**: The app highlights the most popular and highest-rated content.
4. **Detailed View**: Clicking on a movie or TV show will bring up a detailed view with information such as:
   - Name
   - Rating
   - Overview
   - Status, release date, runtime
   - Director, writers, and top cast (with images and roles)
5. **Official Videos**: Users can view trailers and other official videos related to the movie or show.
6. **Recommendations**: Similar and recommended content is displayed to help users discover more movies or TV shows.
7. **Favorites**: Users can save their favorite movies or TV shows for easy access.

## Home Page Sections

1. **Home**: General landing section.
2. **Trending**: Displays trending movies for the day or week.
3. **What's Popular**: Highlights popular movies or TV shows.
4. **Top Rated**: Shows top-rated content based on user ratings.

## Movie Details Page Sections

1. **Movie Details Home**: Overview of the selected movie or TV show.
2. **Top Cast**: Displays the top cast with their images and roles.
3. **Official Videos**: Trailers and official content related to the movie.
4. **Similar Movies**: A list of movies similar to the current selection.
5. **Recommendations**: Additional movie or TV show recommendations.

## Technologies Used

- **React**: For building the user interface.
- **TMDB API**: To fetch movies and TV shows data.
- **react-icons**: For icons throughout the app.
- **react-circular-progressbar**: For displaying progress bars (e.g., ratings).
- **react-lazy-load-image-component**: For lazy loading images, improving performance.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jitendrasuthar995/movies-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movies-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The project will be available at `http://localhost:3000/`.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This project provides an excellent foundation for movie and TV show discovery apps, integrating APIs, lazy loading, and responsive design to deliver a smooth and visually rich user experience.