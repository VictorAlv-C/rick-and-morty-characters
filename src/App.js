import { useEffect, useState } from 'react';
import ListResident from './components/ListResident'
import Search from './components/Search';
import Header from './components/Header';
import {get} from 'axios';
import './App.css';

const App = ()=> {

  const [location, setLocation] = useState({});

  useEffect(() => { 
    get(`https://rickandmortyapi.com/api/location/${getNumber()}`)
    .then(({data}) => setLocation(data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Header />
      <Search setLocation={setLocation} />
      <div className='location'>
        <h2>{location.name}</h2>
        <div className="location-info">
          <p>Type:<br/> <b>{location.type}</b></p>
          <p>Dimension: <br/> <b>{location.dimension}</b></p>
          <p>Poblation:<br/> <b>{location.residents?.length}</b></p>
        </div>
      </div>
      <ListResident residents={location.residents} />
    </div>
  );
}

const getNumber = () => Math.floor(Math.random() * 126) + 1;

export default App;
