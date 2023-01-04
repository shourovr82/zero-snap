import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products);
  const renderList = products.map(product => {
    const { id, title, image, price, category } = product;
    return (
      <div className=''>
        <div className=''>
          <div className='bg-red-900'>
            <div className='image'>
              <img src={image} alt={title} />
            </div>
            <div className=''>
              <div className=' text-2xl'>{title}</div>
              <div className='text-yellow-400'>$ {price}</div>
              <div className='text-green-900'>{category}</div>
            </div>
          </div>
        </div>

      </div>
    );
  })

  return <>{renderList}</>

};

export default ProductComponent;