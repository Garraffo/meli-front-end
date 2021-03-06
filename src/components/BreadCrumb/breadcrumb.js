import React from 'react';
import './breadcrumb.scss';

const BreadCrumbs = (props) => {
  let breadcrumbs = [];
  breadcrumbs = props.categorias.map((nombreCategoria) => {
    return <li className='breadcrumb-item' key={nombreCategoria.id}>{nombreCategoria.name}</li>
  });
  return (
    <div className='container'>
      <ol className='breadcrumb'>{breadcrumbs}</ol>
    </div>
  );
};

export default BreadCrumbs;