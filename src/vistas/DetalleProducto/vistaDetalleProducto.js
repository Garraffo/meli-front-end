import React, {Component} from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import DetalleProducto from '../../components/DetalleProducto/detalleproducto';

class VistaDetalleProducto extends Component{
    constructor(props) {
        super(props);        
        this.state = {
          producto: '',
          categorias: []
         };
      }

    componentDidMount(){
        const IDproducto = this.props.location.pathname.replace('/items/', '');
        console.log("props location:");
        console.log(IDproducto);

        VistaDetalleProducto.getProducts(IDproducto)
            .then((data)=>{
                console.log("data detalle producto");
                console.log(data); 
                this.setState({
                    producto: data
                })
            })

    }

    componentDidUpdate(prevProps){
        if(prevProps.location.pathname !== this.props.location.pathname){
            const IDproducto = this.props.location.pathname.replace('/items/', '');
            console.log("props location:");
            console.log(IDproducto);
    
            VistaDetalleProducto.getProducts(IDproducto)
                .then((data)=>{
                    console.log("data detalle producto");
                    console.log(data); 
                    this.setState({
                        producto: data
                    })
                })
        }

    }


    static getProducts(IDproducto){
        let url = "https://api.mercadolibre.com/items/" + IDproducto;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                <DetalleProducto producto={this.state.producto}></DetalleProducto>
            </div>
        );
    }
}

export default VistaDetalleProducto;