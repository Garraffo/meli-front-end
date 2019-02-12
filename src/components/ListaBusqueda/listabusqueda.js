import React from 'react';
import ItemListaBusqueda from './itemListaBusqueda';


const ListaBusqueda = (props) => {
    let productos = [];

    productos = props.productos.map((product) => {
        return <ItemListaBusqueda key={product.id} product={product} />;
    });
    return (
    <div>
      <ol id='searchResults'>
        {productos}
      </ol>
    </div>
    );
};

export default ListaBusqueda;