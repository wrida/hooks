import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddMovie from './MovieComponent/AddMovie';
import MoviesList from './MovieComponent/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './MovieComponent/Filter';
function App() {
 
  const [movies, setMovies] = useState([
    {
      id:uuidv4,
    title : 'There is Someone Inside Your House ',
    posterUrl :'https://i2.wp.com/www.nightmarishconjurings.com/wp-content/uploads/2021/09/EN-US_TSIYH_Main_Vertical_27x40_RGB_PRE-e1631547287437.jpg?resize=600%2C889&ssl=1',
    rating :5
   },
      
    {
      id:uuidv4,
      title : 'Baby Driver' ,
      posterUrl :'https://media.services.cinergy.ch/media/box1600/b84396c418f19eb817b8b39f5351f5de07c5740f.jpg',
      rating :3
     },
     {
      id:uuidv4,
      title : 'The Tomorrow War' ,
      posterUrl :'https://antredeluciole.fr/wp-content/uploads/the-tomorrow-war-2021jpg.jpg',
      rating :4
     },
     {
      id:uuidv4,
      title : 'The Sweet Girl' ,
      posterUrl :'https://cdn.traileraddict.com/content/netflix/sweet-girl-poster.jpg',
      rating :3
     },
  ])
    const [movieList,setMovieList] =useState(movies)
    const[searchInput,setSearchInput]= useState('')
    const getData = (info) => {
    setMovieList([...movieList,info])  
  }
  const [Rate,setRate] = useState(0);
    const filterInput = (info) => {
    setSearchInput(info)
  }
  const starRate = (info) => {
    setRate(info)
  }
  return (
   
    <div className="App">
   <AddMovie getData={getData}/>
   <Filter starRate={starRate} filterInput={filterInput}/>
   <MoviesList movies={movieList.filter(movie=>movie.title.toLowerCase().includes(searchInput.trim().toLowerCase()) && movie.rating >=Rate)}
   />
    </div>
  );
}

export default App;
