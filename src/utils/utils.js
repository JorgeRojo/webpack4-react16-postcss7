import Faker from 'faker';
import uniqid from 'uniqid';  

export const images =  [
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

export const randBetween = (min, max) => ( 
    Math.round(Math.random() * (max - min )) + min 
) 
  
export const getRandCard = () => ({ 
    id: uniqid(), 
    title: Faker.lorem.words(randBetween(3, 9)),
    description: Faker.lorem.words(randBetween(10,20)),
    image: images[randBetween(0,images.length -1)]
})     
 