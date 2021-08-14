import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({categorytype}) => {

    const [productList, setProductList] = useState([]);


    useEffect(() => {
        const getData1 = async () => {
            const response = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categorytype}`);
            const data = await response.json();
            setProductList(data.products);
            console.log(data.products);
        }
    
        getData1();
    }, [categorytype]);


    return (
        <div>
            {productList.map(product =>(
                <Product
                    key={product.id}
                    product_image = {product.image_urls_webp.x200}
                    product_name={product.name}
                    product_weight={product.weight}
                    product_rating={product.rating}
                    product_weight_unit={product.weight_unit}
                    product_price={product.price}
                    product_final_price={product.final_price}
                    product_inStock={product.is_in_stock}
                />
            ))}
        </div>
    )
}

export default ProductList;
