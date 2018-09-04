import React, { Component } from 'react'; 
//import PropTypes from 'prop-types'; 
import css from './medialist.scss';
import Media from  '../media/media.js';


class MediaList extends Component { 

    constructor(props) {
        super(props)
    }

    render() {  
        return (
            <div className={css.container}>
                { this.props.dataList.map( (data, index) => <Media 
                    key= {index}
                    image={data.image} 
                    title={data.title} 
                    description={data.description} 
                />) }
            </div> 
        )
    }
}

export default MediaList;