import React from 'react'; 
import PropTypes from 'prop-types';  
import CSSModules from 'react-css-modules';
import styles from './Btn.scss';    

function Btn(props) {  
  
    let className = ''; 
    if('className' in props && props.className in styles) {
        className = styles[props.className];
    }

    return (
        <a href="#" styleName='btn' className={className}  onClick={props.handleClick}>
            {props.children}
        </a> 
    );
}

Btn.propTypes = { 
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default CSSModules(Btn, styles);