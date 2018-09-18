
import { getRandCard }   from '~/utils/utils'  
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers  from '~/reducers'; 
import '~/scss/main.scss';    
import HomeApp from '~/containers/HomeApp';   
 
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



render(
<Provider store={store} >
    <HomeApp/>
</Provider> 
, document.getElementById('main'));