import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ListResident = ({residents}) => {

    const [current, setCurrent] = useState(0);

    const filterResidents =  residents?.slice(current,current + 6)

    const nextPage = () => residents?.length > (current + 6) && setCurrent(current + 6)

    const prevPage = () => current > 0 && setCurrent(current - 6);

    return (
        <>
        <div className='residents'>
            {
                filterResidents?.map(resident => <ResidentInfo url={resident} key={resident}/>)
            }       
        </div>
        {
            residents?.length > 6 && (
                <div className="pagination">
                    <button onClick={prevPage}>Prev</button>
                    <span>Pages</span>
                    <button onClick={nextPage}>Next</button> 
                </div>
            )
        }
        </>
    );
};

export default ListResident;