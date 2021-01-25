
import {

    START_DOWNLOAD_TEST ,
    DOWNLOAD_TEST_SUCCESS ,
    DOWNLOAD_TEST_ERROR 
} from '../types';


import clienteAxios from '../config/axios';

export function setItem(item) {
    return async (dispatch) => {


            
         //   alert('Se agrego exitosamente');

         dispatch( getItem() );
    
         try {
             // insertar en la API
             const respuesta = await clienteAxios.get(`/iecho?text=${item}`);
             console.log(respuesta.data)
             dispatch( addItem({ word: respuesta.data.text, flag: respuesta.data.flag}) );
             //alert('Se agrego exitosamente');
         } catch (error) {
             alert('Fallo en conexion intente nuevamente');
          //   dispatch( AddInstitutionError(true) );
         }
         

        
    }

}

const addItem = item => ({
    type: DOWNLOAD_TEST_SUCCESS,
    payload: item
})

const getItem = () => ({
    type:     START_DOWNLOAD_TEST ,
    payload: true
});

