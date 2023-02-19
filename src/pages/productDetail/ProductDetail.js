import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="product img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title, wall poster</h1>
            <h3 className="price">₹ 549</h3>
            <p className="description">
              300 GSM Fine Art Matte Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae temporibus possimus doloribus facilis
              eligendi eius, repellat incidunt deleniti cumque nihil laudantium
              nobis cum quis reiciendis debitis neque repudiandae a qui!
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
