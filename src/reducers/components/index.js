import { combineReducers } from 'redux' 
import modal from './ModalReducer'
import form_cards from './FormCardsReducer'

export default combineReducers({ 
    modal ,
    form_cards 
})