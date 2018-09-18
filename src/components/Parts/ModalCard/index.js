import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles.scss'; 

import ButtonDelete from '~/components/Buttons/ButtonDelete';
import ButtonEdit from '~/components/Buttons/ButtonEdit';

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