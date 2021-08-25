import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`}>
        <div className="five wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img style={{ height: "300px" }} src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return renderList;
};

export default ProductComponent;
