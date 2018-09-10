import React, {Component} from 'react';
import CardForm from './CardForm';
import PropTypes from  'prop-types';

class CardFormContainer extends Component { 

    static propTypes = {
        saveCard: PropTypes.func.isRequired
    } 

    state = { 
        formData: { 
            image: '',
            title: '',
            description: '',
        },
        formErrors: {   
            image: '',
            title: '',
            description: '',
        },
    }

    constructor(props) {
        super(props) 
        if('formData' in props) {
            this.state.formData = { ...this.state.formData, ...props.formData } 
        }
    }

    

    _validateForm = () => { 
        let isValid = true;
        const formErrors = {   
            image: '',
            title: '',
            description: '',
        }

        if(!this.state.formData.image.trim()) {
            formErrors.image= 'Selecting one image is required';
            isValid = false;
        }
        
        if(!this.state.formData.title.trim()) {
            formErrors.title= 'Writing a title is required';
            isValid = false;
        } 
        
        if(!this.state.formData.description.trim()) {
            formErrors.description= 'Writing a description is required';
            isValid = false;
        } 

        this.setState({formErrors}) 
        return isValid
    }

 
    handleImageChange = event => {   
        const image = event.target.value.trim()
        const formData = {...this.state.formData, image }
        this.setState({formData})   
    }

    handleTitleChange = event => { 
        const title = event.target.value.trim()
        const formData = {...this.state.formData, title }
        this.setState({formData})    
    } 

    handleDescriptionChange = event => { 
        const description = event.target.value.trim()
        const formData = {...this.state.formData, description }
        this.setState({formData})    
    }

    handleSubmit = event => { 
        event.preventDefault();   
        if(!this._validateForm()) {
            return false;
        } 
        this.props.saveCard(this.state.formData);  
    }
      
    render = () => (<CardForm 
        {...this.state}
        images={this.props.images} 
        handleImageChange={this.handleImageChange}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
    />) ; 

   
    
}

export default CardFormContainer;
