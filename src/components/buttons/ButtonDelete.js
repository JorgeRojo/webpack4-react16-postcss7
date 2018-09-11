import React from 'react'; 
import Button from './Button';   

function ButtonDelete(props) { 
    return (
        <Button className="buttonDelete" {...props}>
            DELETE 
        </Button>
    );
}
  
export default ButtonDelete;