import Faker from 'faker';
import uniqid from 'uniqid';   
 
const images = [
    require('~/assets/images/corderito.jpg'),  
    require('~/assets/images/acaro.jpg'),  
    require('~/assets/images/buhito.jpg'),  
    require('~/assets/images/conejito.jpg'),  
    require('~/assets/images/erizito.jpg'),  
    require('~/assets/images/gatito.jpg'),  
    require('~/assets/images/panda.jpg'),  
    require('~/assets/images/perrito.jpg'),  
    require('~/assets/images/pollito.jpg'),  
    require('~/assets/images/tigre.jpg'),  
] 


export default class DataService { 
    
    _randBetween = (min, max) => ( Math.round(Math.random() * (max - min )) + min )



}