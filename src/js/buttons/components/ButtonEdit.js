import React from 'react'; 
import Button from './Button';   

function buttonEdit(props) { 
    return (
        <Button className="buttonEdit" {...props}>
            EDIT 
        </Button>
    );
}
  
export default buttonEdit;