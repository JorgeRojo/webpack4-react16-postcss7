import React from 'react'; 
import Btn from './Btn';   

function DeleteBtn(props) { 
    return (
        <Btn className="delete" {...props}>
            <i>[ delete ]</i>
        </Btn>
    );
}
  
export default DeleteBtn;