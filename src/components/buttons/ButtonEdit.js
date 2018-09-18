import React from 'react'; 
import Button from './Button';   

function ButtonEdit(props) { 
    return (
        <Button className="buttonEdit" {...props}>
            EDIT 
        </Button>
    );
}
  
export default ButtonEdit;