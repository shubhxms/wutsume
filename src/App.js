import React, {useState} from 'react';
import './App.css';
import Anilist from './Anilist';
import Select from './Select';


function App() {

  // const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);


  
  
  return (
    <div className="App">
      <h1>
        hey there
      </h1>

   {(genre.length === 0)? 
      <Select setGenre={setGenre}/>
    :
      <Anilist page={page} genre={genre}/>
    }
    
    
    
      
    </div>
  );
}

export default App;
