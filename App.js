import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
const App = () => {
  const [movies, setMovies] = useState([
  
    {
      title: 'My Fault',
      description: 'My Fault (Spanish: Culpa mía) is a 2023 Spanish romance film directed by Domingo González in his directorial feature length debut and starring Nicole Wallace and Gabriel Guevara. It is based on the Wattpad story of the same name by Mercedes Ron.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/7/70/My_Fault_%28film%29_poster.jpg',
      rating: 5,
    },
    {
      title: 'Unlocked',
      description: 'Unlocked (Korean: 스마트폰을 떨어뜨렸을 뿐인데) is a 2023 South Korean psychological thriller film directed by Kim Tae-joon in his directorial debut, starring Chun Woo-hee, Im Si-wan and Kim Hee-won. It was released on Netflix for streaming on February 17, 2023.[1][2]',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Unlocked_%282023_film%29_poster.jpg',
      rating: 3,
    },
    {
      title: 'The open house',
      description: 'The Open House is a 2018 American horror film written and directed by Matt Angel and Suzanne Coote. The film stars Dylan Minnette, Piercey Dalton, Sharif Atkins, Patricia Bethune, and Aaron Abrams. The film was released on Netflix on January 19, 2018.[1]',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/82/The_Open_House.png',
      rating: 1,
    },
    
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
  );

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newMovie = {
      title: form.title.value,
      description: form.description.value,
      posterURL: form.posterURL.value,
      rating: parseFloat(form.rating.value),
    };
    handleAddMovie(newMovie);
    form.reset();
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title: <input type="text" name="title" required />
          </label>
          <label>
            Description: <input type="text" name="description" required />
          </label>
          <label>
            Poster URL: <input type="url" name="posterURL" required />
          </label>
          <label>
            Rating: <input type="number" name="rating" step="0.1" required />
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;
