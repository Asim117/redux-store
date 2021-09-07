import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selecteProduct);
  const { id, title, description, image, price, category } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);

  return Object.keys(product).length === 0 ? (
    <div>...loading</div>
  ) : (
    <div className="ui items" key={id}>
      <div className="item">
        <div className="ui large image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta price">${price}</div>
          <div className="meta">{category}</div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
