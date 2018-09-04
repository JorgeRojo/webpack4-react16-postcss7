
import React from 'react';
import { render } from 'react-dom';
import MediaList from './components/medialist/medialist.js';
import Faker from 'faker';
const dataList = [];

             
for(let i = 0; i < 10; i++) { 
    dataList.push({
        image: Faker.image.animals(260,160),
        title: Faker.lorem.words(5) ,
        description: Faker.lorem.words(20) 
    })
} 

const main = document.getElementById('main'); 

render(<MediaList dataList={dataList} />, main);