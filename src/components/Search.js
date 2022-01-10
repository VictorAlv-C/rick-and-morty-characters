import React, { useState } from 'react';
import {get} from 'axios'

const Search = ({setLocation}) => {

    const[word, setWord] = useState("")
    const [locations, setLocations] = useState({})

    const getLocation = (e) => {
        setWord(e.target.value)
        get(`https://rickandmortyapi.com/api/location/?name=${word}`)
        .then(({data}) => setLocations(data))
        .catch(err => console.log(err))
    }
        // const enter = (e) => e.keyCode === 13 && getLocation();
    const send = (loc) => {setLocation(loc); setWord("")};

     return (
        <div className="search">
             <input type="text" onChange={e => getLocation(e)  } value={word} placeholder='Enter Location' />  
            <div className='sugerency'>
                {
                 word && locations.results?.map(location => (
                        <p key={location?.id} onClick={() => send(location)} >{location?.name}</p> 
                        
                     ) )
                 }
            </div>
             {/* <button onClick={getLocation}>Search</button> */}
        </div>
    );
};

export default Search;