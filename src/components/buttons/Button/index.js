import React from 'react'; 
import PropTypes from 'prop-types';  
import CSSModules from 'react-css-modules';
import styles from './styles.scss';     

function Button(props) {  
  
    // let className = ''; 
    // if('className' in props && props.className in styles) {
    //     className = styles[props.className];
    // }

    return (
        <a href="#" styleName='wrapper' className={props.className} onClick={props.handleClick}>
            {props.children}
        </a> 
    );
}

Button.propTypes = { 
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default CSSModules(Button, styles);