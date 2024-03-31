import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for routing
import { useContext } from 'react';
import idContext from './IdContext';


const MovieList = () => {
  const movieIdContext = useContext(idContext);

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  // const[movieId, setMovieId] = useState(1);
  // const { movieId } = useParams(); // Extract movie ID from URL parameter

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/movies/getAllMovies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>MovieList</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* Use Link component with dynamic URL based on movie ID */}
            <button onClick={() => {
              movieIdContext.setId(movie.id);
              navigate('/details');
            }}>{movie.title}</button>
          </li>
        ))}
      </ul>
      {/* <h1>{movieId}</h1> */}
    </div>
  );
};

export default MovieList;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//     const [movies, setmovies] = useState([]);

//     useEffect(() => {
//         fetchmovies();
//     }, []);

//     const fetchmovies = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/movies/getAllmovies');
//             setmovies(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };
//     return (
//         <div>
//             <h2>MovieList</h2>

//             <ul>
//             {movies.map(movie => (
//             <li key={movie.id}>
//                 <h3>{movie.title}</h3>
//             </li>
//             ))}
//         </ul>
//       </div>
//     )
// }

// export default MovieList;