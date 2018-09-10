import React  from 'react';
import CSSModules from 'react-css-modules';
import styles from './CardForm.scss';  

 
const CardForm = props => ( 
    <form styleName="wrapper" onSubmit={props.handleSubmit} >
        <div 
            styleName="imageContainer" 
            style={{backgroundImage: props.formData.image ? `url("${props.formData.image}")` : ''}}
        ></div>
        
        <div styleName="fieldsGroup">
            <div styleName="fieldContainer">  
                <select  
                    onChange={props.handleImageChange} 
                    defaultValue={props.formData.image} 
                >
                    <option value="">... select an image ...</option>
                    {props.images.map(image => 
                        <option key={image} value={image}>{image}</option>
                    )}
                </select>
                { 
                    props.formErrors.image && 
                    <p styleName="error">{ props.formErrors.image }</p> 
                } 
            </div> 
            <div styleName="fieldContainer"> 
                <input 
                    onKeyUp={props.handleTitleChange} 
                    onChange={props.handleTitleChange} 
                    defaultValue={props.formData.title} 
                    placeholder="card title"
                    type="text" 
                /> 
                { 
                    props.formErrors.title && 
                    <p styleName="error">{ props.formErrors.title }</p> 
                } 
            </div> 
            <div styleName="fieldContainer"> 
                <input  
                    onKeyUp={props.handleDescriptionChange} 
                    onChange={props.handleDescriptionChange} 
                    defaultValue={props.formData.description} 
                    placeholder="card description"
                    type="text" 
                /> 
                { 
                    props.formErrors.description && 
                    <p styleName="error">{ props.formErrors.description }</p> 
                } 
            </div>  
        </div>
       
        <button type="submit">
            {props.formData.id ? 'Save' : 'Create'}
        </button> 
    </form> 
)

export default CSSModules(CardForm, styles);