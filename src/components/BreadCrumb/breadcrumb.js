import React from 'react';
import './breadcrumb.css';

const BreadCrumbs = (props) => {
  let breadcrumbs = [];
  console.log("breadcrumbs props");
  console.log(props);
  breadcrumbs = props.categorias.map((nombreCategoria) =>{
    return <li key={nombreCategoria.id}>{nombreCategoria.name}</li>
  }); 
  return (
    <div>
    <ol>{breadcrumbs}</ol>
  </div>
  );
};

export default BreadCrumbs;