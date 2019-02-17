import React from 'react';
import './detalleproducto.scss'

const DetalleProducto = (props) => {

    let condicionProducto = '';
    switch (props.producto.condition) {
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


    return (
        <div className="containerDetalleProducto">
            {props.producto.pictures !== undefined && 
            <div>
                <img src={props.producto.pictures[0].url} className="fotoProducto" alt='' /><br /> 
            </div>}

            <div className="infoProducto">  
                <div className="condicion_cantidad">
                    {condicionProducto}{props.producto.sold_quantity !== 0 && ` - ${props.producto.sold_quantity} vendidos`}
                </div>
                    
                <div className="tituloProducto">{props.producto.title}</div>
                <div className="precio">${Math.trunc(props.producto.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className="descripcion"> 
                <h2>Descripción del producto</h2>
                <div className="textoDescripcion">
                    {props.descripcion.plain_text}
                </div>
            </div>
        </div>
    );


}

export default DetalleProducto;