import React from 'react';
const Griditem = ({item}) => {
    //console.log(word);
    const {word, flag} = item;
    return ( 
        <div className="card">
        <div className="card-body">
            {word}
            {flag ? (<span class="badge bg-secondary">Palindrome</span>) : (
                "")
                }  
        </div>
        </div>
     );
}
 
export default Griditem;