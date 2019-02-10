import React from 'react';
import { Link } from 'react-router-dom';
import ShippingImg from './ic_shipping.png';
import './listabusqueda.css';

const ItemListaBusqueda = (props) => {
  return (
  <li>
    <div>
        <div>
        <Link to={`/items/${props.product.id}`}>
            <img
            src={props.product.thumbnail}
            alt=''
            />
        </Link>
        </div>
    </div>
    <div>
        <div>
        <div>
            <Link to={`/items/${props.product.id}`}>
            <span>${props.product.price}</span>
            </Link>
            { props.product.shipping.free_shipping &&
            <img src={ShippingImg} alt='' />
            }
            <div>
            {props.product.address.state_name}
            </div>
        </div>
        <h2>
            {props.product.title}
        </h2>
        <div>
            Disponibles: {props.product.available_quantity}
        </div>
        </div>
    </div>
    <hr></hr>
</li>
  );
};

export default ItemListaBusqueda;
