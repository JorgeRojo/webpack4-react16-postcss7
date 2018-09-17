export default function (state = {}, action) {
    switch (action.type) { 
        case 'MODAL_CLOSE':
            return {
                ...state, 
                isActive: false,
                title: '',
                children: '', 
            }
        case 'MODAL_OPEN':
            return {
                ...state, 
                ...action.payload, 
                isActive: true   
            } 
        default:
            return state
    }
}    