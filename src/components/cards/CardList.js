import React from 'react';  
import CSSModules from 'react-css-modules';  
import styles from './CardList.scss';  

import Card from  './src/components/cards/Card';

const CardList = props => (
    <div styleName="wrapper">  
        { props.dataList.map( item => ( 
            <Card 
                key={item.id}  
                handleClickOpenModal={props.handleOpenModal} 
                handleClickRemove={props.handleRemoveCard} 
                handleClickEdit={props.handleEditCard} 
                {...item} 
            /> 
        ))} 
    </div>
)

export default CSSModules(CardList, styles);