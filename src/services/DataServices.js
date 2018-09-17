import Faker from 'faker';
import uniqid from 'uniqid';   
 
const images = [
    require('./src/assets/images/corderito.jpg'),  
    require('./src/assets/images/acaro.jpg'),  
    require('./src/assets/images/buhito.jpg'),  
    require('./src/assets/images/conejito.jpg'),  
    require('./src/assets/images/erizito.jpg'),  
    require('./src/assets/images/gatito.jpg'),  
    require('./src/assets/images/panda.jpg'),  
    require('./src/assets/images/perrito.jpg'),  
    require('./src/assets/images/pollito.jpg'),  
    require('./src/assets/images/tigre.jpg'),  
] 


export default class DataService { 
    
    _randBetween = (min, max) => ( Math.round(Math.random() * (max - min )) + min )



}