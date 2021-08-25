import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selecteProduct);
  const { id, title, description, image, price, category } = product;
  const dispatch = useDispatch();
  console.log("product id : ", productId);

  const fetchProduct = async () => {
    const product = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        return res.data;
      });
    dispatch(selectedProduct(product));
    console.log("product", product);
  };

  useEffect(() => {
    if(productId && productId!=="") fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return Object.keys(product).length === 0 ? (
    <div>...loading</div>
  ) : (
    <div class="ui items" key={id}>
      <div class="item">
        <div class="ui large image">
          <img src={image} alt={title} />
        </div>
        <div class="content">
          <div class="header">{title}</div>
          <div className="meta price">${price}</div>
          <div className="meta">{category}</div>
          <div class="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
