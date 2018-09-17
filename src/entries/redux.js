import {createStore} from 'redux';
 
const store = createStore(
    (state, action) => {
        switch( action.type ) {
            case 'ADD_ITEM':
                return [ ...state, action.payload ] 
            default:
                return state
        } 
    }, 
    [
        { title: 'Title uno'},
        { title: 'Title dos'},
        { title: 'Title title'},
    ], 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
)





//----------------------------------------------------------------------

import './src/scss/main.scss';    
import './src/scss/redux.scss';   
 

const $form = document.getElementById('form');
const $container = document.getElementById('playlist');


$form.addEventListener('submit', event => {
    event.preventDefault(); 
    const data = new FormData($form)
    const title =  data.get('title') 
    store.dispatch({
        type: 'ADD_ITEM',
        payload: { title }
    }) 
}); 

function render() { 
    const playlist = store.getState(); 
    $container.innerHTML = '';
    playlist.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.title;
        $container.appendChild(li);
    });
}
render();


const handleChanges = () => {
    render();    
}

store.subscribe(handleChanges);