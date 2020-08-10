import React from "react";

const Categories = ({ children }) => (
  <div className="categories">
    <h3 className="categories__title">Mi lista</h3>
    {children}
  </div>
);

export default Categories;

/* 
{children}
Nos permite traer un elemento o los elementos que le vamos a insertar
por ejemplo: Puede ser un series de componentes o un componente se lo pasamos mediante props
*/
