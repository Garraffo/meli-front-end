import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import ListaBusqueda from '../../components/ListaBusqueda/listabusqueda';
import { parse } from 'qs';
import BreadCrumbs from '../../components/BreadCrumb/breadcrumb';
import '../marcoBusquedaDetalle.scss';
import ProductoNoEncontrado from '../ProductoNoEncontrado/productonoencontrado';

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
        const search = parse(this.props.location.search.substr(1));
        this.setState({ search, productos: [], categorias: [], showResultado: false });


        BusquedaProductos.getProducts(search.search)
            .then((data) => {
                console.log("RESPONSE");
                if (data.filters.length > 0) {
                    this.setState({
                        productos: data.results,
                        categorias: data.filters[0].values[0].path_from_root,
                        showResultado: true
                    });
                }
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            const search = parse(this.props.location.search.substr(1));
            this.setState({ search, productos: [], categorias: [], showResultado: false });


            BusquedaProductos.getProducts(search.search)
                .then((data) => {
                    console.log("RESPONSE");
                    if (data.filters.length > 0) {
                        this.setState({
                            productos: data.results,
                            categorias: data.filters[0].values[0].path_from_root,
                            showResultado: true
                        });
                    }
                })
        }
    }

    static getProducts(search) {
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=:" + search + "&limit=4";
        console.log("REQUEST");
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    render() {
        console.log("rendering");
        console.log(this.state.showResultado);
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
                                <div><ProductoNoEncontrado></ProductoNoEncontrado> </div>
                            )}
                    </div>}
            </div>
        );
    }


}

export default BusquedaProductos;