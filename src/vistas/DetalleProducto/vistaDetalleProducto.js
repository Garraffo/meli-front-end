import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import DetalleProducto from '../../components/DetalleProducto/detalleproducto';
import BreadCrumbs from '../../components/BreadCrumb/breadcrumb';
import '../marcoBusquedaDetalle.scss'
import Spinner from '../../components/Spinner/spinner';

class VistaDetalleProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: '',
            descripcion: '',
            categorias: [],
            showResultado: false
        };
    }

    componentDidMount() {
        const IDproducto = this.props.location.pathname.replace('/items/', '');
        VistaDetalleProducto.getProducto(IDproducto)
            .then((data) => {
                console.log("data detalle producto");
                console.log(data);
                this.setState({
                    producto: data,
                })

                VistaDetalleProducto.getDescripcionProducto(IDproducto)
                    .then((data) => {
                        this.setState({
                            descripcion: data
                        })
                    })

                VistaDetalleProducto.getCategoriaProducto(this.state.producto.category_id)
                    .then((data) => {
                        this.setState({
                            categorias: data.path_from_root,
                            showResultado: true
                        })
                        console.log("categorias data");
                        console.log(this.state.categorias);
                    })
                    
            })

    }

    static getProducto(IDproducto) {
        let url = "https://api.mercadolibre.com/items/" + IDproducto;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    static getDescripcionProducto(IDproducto) {
        let url = "https://api.mercadolibre.com/items/" + IDproducto + "/description";
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    static getCategoriaProducto(IDCategoria) {
        let url = "https://api.mercadolibre.com/categories/" + IDCategoria;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }



    render() {
        return (
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                {this.state.showResultado === true ? (
                    <div> 
                        <div className="marcoBreadCrumbs">
                            <BreadCrumbs categorias={this.state.categorias}></BreadCrumbs>
                        </div>
                        <div className="marcoResultado">
                            <DetalleProducto producto={this.state.producto} descripcion={this.state.descripcion}></DetalleProducto>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Spinner></Spinner>
                </div>
                )}
            </div>
        );
    }
}

export default VistaDetalleProducto;