import React from 'react'; 
import Button from './Button';    

function ButtonAdd(props) {
    return (
        <Button className="buttonAdd" {...props}>
            [ + Add New Random ]
        </Button>
    );
}
  
export default ButtonAdd;