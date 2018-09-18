import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { hot } from 'react-hot-loader'; 
 
 
import CardList from  '~/components/cards/CardList';   
import ButtonAdd from '~/components/buttons/ButtonAdd';
import ButtonOpen from '~/components/buttons/ButtonOpen';
import Modal from  '~/components/modals/Modal';
import FormCardsContainer from  '~/components/forms/FormCardsContainer';
  
class PanelLayout extends Component {  
 
         
    handleClickAddRandCard = event => { 
        event.preventDefault();   
        this.props.dispatch({
            type: 'CARD_ADD_RANDOM'
        })
    } 
     

    handleClickOpenModalForm = event => {
        event.preventDefault() 
        
        this.props.dispatch({
            type: 'FORM_CARDS_RESET' 
        })

        this.props.dispatch({
            type: 'MODAL_OPEN',
            payload: { 
                title: 'Add new card',
                children: (
                    <FormCardsContainer />
                )
            }
        }) 
        
    }

    
    //--- live clicle ------ 

    render() {    
        return (
            <div>     
                <CardList />   
                <Modal {...this.props.modal} />
                <ButtonAdd handleClick={ this.handleClickAddRandCard } />
                <ButtonOpen handleClick={ this.handleClickOpenModalForm } /> 
            </div> 
        )
    } 
 
}

  
function mapStateToProps(state, props) {
    return {  
        modal: state.components.modal
    }
} 

export default  module.hot 
    ? hot(module)(connect(mapStateToProps)(PanelLayout)) 
    : connect(mapStateToProps)(PanelLayout)