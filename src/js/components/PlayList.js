import React, { Component } from 'react';  
import Media from  './Media';  
import Modal from  './Modal';
import AddBtn from './AddBtn';

import Faker from 'faker';
import uniqid from 'uniqid';  
 

class PlayList extends Component {  

    images = [
        require('../../images/acaro.jpg'),  
        require('../../images/cabritillo.jpg'),  
        require('../../images/conejito.jpg'),  
        require('../../images/erizito.jpg'),  
        require('../../images/gatito.jpg'),  
        require('../../images/panda.jpg'),  
        require('../../images/perrito.jpg'),  
        require('../../images/pollito.jpg'),  
        require('../../images/tigre.jpg'),  
    ]

    state = {
        dataList: [],
        modalVisible: false,
    } 

    _addData() {
        const dataList = this.state.dataList;  
        dataList.push({
            id: uniqid(), 
            title: Faker.lorem.words(3),
            description: Faker.lorem.words(10),
            image: this.images[Math.round(Math.random() * (this.images.length -1))]
        });


        this.setState({dataList});
    }

    _removeData(id) {
        let dataList = this.state.dataList.filter( item => item.id != id );  
        this.setState({dataList});  
    }
    
    handleClickAddNew = event => { 
        event.preventDefault();
        this._addData();
    }

    handleClickRemoveOne = id => event => { 
        event.preventDefault();
        this._removeData(id);
    } 

    handleCloseModal = event => {
        event.preventDefault(); 
        this.setState({ modalVisible: false })
    }

    handleOpenModal = id => event => {
        event.preventDefault(); 
        this.setState({ modalVisible: true })
    }

    
    handleAnulateClick = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    //montado -----------------------
    constructor(props) { 
        super(props);      
        //hacer bind y actualizar state
        //console.log('constructor -> Se inicializa el componente'); 
    }

    componentWillMount() {
        //console.log('componentWillMount -> El componente se va a montar');
    }  
    

    render() {  
        //console.log('render -> El componente se monta en el dom');
        return (
            <div>
                <div> 
                    { this.state.dataList.map( (item, index) => 
                        <Media 
                            key={item.id}  
                            handleClickOpenModal={this.handleOpenModal} 
                            handleClickRemove={this.handleClickRemoveOne} 
                            {...item} 
                        /> 
                    )} 
                </div> 
                <AddBtn handleClick={ this.handleClickAddNew } /> 
                

                
                {
                    this.state.modalVisible &&                
                    <Modal 
                        title="Título del modal" 
                        handleClick={this.handleCloseModal}
                        handleAnulateClick={this.handleAnulateClick}
                    >
                        <p>Este es el contenido de mi modal</p>
                    </Modal>
                } 

            </div> 
        )
    }

    componentDidMount() {
        //console.log('componentDidMount -> El componente se ha montado en el dom'); 
        for(let i = 0; i < 4; i++) { 
            this._addData();
        }  
    }

    componentWillReceiveProps() {
        //console.log('componentWillReceiveProps -> El componente está recibiendo nuevas props');
    }


    //re-render -------------------
    shouldComponentUpdate() {
        //console.log('shouldComponentUpdate -> El componente hace comprobaciones para determinar si debemos renderizar de nuevo');
        return true;
    } 
    componentWillUpdate() {
        // console.log('componentWillUpdate -> El componente se va a re-renderizar')
    }
    componentDidUpdate() {
        // console.log('componentWillUpdate -> El componente se actualizó')
    }
    
    //desmontado ------------------
    componentWillUnmount() {
        // console.log('componentWillUnmount -> El componente se va desmontar')
    }

    //manjo de errores ------------
    componentDidCatch() {
        // console.log('componentDidCatch -> suelta un error dentro del componente')
    } 
    
}
 

export default PlayList;