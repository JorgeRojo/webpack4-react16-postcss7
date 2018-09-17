
import { getRandCard }   from './src/utils/utils'  
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers  from './src/reducers'; 
 
//data -------------------- 
const initilState = (() => { 
    const cards = [];   
    for(let i = 0; i < 4; i++) { 
        cards.push(getRandCard()) 
    }   
    return {
        data: { 
            cards 
        },
        components: { 
            modal: {
                isActive: false,
                title: '',
                children: '',                
            },
            form_cards: {
                data: {},
                errors: {},
                isSubmited: false,
            }
        }
    }
})()


const store = createStore( 
    reducers, 
    initilState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
) 

//view --------------------

import './src/scss/main.scss';    
import PanelLayout from './src/components/layouts/PanelLayout';  
import components from '../reducers/components';


render(
<Provider store={store} >
    <PanelLayout/>
</Provider> 
, document.getElementById('main'));