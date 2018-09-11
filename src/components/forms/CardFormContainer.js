import React, {Component} from 'react';
import CardForm from './CardForm';
import PropTypes from  'prop-types';

class CardFormContainer extends Component { 

    static propTypes = {
        sendData: PropTypes.func.isRequired
    } 

    state = { 
        formData: {},
        formErrors: {},
        isFormSubmited: false
    }

    constructor(props) {
        super(props) 
        if( !!props['formData'] ) {
            this.state.formData = { ...props.formData } 
        }
    }  

    _validateForm = formData => { 
        let isValid = true;
        
        const formErrors = {   
            image: '',
            title: '',
            description: '',
        }

        if(!formData['image'] || !formData.image.trim()) {
            formErrors.image= 'Selecting one image is required';
            isValid = false;
        }
        
        if(!formData['title'] ||  !formData.title.trim()) {
            formErrors.title= 'Writing a title is required';
            isValid = false;
        } 
        
        if(!formData['description'] || !formData.description.trim()) {
            formErrors.description= 'Writing a description is required';
            isValid = false;
        } 

        return { isValid, formErrors }
    }


    _setFormState(formData) {   
        if(this.state.isFormSubmited) { 
            const formErrors = this._validateForm(formData).formErrors;
            this.setState({ formData, formErrors})  
        }
        else { 
            this.setState({ formData })   
        }
    }
    
 
    handleImageChange = event => {   
        const image = event.target.value.trim();
        this._setFormState({ ...this.state.formData, image }); 
    }

    handleTitleChange = event => { 
        const title = event.target.value.trim();
        this._setFormState({ ...this.state.formData, title } ); 
    } 

    handleDescriptionChange = event => { 
        const description = event.target.value.trim();
        this._setFormState({ ...this.state.formData, description }); 
    }

    handleSubmit = event => { 
        event.preventDefault();  

        const formValidation = this._validateForm(this.state.formData);
        
        if(formValidation.isValid) { 
            this.props.sendData(this.state.formData);  
        }

        this.setState({
            formErrors: formValidation.formErrors,
            isFormSubmited: true 
        })
    }
      
    render = () => (<CardForm 
        {...this.state}
        images={this.props.images} 
        handleImageChange={this.handleImageChange}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
    />); 
   
    
}

export default CardFormContainer;
