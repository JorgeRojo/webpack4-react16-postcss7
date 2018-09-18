import Faker from 'faker';
import uniqid from 'uniqid';  

export const images =  [
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

export const randBetween = (min, max) => ( 
    Math.round(Math.random() * (max - min )) + min 
) 
  
export const getRandCard = () => ({ 
    id: uniqid(), 
    title: Faker.lorem.words(randBetween(3, 9)),
    description: Faker.lorem.words(randBetween(10,20)),
    image: images[randBetween(0,images.length -1)]
})     
 