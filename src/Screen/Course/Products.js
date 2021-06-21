import React, { useContext } from 'react'
import { ProductsContext } from '../Course/ProductsContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);


    return (
        <div className="product-frame">
            <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}