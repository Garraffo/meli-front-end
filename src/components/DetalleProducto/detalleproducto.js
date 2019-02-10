import React from 'react'

const DetalleProducto = (props) => {
    console.log("props en Detalle Producto:");
    console.log(props);
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
                <img src={props.producto.thumbnail} alt=''/><br />
                {condicionProducto}
                {props.producto.sold_quantity} vendidos
                {props.producto.title}
                {props.producto.price}<br />
                {props.descripcion.plain_text}

            </div>
    );


}

export default DetalleProducto;