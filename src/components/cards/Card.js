import React, { PureComponent } from 'react'; 
import PropTypes from 'prop-types';  
import CSSModules from 'react-css-modules'; 
import styles from './Card.scss';  

import ButtonDelete from '../buttons/ButtonDelete';
import ButtonEdit from '../buttons/ButtonEdit';

class Card extends PureComponent { 

    static propTypes = {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        //image: PropTypes.image,
    }

    render() {   
        //console.log('render -> El componente se monta en el dom');
        return (
            <div styleName="wrapper" onClick={this.props.handleClickOpenModal(this.props.id)}>
                <div styleName="img" style={{backgroundImage: `url("${this.props.image}")`}}></div> 
                <h3 styleName="title">{this.props.title}</h3>
                <p styleName="description">{this.props.description}</p> 
                <ButtonEdit handleClick={ this.props.handleClickEdit(this.props.id) } />  
                <ButtonDelete handleClick={ this.props.handleClickRemove(this.props.id) } />  
            </div>
        )
    } 
};  


export default CSSModules(Card, styles);
 