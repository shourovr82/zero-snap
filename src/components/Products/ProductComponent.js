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
              <div className=''>{title}</div>
              <div className=''>$ {price}</div>
              <div className=''>{category}</div>
            </div>
          </div>
        </div>

      </div>
    );
  })

  return <>{renderList}</>

};

export default ProductComponent;