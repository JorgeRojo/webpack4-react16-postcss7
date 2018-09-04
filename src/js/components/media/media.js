import React, { Component } from 'react'; 
import PropTypes from 'prop-types';   
import css from './media.scss'; 

class Media extends Component { 
  
    state = { 
        counter: 0,
        title: this.props.title
    }  

    handleClick = event => {
        console.log('handleClick' , event.type, this.props); 
        let counter = this.state.counter;
        counter++;

        this.setState({
            counter: counter,
            title: this.props.title + " " + counter,
        })
    }

    //-------- ciclo de vida --------
  
    //montado -----------------------
    constructor(props) { 
        super(props);   
        //hacer bind y actualizar state
        console.log('constructor -> Se inicializa el componente');
    }

    componentWillMount() {
        console.log('componentWillMount -> El componente se va a montar');
    }  
 
    render() { 
        console.log('render -> El componente se monta en el dom');
        return (
            <div className={css.container} onClick={this.handleClick}>
                <div  className={css.wrapper}>
                    <img src={this.props.image} alt={this.props.title} width={260} height={160}  />   
                    <h3 className={css.title}>{this.state.title}</h3>
                    <p className={css.description}>{this.props.description}</p> 
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount -> El componente se ha montado en el dom');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps -> El componente está recibiendo nuevas props');
    }


    //re-render -------------------
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate -> El componente hace comprobaciones para determinar si debemos renderizar de nuevo');
        return true;
    } 
    componentWillUpdate() {
        console.log('componentWillUpdate -> El componente se va a re-renderizar')
    }
    componentDidUpdate() {
        console.log('componentWillUpdate -> El componente se actualizó')
    }
    
    //desmontado ------------------
    componentWillUnmount() {
        console.log('componentWillUnmount -> El componente se va desmontar')
    }

    //manjo de errores ------------
    componentDidCatch() {
        console.log('componentDidCatch -> suelta un error dentro del componente')
    }


 
 
    /**
     * shouldComponentUpdate
     * - si devuelve true se ejecuta componentWillUpdate
     * es ideal para no volver a renderizar si el estado no ha cambiado aunque hayamos hecho un setState
     */
 
    /**
     * componentWillUpdate
     * - si shouldComponentUpdate el componente va a renderizarse de nuevo.
     */

   
};  

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default Media;