import React from 'react';
import './Category.css';


const Category = ({category_name, category_image }) => {

  return (
    <div>
      <div className="category" style={{ background : `url(${ category_image })` }} >
        <h1>{category_name}</h1>
      </div>
    </div>
  );
}

export default Category
