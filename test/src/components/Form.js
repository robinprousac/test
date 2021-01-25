import React , { useState } from 'react';
import { useDispatch } from 'react-redux';

import {setItem} from './../actions/testActions'


const Form = () => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(''); // ''

  const handleInputChange = ( e ) => {
      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      if ( inputValue.trim().length > 2 ) {
         // setCategories( cats => [ inputValue, ...cats, ] );
         dispatch(setItem(inputValue))
          setInputValue('');
      }

  }


    return ( 

        <form 
          className="row g-3"
          onSubmit={ handleSubmit }
          >
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">Email</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="Text:"/>
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">Test</label>
          <input type="text" className="form-control" 
                  id="inputPassword2" 
                  placeholder="Test"
                  value={ inputValue }
                  onChange={ handleInputChange }
                  />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Send</button>
        </div>
      </form>


     );
}
 
export default Form;