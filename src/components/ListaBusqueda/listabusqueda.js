import React from 'react';
import ItemListaBusqueda from './itemListaBusqueda';

const ListaBusqueda = (props) => {
    let productos = [];

    productos = props.productos.map((product) => {
        return <ItemListaBusqueda key={product.id} product={product} />;
    });
    return (
    <div className='justify-content-center'>
      <ol id='searchResults' className='list-group container search-results'>
        {productos}
      </ol>
    </div>
    );
};

export default ListaBusqueda;