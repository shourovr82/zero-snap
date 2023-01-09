import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/productsActions';

const ProductDetails = () => {
  const [productCount, setProductCount] = useState(0);
  const { productId } = useParams();
  let product = useSelector(state => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch(error => console.log(error))

    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])


  return (
    <div class=" p-2 ">
      <div class="grid grid-cols-2 gap-5 ">
        <img src={image} alt="" class="rounded-2xl   shadow-2xl  w-full h-[550px] " />
        <div class="bg-white shadow-2xl rounded-2xl">
          <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">{title}</h2>
          <div class="w-5/6 m-auto">
            <p class="text-center text-gray-500 pt-5">{description}</p>
          </div>
          <div class="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
            <div class="col-span-1">
              <img class="w-15 lg:w-12 rounded-lg" src={image} alt="music icon" />
            </div>
            <div class="col-span-2 pt-1">
              <p class="text-gray-800 font-bold lg:text-sm">Price</p>
              <p class="text-gray-500 text-sm">$ {price}</p>
            </div>
            <div class="pt-2">
              <button class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Quantity</button>

            </div>
          </div>
          <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
            <button classs="lg:text-sm text-lg font-bold">Proceed to Payment</button>
          </div>
          <div class="text-center m-auto mt-6 w-full h-16">
            <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;