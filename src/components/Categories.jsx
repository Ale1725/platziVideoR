import React from "react";
import "../assets/styles/components/Categories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = ({ children, title }) => (
  <div className="categories">
    <span className="categories_icons">
      <FontAwesomeIcon icon="user" />
    </span>
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;

/* 
{children}
Nos permite traer un elemento o los elementos que le vamos a insertar
por ejemplo: Puede ser un series de componentes o un componente se lo pasamos mediante props
*/
