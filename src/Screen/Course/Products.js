import React, { useContext } from 'react'
import { ProductsContext } from '../Course/ProductsContext'
import './Product.css';

export const Products = () => {

    const { products } = useContext(ProductsContext);


    return (
        <div className="product-frame">
            <h1 className="title-products">Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>loading</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            Tytuł: {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Cena: {product.ProductPrice}.00
                    </div>
                        <button>Dodaj do koszyka</button>
                    </div>
                ))}
            </div>
        </div>
    )
}