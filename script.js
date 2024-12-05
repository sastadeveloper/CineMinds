const movies = [
    {
        title: "Movie 1",
        poster: "images/image-200x300.jpg",
        rating: "8.5",
    },
    {
        title: "Movie 2",
        poster: "images/image-200x300.jpg",
        rating: "7.4",
    },
    {
        title: "Movie 3",
        poster: "images/image-200x300.jpg",
        rating: "9.0",
    },
    {
        title: "Movie 4",
        poster: "images/image-200x300.jpg",
        rating: "6.8",
    },
    {
        title: "Movie 5",
        poster: "images/image-200x300.jpg",
        rating: "7.9",
    },
];

const moviesContainer = document.getElementById('movies-container');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
    <a href="C:/Users/Yash/Desktop/CineMinds/BlogPage.html">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>IMDB: ${movie.rating}</p>
        </div>
    </a>
    `;
    moviesContainer.appendChild(card);
});