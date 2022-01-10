import React, { useEffect, useState } from 'react';
import {get} from 'axios';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        get(url)
        .then(({data}) => {setResident(data)
         setLoading(false);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div className='card-resident'>
            {
                loading ? (
                    <div className="loading"></div>
                ) : (
                <>
                    <div className="card-resident-head">
                        <img src={resident.image} alt="" />
                    </div>
                    <div className="card-resident-info">
                        <h4>{resident.name}</h4>
                        <p>Status: <b>{resident.status}</b></p> 
                        <p>Species: <b>{resident.species}</b></p>
                        <p>Origin: <b>{resident.origin?.name}</b></p>
                        <p>Episodes: <b>{resident.episode?.length}</b></p>
                    </div>
                </>
                )
            }
            
        </div>
    );
};

export default ResidentInfo;