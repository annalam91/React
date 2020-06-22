import React from 'react';

function Products(props) {
        return (
            <div>
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-GB", { style: "currency", currency: "GBP" })} - {props.product.description}</p>
        </div>
            </div>
        )
    }
export default Products;
