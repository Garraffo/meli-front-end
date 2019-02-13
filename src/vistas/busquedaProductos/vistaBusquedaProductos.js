import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import ListaBusqueda from '../../components/ListaBusqueda/listabusqueda';
import { parse } from 'qs';
import BreadCrumbs from '../../components/BreadCrumb/breadcrumb';
import '../marcoBusquedaDetalle.scss';
import ProductoNoEncontrado from '../../components/ListaBusqueda/productonoencontrado';

const limiteQuery = '4';

class BusquedaProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            categorias: [],
            showResultado: ''
        };

    }


    componentDidMount() {
        this.buscarProductos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.buscarProductos();
        }
    }

    buscarProductos() {
        const search = parse(this.props.location.search.substr(1));
        this.setState({ search, productos: [], categorias: [], showResultado: false });


        this.getProductos(search.search)
            .then((data) => {
                console.log("RESPONSE");
                //Verifico si trajo resultados a través de data.filters porque hubo casos de prueba 
                //en los que a pesar de ingresar algo inexistente, el servicio respondió con productos sin relación entre ellos
                if (data.filters.length > 0) {
                    this.setState({
                        productos: data.results,
                        categorias: data.filters[0].values[0].path_from_root
                    });

                }
                console.log("data.results");
                console.log(data.results);
                this.setState({ showResultado: true });
            })
    }

    async getProductos(search) {
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=:" + search + "&limit=" + limiteQuery;
        console.log("REQUEST");
        try {
            const response = await fetch(url);
            return await response.json();
        }
        catch (error) {
            return console.log(error);
        }
    }

    render() {
        console.log("rendering");
        console.log(this.state.showResultado);
        console.log(this.state.productos.length);
        return (
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                {this.state.showResultado === true &&
                    <div>
                        {this.state.productos.length > 0 ? (
                            <div>
                                <div className="marcoBreadCrumbs">
                                    <BreadCrumbs categorias={this.state.categorias}></BreadCrumbs>
                                </div>
                                <div className="marcoResultado">
                                    <ListaBusqueda productos={this.state.productos}></ListaBusqueda>
                                </div>
                            </div>
                        ) : (
                                <div className="marcoResultado">
                                    <ProductoNoEncontrado></ProductoNoEncontrado>
                                </div>
                            )}

                    </div>}
            </div>
        );
    }


}

export default BusquedaProductos;