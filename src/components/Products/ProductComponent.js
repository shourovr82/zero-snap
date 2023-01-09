import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = ({ product }) => {
  const { title, description, id, image, category, rating, price } = product;


  return (
    <div className='rounded-lg' >
      <Link to={`/product/${id}`}>
        <div className='image rounded-lg'>
          <img className='h-96 w-full rounded-lg' src={image} alt={title} />
        </div>
        <div className='no-underline'>
          <div className=' no-underline text-white '>
            <h2>{title}</h2>
          </div>
          <div className='text-yellow-300 '>
            <p>$ {price}</p>
          </div>
          <div className=''>
            <p className='text-white'>{category}</p>
          </div>
        </div>
      </Link>

    </div >

  )
  // const products = useSelector(state => state.allProducts.products)

  // const renderList = products.map(product => {
  //   const { id, title, image, price, category } = product;
  //   return (
  //     <div className='four wide column' key={id}>
  //       <div className='ui link cards'>
  //         <div className=''>
  //           <div className='image'>
  //             <img src={image} alt={title} />
  //           </div>
  //           <div className='content'>
  //             <div className=' header'>{title}</div>
  //             <div className='meta price '>$ {price}</div>
  //             <div className='meta'>{category}</div>
  //           </div>
  //         </div>
  //       </div>

  //     </div>
  //   );
  // })



  // return <>{renderList}</>

};

export default ProductComponent;