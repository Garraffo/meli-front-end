import React from 'react'

const DetalleProducto = (props) => {
    console.log("props en Detalle Producto:");
    console.log(props);

    return(
            <div>
                {props.producto.condition}
                {props.producto.sold_quantity}
                {props.producto.title}
                {props.producto.price}
            </div>
    );


}

export default DetalleProducto;