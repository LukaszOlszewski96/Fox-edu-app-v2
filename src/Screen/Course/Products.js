import React, { useContext } from 'react'
import { ProductsContext } from '../Course/ProductsContext'
import './Product.css';
import {db, auth} from '../../Firebase/Firebase'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    let courseID = null;

    const addCourse = () => {
        var currentUser =  auth().currentUser.uid;
        courseID = document.getElementById("button-course").value;

    
        db.collection('user').doc(currentUser).collection('courses-user').doc(courseID).set({
            dane:  courseID
        }).then(() => {
            alert("Course has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        });
    };

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
                        <button onClick={addCourse} value="6DtbZCDRDgAzPPCZGlET">Dodaj</button>
                    </div>
                ))}
            </div>
        </div>
    )
}