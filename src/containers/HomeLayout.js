import React, { Component } from 'react';  
import { connect } from 'react-redux';   
 
import CardList from  '~/components/Parts/CardList';   
import ButtonAdd from '~/components/Buttons/ButtonAdd';
import ButtonOpen from '~/components/Buttons/ButtonOpen';
import Modal from  '~/components/Parts/Modal';
import FormCardsContainer from  '~/containers/FormCardsContainer';
  
class HomeLayout extends Component {  
  
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
            <>     
                <CardList />   
                <Modal {...this.props.modal} />
                <ButtonAdd handleClick={ this.handleClickAddRandCard } />
                <ButtonOpen handleClick={ this.handleClickOpenModalForm } /> 
            </> 
        )
    }  

}

  
function mapStateToProps(state, props) {
    return {  
        modal: state.components.modal
    }
} 

export default connect(mapStateToProps)(HomeLayout) 