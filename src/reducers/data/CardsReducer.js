
import {getRandCard} from './src/utils/utils'; 
import uniqid from 'uniqid'; 

export default function (state = [], action) {
    switch (action.type) { 
        case 'CARD_ADD':
            return [...state, { ...action.payload, id: uniqid() }] 
        case 'CARD_EDIT':
            return state.map(card => card.id === action.payload.id ? action.payload : card)
        case 'CARD_ADD_RANDOM':
            return [...state, getRandCard()]
        case 'CARDS_DELETE':
            return state.filter(card => card.id !== action.payload.id)
        default:
            return state
    }
}   