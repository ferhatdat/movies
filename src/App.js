import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

  const myMovies = []

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async ()=> {
    const response = await axios.get('http://localhost:3002/myMovies')
    // console.log(response);
    setMovies(response.data)
  }

  useEffect(() => {
    getMovies()
  }, [])
  

  // const deleteHandler = (id)=> {
  //   setMovies(movies.filter(movie => movie.id !== id))
  // }
  const deleteHandler = async(id)=> {
    axios.delete(`http://localhost:3002/myMovies/${id}`)
    await 
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const handleSearch = (text) => {
    setMovies(myMovies.filter(movie => (movie.name.toLowerCase()).includes(text.toLowerCase())))
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SearchBar handleSearch={handleSearch}/>
        </div>
      </div>
      <div className="row">
      {movies.map(movie => 
        <MovieList {...movie} deleteHandler={deleteHandler} key={movie.id}/>
        )}
      </div>
      
    </div>
  );
}

export default App;
