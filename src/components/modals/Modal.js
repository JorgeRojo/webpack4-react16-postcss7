import React, { PureComponent } from 'react';   
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import ModalPortal from  './ModalPortal';
import styles from  './Modal.scss';

class Modal extends PureComponent {
  

    static propTypes = {
        isActive: PropTypes.bool.isRequired, 
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        handleClickClose: PropTypes.func.isRequired,
    } 

    render() {  
        return (
            <ModalPortal>
                <div styleName="wrapper" className={this.props.isActive ? 'open' : 'closed'} onClick={this.props.handleClickClose}> 
                    <div styleName="frame" onClick={ event => event.stopPropagation() }> 
                        <h1 styleName="title">{this.props.title}</h1>
                        <a href="#" styleName="closer" onClick={this.props.handleClickClose}>X</a>
                        <div styleName="contents">
                            {this.props.children}
                        </div>
                    </div> 
                </div>
            </ModalPortal>
        )
    }
}  



export default CSSModules(Modal, styles);