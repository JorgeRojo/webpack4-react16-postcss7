import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import FormCards from './FormCards'; 

class FormCardsContainer extends PureComponent { 
   
    _validateForm = data => { 
        let isValid = true;
        
        const errors = {   
            image: '',
            title: '',
            description: '',
        }

        if(!data.image || !data.image.trim()) {
            errors.image= 'Selecting one image is required';
            isValid = false;
        }
        
        if(!data.title ||  !data.title.trim()) {
            errors.title= 'Writing a title is required';
            isValid = false;
        } 
        
        if(!data.description || !data.description.trim()) {
            errors.description= 'Writing a description is required';
            isValid = false;
        } 

        return { isValid, errors }
    } 

    _setFormState(data) {  
        const isSubmitted = this.props.isSubmitted
        const validation =  isSubmitted ? this._validateForm(data) : {};  
        this.props.dispatch({
            type: 'FORM_CARDS_SET',
            payload: {
                ...validation, 
                data, 
                isSubmitted 
            }
        }) 
    }
    
 
    handleImageChange = event => {   
        const image = event.target.value.trim();
        this._setFormState({ ...this.props.data, image }); 
    }

    handleTitleChange = event => { 
        const title = event.target.value.trim();
        this._setFormState({ ...this.props.data, title } ); 
    } 

    handleDescriptionChange = event => { 
        const description = event.target.value.trim();
        this._setFormState({ ...this.props.data, description }); 
    }
 
    handleSubmit = event => { 
        event.preventDefault();  

        const data = this.props.data; 
        const validation = this._validateForm(data);
        
        if(!validation.isValid) {   
            this.props.dispatch({
                type: 'FORM_CARDS_SET', 
                payload: {
                    ...validation, 
                    data, 
                    isSubmitted: true
                }
            }) 
        } 
        else {
            this.props.dispatch({
                type: 'FORM_CARDS_RESET' 
            })
            this.props.dispatch({
                type: 'MODAL_CLOSE' 
            })  
            //update
            if( this.props.data.id ) {
                this.props.dispatch({
                    type: 'CARD_EDIT',
                    payload: { ...this.props.data }
                }) 
            }
            //insert
            else { 
                this.props.dispatch({
                    type: 'CARD_ADD',
                    payload: { ...this.props.data }
                }) 
            }
        }
         
    }
      
    render() { 
        return  (
            <FormCards  
                handleImageChange={this.handleImageChange}
                handleTitleChange={this.handleTitleChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleSubmit={this.handleSubmit}
            />
        )
    } 
   
    
}
  
function mapStateToProps(state, props) {
    return { ...state.components.form_cards }
} 
export default connect(mapStateToProps)(FormCardsContainer);
