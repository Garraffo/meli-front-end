import React from 'react';
import './listabusqueda.scss';

const ProductoNoEncontrado = (props) => {
    console.log("producto no encontrado");
    return (
    
        <div className="productoNoEncontrado">
            <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>

            <ul>
                <li>Revisá la ortografía de la palabra.</li>
                <li>Utilizá palabras más genéricas o menos palabras.</li>
            </ul>

        </div>);
}

export default ProductoNoEncontrado;