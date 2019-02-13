import React from 'react';
import { parse } from 'qs';

const DetalleProducto = (props) => {
  
    let condicionProducto = '';
    switch(props.producto.condition){
        case 'new':
            condicionProducto = 'Nuevo';
            break;
        case 'used':
            condicionProducto = 'Usado';
            break;
        default:
            condicionProducto = '';
            break;
    }

    return(
            <div>
                {props.producto.pictures !== undefined && <div><img src={props.producto.pictures[0].url} alt=''/><br /> </div> }
                {condicionProducto}
                {props.producto.sold_quantity} vendidos
                {props.producto.title}
                ${props.producto.price}<br />
                {props.descripcion.plain_text}

            </div>
    );


}

export default DetalleProducto;