import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './ModalCard.scss'; 

import ButtonDelete from '~/components/buttons/ButtonDelete';
import ButtonEdit from '~/components/buttons/ButtonEdit';

const ModalCard = props => (  
    <div styleName="wrapper"> 
        <img src={props.image} />
        <p>{ props.description }</p> 
        <ButtonDelete handleClick={props.handleClickCloseModalAndRemoveCard}/> 
        <ButtonEdit handleClick={props.handleClickCloseModalAndEditCard}/> 
    </div>
)

ModalCard.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleClickCloseModalAndRemoveCard: PropTypes.func.isRequired,
    handleClickCloseModalAndEditCard:  PropTypes.func.isRequired,
}


export default CSSModules(ModalCard, styles);