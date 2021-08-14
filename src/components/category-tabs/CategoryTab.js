import React, {useState, useEffect} from 'react'
import Category from './Category';
import './CategoryTab.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ProductList from '../product-list/ProductList';


const CategoryTab = () => {

    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState(185);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch(`https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`);
        const data = await response.json();
        setCategories(data.category_list);
        console.log(data.category_list);
    }

    return (
        <div className="categoryTab">
            <ScrollMenu>
                {categories.map(category => (
                <div onClick={() => { setSelectCategory(category.category_id) }}>
                <Category
                    key={category.category_id}
                    category_name = {category.category_name}
                    category_image={category.category_image}
                />   
                </div>

            ))}
            </ScrollMenu>
            <ProductList categorytype={selectCategory} />
        </div>
    )
}

export default CategoryTab
