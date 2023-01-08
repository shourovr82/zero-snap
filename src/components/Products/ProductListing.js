import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const products = useSelector(state => state.allProducts.products)


  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map(product => <ProductComponent product={product} key={product.id} />)}
    </div>
  );
};

export default ProductListing;