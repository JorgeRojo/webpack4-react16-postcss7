import React from 'react'; 
import Button from './Button';    

function ButtonOpen(props) {
    return (
        <Button className="buttonOpen" {...props}>
            [ + Add New by from ]
        </Button>
    );
}
  
export default ButtonOpen;