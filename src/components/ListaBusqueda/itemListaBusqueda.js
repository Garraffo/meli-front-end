import React from 'react';
import { Link } from 'react-router-dom';
import ShippingImg from './ic_shipping.png';
import './listabusqueda.css';

const ItemListaBusqueda = (props) => {
    console.log(props);
  return (
  <li className='list-group-item results-item'>
    <div className='item-image'>
        <div className='image-content'>
        <Link to={`/items/${props.product.id}`}>
            <img
            src={props.product.thumbnail}
            alt=''
            />
        </Link>
        </div>
    </div>
    <div className='item-info'>
        <div>
        <div className='item-price'>
            <Link to={`/items/${props.product.id}`}>
            <span>${props.product.price}</span>
            </Link>
            { props.product.shipping.free_shipping &&
            <img className='item-shipping' src={ShippingImg} alt='' />
            }
            <div className='item-address'>
            {props.product.address.state_name}
            </div>
        </div>
        <h2 className='item-description'>
            {props.product.title}
        </h2>
        <div className='item-quantity'>
            Disponibles: {props.product.available_quantity}
        </div>
        </div>
    </div>
    <hr></hr>
</li>
  );
};

export default ItemListaBusqueda;
