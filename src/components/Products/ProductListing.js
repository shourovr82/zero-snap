import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../../redux/actions/productsActions';

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
      .catch(err => console.error(err));
    dispatch(setProducts(res.data))
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <ProductComponent></ProductComponent>

    </div>
  );
};

export default ProductListing;