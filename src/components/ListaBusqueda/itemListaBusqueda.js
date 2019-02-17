import React from 'react';
import { Link } from 'react-router-dom';
import ShippingImg from './ic_shipping.png';
import './listabusqueda.scss';

const ItemListaBusqueda = (props) => {





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
                <div className="precioBusqueda">
                    <span className="numeroPrecio">${Math.trunc(props.product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                
                    { props.product.shipping.free_shipping &&
                    <img src={ShippingImg} alt='' />
                    }
                </div>
                
                <div> {props.product.title} </div>

                {props.product.available_quantity === 1 ? (
                    <div>Único disponible!</div>
                ):(
                    <div> Disponibles: {props.product.available_quantity} </div>
                )}
            </div>
            <div className="address">
                {props.product.address.state_name}
            </div>
        </div>
    </Link>
    <hr className="lineaDivisoria"></hr>
</li>

  );
};

export default ItemListaBusqueda;
