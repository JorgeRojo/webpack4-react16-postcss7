import React from 'react';  
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';  

import styles from './CardList.scss';  

import Card from  '~/components/cards/Card';

const CardList = props => (
    <div styleName="wrapper">  
        { props.cards.map( item => (<Card key={item.id} {...item} />))} 
    </div>
)

function mapStateToProps(state, props) {
    return {
        cards: state.data.cards, 
    }
}

export default  connect(mapStateToProps)(CSSModules(CardList, styles));