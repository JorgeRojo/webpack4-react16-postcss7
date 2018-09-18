import React, { PureComponent } from 'react';   
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ModalPortal from  '~/containers/ModalPortal'// ~/containers/ModalPortal.js';
import styles from  './styles.scss';

class Modal extends PureComponent {
   
    static propTypes = { 
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired, 
    } 

    state = {
        title: '',
        children: '',  
    } 

    handleClickClose = event => {
        event.preventDefault();
        this.props.dispatch({ 
            type: 'MODAL_CLOSE'
        })
    }

    render() {  
        return (
            <ModalPortal>
                <div 
                    styleName="wrapper" 
                    className={this.props.isActive ? 'open' : 'closed'} 
                    onClick={this.handleClickClose}
                > 
                    <div styleName="frame" onClick={ event => event.stopPropagation() }> 
                        <h1 styleName="title">{this.state.title}</h1>
                        <a href="#" styleName="closer" onClick={this.handleClickClose}>X</a>
                        <div styleName="contents">
                            {this.state.children}
                        </div>
                    </div> 
                </div>
            </ModalPortal>
        )
    }


    componentWillReceiveProps(newProps) {   
        if(this.timmerResetModal) {
            clearTimeout(this.timmerResetModal);
        }  
        //open
        if(newProps.isActive) { 
            this.setState({...newProps}) 
        }
        //remove contents affter animation
        else {  
            this.timmerResetModal = setTimeout(()=> {  
                this.setState({...newProps})
            }, 400);  
        }
    } 

}  

function mapStateToProps(state, props) {
    return { ...state.components.modal }
} 

export default connect(mapStateToProps)(CSSModules(Modal, styles));