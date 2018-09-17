import React  from 'react';
import {connect} from 'react-redux';
import {images} from './src/utils/utils'

import CSSModules from 'react-css-modules'
import styles from './FormCards.scss'

 
const FormCards = props => {

    return ( 
        <form styleName="wrapper" onSubmit={props.handleSubmit} >
        
            <div 
                styleName="imageContainer" 
                style={{ backgroundImage:  props.data.image ? `url("${props.data.image}")` : ''}}
            ></div>
            
            <div styleName="fieldsGroup">

                <div styleName="fieldContainer">  
                    <select  
                        styleName={props.errors.image ? 'error' : ''}
                        onChange={props.handleImageChange} 
                        defaultValue={props.data.image} 
                    >
                        <option value="">... select an image ...</option>
                        {images.map(image => 
                            <option key={image} value={image}>{image}</option>
                        )}
                    </select> 
                    { props.errors.image && 
                        <p styleName="error">{ props.errors.image }</p> 
                    } 
                </div> 


                <div styleName="fieldContainer"> 
                    <input 
                        styleName={props.errors.title ? 'error' : ''}
                        onKeyUp={props.handleTitleChange} 
                        onChange={props.handleTitleChange} 
                        defaultValue={props.data.title} 
                        placeholder="card title"
                        type="text" 
                    /> 
                    { props.errors.title && 
                        <p styleName="error">{ props.errors.title }</p> 
                    } 
                </div> 

                <div styleName="fieldContainer"> 
                    <input  
                        styleName={ !!props.errors.description ? 'error' : ''}
                        onKeyUp={props.handleDescriptionChange} 
                        onChange={props.handleDescriptionChange} 
                        defaultValue={props.data.description} 
                        placeholder="card description"
                        type="text" 
                    /> 
                    { props.errors.description && 
                        <p styleName="error">{ props.errors.description }</p> 
                    } 
                </div>  

            </div>
        
            <button type="submit">
                {props.data.id ? 'Save' : 'Create'}
            </button> 

        </form> 
    )
    
}

function mapStateToProps(state, props) {
    return { ...state.components.form_cards }
}    
export default connect(mapStateToProps)(CSSModules(FormCards, styles));