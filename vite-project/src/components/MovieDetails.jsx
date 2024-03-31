import { useState, useEffect} from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams for accessing route parameters
import { useContext } from 'react';
import idContext from './IdContext';

const MovieDetails = () => {
  const movieIdContext = useContext(idContext);
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState("");
  console.log(movieIdContext.id)

  useEffect(() => {
    fetchMovieDetails(movieIdContext.id);
  }, [movieIdContext.id]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/movies/getMovieByid/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleAdd = async (id) => {
    // id.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/movies/updateRating/${id}`, rating)
        .then((response) => {
          console.log(response);
          setRating(0);
        });
    } catch (error) {
      console.error('Error adding ratings:', error);
    }
  };

  return (
    <div>
      {/* <h1>{movieId}</h1> */}
      <h2>Movie Details</h2>
      {movie && (
        <ul>
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Language: {movie.language}</p>
            <p>Ratings: {movie.ratings}</p>
            <p>Number of People Rated: {movie.numOfRated}</p>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)} // Update rating state
            />
            {rating && <button onClick={() => handleAdd(movie.id)}>Add Rating</button>}
          </li>
        </ul>
      )}
    </div>
  );
};

export default MovieDetails;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieDetails = () => {
//     const [movies, setmovies] = useState([]);
//     const [rating,setrating] = useState(0);

//     useEffect(() => {
//         fetchmovies();
//     }, []);

//     const fetchmovies = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/movies/getMovieDetails');
//             setmovies(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching movie:', error);
//         }
//     };

//     const handleAdd = async id =>{
//         id.preventDefault();
//         try {
//             await axios.post('http://localhost:8080/api/movies/add${id}', rating)
//             .then(response => {
//               console.log(response);
//               setrating(0);
//             })
//           } catch (error) {
//             console.error('Error adding ratings:', error);
//           }
//     }

//     return (
//         <div>
//             <h2>Movie Details</h2>
//             <ul>
//                 {movies.map(movie => (
//                     <li key={movie.id}>
//                         <h3>{movie.title}</h3>
//                         {/* <h3>movieId:{movie.id}</h3> */}
//                         <p>Genre :{movie.genre}</p>
//                         <p>Language: {movie.language}</p>
//                         <p>Ratings: {movie.ratings}</p>
//                         <p>Number of People Rated: {movie.numberOfRated}</p>
//                         <input
//                             type="number"
//                             id="rating"
//                             value={rating} // Set input value from state
//                         />
//                         {rating && <button onClick={() => handleAdd(movie.id)}>Delete</button>}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default MovieDetails;