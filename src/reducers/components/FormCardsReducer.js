export default function (state = {}, action) {
    switch (action.type) { 
        case 'FORM_CARDS_SET':
            return { 
                data: { ...action.payload.data },
                errors: { ...action.payload.errors },
                isValid: action.payload.isValid ,
                isSubmitted: action.payload.isSubmitted,
            }
        case 'FORM_CARDS_RESET':
            return {
                data: {},
                errors: {},
                isSubmitted: false,
                isValid: false,
            } 
        default:
            return state
    }
}    