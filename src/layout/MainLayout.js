import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';

const MainLayout = () => {
  const [topto, setTopto] = useState(false);

  const addspace = () => {
    if (window.scrollY >= 50) {
      setTopto(true);
    }
    else {
      setTopto(false);
    }
  }
  window.addEventListener('scroll', addspace);
  console.log(topto);
  return (
    <div>
      <Navbar></Navbar>
      <main>


        {/* <!-- section hero --> */}
        <section>
          <div className="bg-gray-100 sm:grid grid-cols-5  grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

            <div className='col-span-1  sticky top-20 left-0'>

              <div>
                <div className="bg-white py-3  px-4 rounded-lg flex justify-around items-center ">
                  <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                  <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg></span>
                </div>
              </div>
              <div className="bg-white  rounded-md sticky">
                <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Service</h1>
                <div className="bg-white rounded-md list-none  text-center ">
                  <li className="py-3 border-b-2"><a href="/" className="list-none  hover:text-indigo-600">Products</a></li>
                  <li className="py-3 border-b-2"><a href="/" className="list-none  hover:text-indigo-600">Models</a></li>
                  <li className="py-3 border-b-2"><a href="/" className="list-none  hover:text-indigo-600">Pricing</a></li>
                  <li className="py-3 border-b-2"><a href="/" className="list-none  hover:text-indigo-600">Hire</a></li>
                  <li className="py-3 "><a href="/" className="list-none border-b-2 hover:text-indigo-600">Business</a></li>
                </div>
              </div>
            </div>


            <div className="col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
              <div className="ml-20 w-80">
                {/* <h2 className="text-white text-4xl">Adsla</h2>
                <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iure repellendus possimus, architecto quae quam consectetur nulla facilis dolorum cum illo temporibus at magni sequi non veniam dicta, odio vero?</p>

                <a href="/" className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</a> */}

                <Outlet></Outlet>

              </div>

            </div>
          </div>

        </section>

      </main>

    </div>
  );
};

export default MainLayout;






