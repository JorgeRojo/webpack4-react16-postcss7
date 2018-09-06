import React, { PureComponent } from 'react';   
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import ModalContainer from  './ModalContainer';
import styles from  './Modal.scss';

class Modal extends PureComponent {

    state = {
        isVisible: false,
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        handleClick: PropTypes.func.isRequired,
    }


    render() { 
        return (
            <ModalContainer {...this.props}>
                <div styleName="Modal" onClick={this.props.handleClick}> 
                    <div styleName="Modal-frame" onClick={ this.props.handleAnulateClick }>
                        <h1 styleName="Modal-title">{this.props.title}</h1>
                        <a href="#" styleName="Modal-closer" onClick={this.props.handleClick}>X</a>
                        <div styleName="Modal-contents">
                            {this.props.children}
                        </div>
                    </div> 
                </div>
            </ModalContainer>
        )
    }
}  



export default CSSModules(Modal, styles);