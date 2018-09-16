import React, { Component } from 'react';  
import { hot } from 'react-hot-loader';

import Faker from 'faker';
import uniqid from 'uniqid';  

import CardList from  './src/components/cards/CardList';  
import ModalCard from './src/components/cards/ModalCard';
import ButtonAdd from './src/components/buttons/ButtonAdd';
import ButtonOpen from './src/components/buttons/ButtonOpen';
import Modal from  './src/components/modals/Modal';
import CardFormContainer from  './src/components/forms/CardFormContainer';
 
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

class PanelLayout extends Component {  

     
    images = images;

    state = {
        dataList: [], 
        modalVisible: false,
        modalTitle: '...',
        modalContent: '...',
    }
    
    _randBetween = (min, max) => ( Math.round(Math.random() * (max - min )) + min )

    _addCard() {
        const dataList = this.state.dataList;  
        dataList.push({
            id: uniqid(), 
            title: Faker.lorem.words(this._randBetween(3, 9)),
            description: Faker.lorem.words(this._randBetween(10,20)) + " " + this._randBetween(0,20).toString().padStart(3,'0'),
            image: this.images[this._randBetween(0,this.images.length -1)]
        })

        this.setState({dataList})
    }

    _removeCard(id) {
        let dataList = this.state.dataList.filter( item => item.id != id );  
        this.setState({dataList});  
    }

    _closeModal() { 
        this.setState({ 
            modalVisible: false, 
        });

        if(this.timmerResetModal) {
            clearTimeout(this.timmerResetModal);
        }

        this.timmerResetModal = setTimeout(()=> {
            this.setState({  
                modalTitle: '...',
                modalContent: '...',
            });
        }, 400); 
    }

    _openModalFormCard(cardId=null) { 

        if(this.timmerResetModal) {
            clearTimeout(this.timmerResetModal);
        }

        const formData = this.state.dataList.find(item => item.id == cardId)
 
        this.setState({  
            modalVisible: true,
            modalTitle: formData ? "Edit card" : "Create new card",
            modalContent: (
                <CardFormContainer 
                    images={this.images}
                    formData={formData}
                    sendData={this.saveByFormData}  
                />
            ),
        })  
    }

    saveByFormData = data => {
        if('id' in data) {
            this._editCardByFormData(data)
        }
        else{
            this._addCardByFormData(data)
        }
    }

    _addCardByFormData(data) {
        const dataList = this.state.dataList;  
        const newCard = Object.assign({
            id: uniqid(), 
        }, data);
        dataList.push(newCard)
        this.setState({dataList})
        this._closeModal();
    }

    _editCardByFormData(data) {
        const dataList = this.state.dataList.map( item => {
            if(item.id == data.id) {
                item = data;
            }
            return item;
        });   
        this.setState({dataList})
        this._closeModal();
    }


  
    //--- handlers ---------
    
    handleClickAddNew = event => { 
        event.preventDefault();  
        this._addCard();
    }

    handleRemoveCard = id => event => { 
        event.preventDefault(); 
        event.stopPropagation();
        this._removeCard(id);
    }  
    
    handleCloseModal = event => {
        event.preventDefault(); 
        this._closeModal();
    } 
    
    handleCloseModalAndRemoveCard = cardId => event => { 
        this.handleRemoveCard(cardId)(event);
        this.handleCloseModal(event);
    }  

    handleCloseModalAndEditCard = cardId => event => { 
        event.preventDefault(); 
        event.stopPropagation();
        this._openModalFormCard(cardId); 
    }  

    handleOpenModalCard = cardId => event => {
        event.preventDefault();
        const item = this.state.dataList.find( item => item.id == cardId );
        if(item) { 
            if(this.timmerResetModal) {
                clearTimeout(this.timmerResetModal);
            }
            this.setState({  
                modalVisible: true,
                modalTitle: item.title,
                modalContent: <ModalCard
                    image={item.image}
                    description={item.description}
                    handleClickCloseModalAndRemoveCard={this.handleCloseModalAndRemoveCard(item.id)}
                    handleClickCloseModalAndEditCard={this.handleCloseModalAndEditCard(item.id)}
                />,
            })
        }
    }  

    handleOpenModalForm = event => {
        event.preventDefault() 
        this._openModalFormCard()
    }

    handleOpenModalFormEditCard = id => event => { 
        event.preventDefault(); 
        event.stopPropagation(); 
        this._openModalFormCard(id);
    } 

    //--- live clicle ------ 

    render() {   
        return (
            <div>   
                
                <CardList 
                    dataList={this.state.dataList} 
                    handleRemoveCard={this.handleRemoveCard}
                    handleEditCard={this.handleOpenModalFormEditCard}
                    handleOpenModal={this.handleOpenModalCard}  
                />    

                <Modal isActive={this.state.modalVisible}  
                    title={this.state.modalTitle}  
                    handleClickClose={this.handleCloseModal} 
                > { this.state.modalContent } </Modal>   

                <ButtonAdd handleClick={ this.handleClickAddNew } />
                <ButtonOpen handleClick={ this.handleOpenModalForm } /> 

            </div> 
        )
    }

    componentDidMount() {  
        for(let i = 0; i < 4; i++) { 
            this._addCard();
        }  
    } 
    
}
  

export default  module.hot ? hot(module)(PanelLayout) : PanelLayout