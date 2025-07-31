import React from 'react';
import './home.css'; 

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image: '/images/shawshank redemtion.png',
    description: 'Two imprisoned men bond over a number of years.',
  },
  {
    id: 2,
    title: 'Inception',
    image: '/images/inception.png',
    description: 'A thief who steals corporate secrets through dream-sharing tech.',
  },
  {
    id: 3,
    title: 'Interstellar',
    image: '/images/interstellar.png',
    description: 'A team of explorers travel through a wormhole in space.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <h1>Danh sách phim</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
