import React from 'react'; 
import Btn from './Btn';    

function AddBtn(props) {
    return (
        <Btn className="add" {...props}>
            [ + Add New ]
        </Btn>
    );
}
  
export default AddBtn;