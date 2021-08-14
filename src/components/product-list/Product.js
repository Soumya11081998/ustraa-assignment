import React from 'react';
import AddButton from './AddButton';
import OutOfStockButton from './OutOfStockButton';
import './Product.css';

const Product = ({product_image, product_name, product_rating, product_final_price, product_price, product_weight, product_weight_unit, product_inStock}) => {

    return (
        <div className="product">
            <img src={product_image} alt="product_img" />
            <div className="details" >
                <div className="top">
                    <p className="name">{product_name}</p>
                    <p className="rate">{product_rating}&#9733;</p>
                </div>
                <p>({product_weight} <span>{product_weight_unit}</span>)</p>
                <div className="price">
                    <p className="newPrice"><strong><span>&#8377;</span> {product_final_price}</strong></p>
                    <p className="oldPrice"><span>&#8377;</span> {product_price}</p>
                </div>
                {
                    {product_inStock}?
                        (<AddButton />)
                        :
                        (<OutOfStockButton />)
                }
            </div>
        </div>
    )
}

export default Product;
