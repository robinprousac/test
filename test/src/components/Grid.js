import React from 'react';
import Griditem from './Griditem'

import {  useSelector } from 'react-redux';

const Grid = () => {

    const items = useSelector( state => state.stateTest.items );


    return ( 
        <div className="container mt-5">
        <h1 >
           RESULT:
        </h1>



             {items.length === 0 ? 'No hay items' : (
                    items.map( item => (
                        <Griditem 
                           // key={ img.id }
                           item =  {item  }
                        />
                    )) )
                }   

        
            </div>
     );
}
 
export default Grid;