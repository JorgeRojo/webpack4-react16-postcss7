import React, { PureComponent } from 'react'; 
import PropTypes from 'prop-types';   

import styles from './Media.scss'; 
import CSSModules from 'react-css-modules'; 
import DeleteBtn from './DeleteBtn.js';
//import img from '../../images/gatito.jpg';

class Media extends PureComponent { 

    static propTypes = {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        //image: PropTypes.image,
    }

    render() {   
        //console.log('render -> El componente se monta en el dom');
        return (
            <div styleName="container" onClick={this.props.handleClickOpenModal(this.props.id)}>
                <div styleName="imgContainer" style={{backgroundImage: `url("${this.props.image}")`}}></div> 
                <h3 styleName="title">{this.props.title}</h3>
                <p styleName="description">{this.props.description}</p> 
                <DeleteBtn handleClick={ this.props.handleClickRemove(this.props.id) } />  
            </div>
        )
    } 
};  


export default CSSModules(Media, styles);
 