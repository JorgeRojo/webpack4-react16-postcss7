import React, { PureComponent } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  
import CSSModules from 'react-css-modules'; 
import styles from './Card.scss';  

import ButtonDelete from './src/components/buttons/ButtonDelete';
import ButtonEdit from './src/components/buttons/ButtonEdit';
import ModalCard from  './src/components/cards/ModalCard';   
import FormCardsContainer from './src/components/forms/FormCardsContainer';

class Card extends PureComponent { 

    static propTypes = {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired, 
    }
    
    handleClick = event => { 
        event.preventDefault();  
        this.props.dispatch({
            type: 'MODAL_OPEN',
            payload: { 
                title: this.props.title ,
                children: (
                    <ModalCard 
                        image={this.props.image}
                        description={this.props.description}
                        handleClickCloseModalAndRemoveCard = {this.handleClickCloseModalAndRemoveCard}
                        handleClickCloseModalAndEditCard = {this.handleClickCloseModalAndEditCard}
                    />
                )
            }
        })   
    }

    handleClickCloseModalAndRemoveCard = event => {  
        this.props.dispatch({
            type: 'MODAL_CLOSE', 
        })  
        this.handleClickDelete(event)
    }

    handleClickCloseModalAndEditCard = event => {   
        this.props.dispatch({
            type: 'MODAL_CLOSE', 
        })  
        this.handleClickEdit(event)
    }
    
    handleClickEdit = event => {
        event.preventDefault(); 
        event.stopPropagation();

        this.props.dispatch({
            type: 'FORM_CARDS_SET',
            payload: {
                data: {...this.props},
                errors: {},
                isValid: false,
                isSubmited: false,
            }
        })

        this.props.dispatch({
            type: 'MODAL_OPEN',
            payload: { 
                title: 'Edit card',
                children: (
                    <FormCardsContainer />
                )
            }
        }) 

    }
    
    handleClickDelete = event => {
        event.preventDefault(); 
        event.stopPropagation();
        this.props.dispatch({
            type: 'CARDS_DELETE',
            payload: { id: this.props.id }
        })
    } 
 
    render() {    
        return (
            <div styleName="wrapper" onClick={this.handleClick}>
                <div styleName="img" style={{backgroundImage: `url("${this.props.image}")`}}></div> 
                <h3 styleName="title">{this.props.title}</h3>
                <p styleName="description">{this.props.description}</p> 
                <ButtonEdit handleClick={ this.handleClickEdit } />  
                <ButtonDelete handleClick={ this.handleClickDelete  } />  
            </div>
        )
    }

};   
 
function mapStateToProps(state, props) {
    return {   
        modal: state.components.modal
    }
} 

export default connect(mapStateToProps)(CSSModules(Card, styles));
 