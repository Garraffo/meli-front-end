import React from 'react';
import { Link } from 'react-router-dom';
import ShippingImg from './ic_shipping.png';
import './listabusqueda.scss';

const ItemListaBusqueda = (props) => {
    let disponibles = '';
    if(props.product.available_quantity == '1'){
        disponibles = 'Único disponible!'
    }else{
        disponibles = props.product.available_quantity;
    }


  return (
  <li className="itemsProductos">
    <Link to={`/items/${props.product.id}`}>
        <div className="containerItemBusqueda">
            <div>
                <img
                src={props.product.thumbnail}
                alt=''
                className="thumbnailProducto"/>
            </div>
            <div className="precioTituloDisponibles">
                <div className="precio">
                    <span className="numeroPrecio">${props.product.price}</span>
                
                    { props.product.shipping.free_shipping &&
                    <img src={ShippingImg} alt='' />
                    }
                </div>
                <div> {props.product.title} </div>
                <div> Disponibles: {disponibles} </div>
            </div>
            <div className="address">
                {props.product.address.state_name}
            </div>
        </div>
    </Link>
</li>
  );
};

export default ItemListaBusqueda;
