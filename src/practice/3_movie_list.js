import { useEffect, useState } from "react";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async await을 쓰는 방식
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);

    // then으로 쓰는 방식
    //   fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMovies(json.data.movies);
    //       setLoading(false);
    //     });
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>The movies! {loading ? "" : `(${movies.length})`}</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt="title" />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
