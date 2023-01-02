import React, { useState } from 'react';

const Navbar = () => {
  const [backgroundnav, setBackgroundNav] = useState(false);



  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundNav(true);
    }
    else {
      setBackgroundNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (

    // < !--Header -- >
    <>

      <header className={`${!backgroundnav ? 'bg-white' : 'backdrop-blur-2xl fixed w-full'} w-full z-10`}>
        {/* <!-- navbar and menu --> */}
        <nav className="shadow">

          <div className="flex justify-between items-center py-4 px-10 container mx-auto">

            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Zero Snap</h1>
            </div>

            <div>

              <div className="hover:cursor-pointer sm:hidden">
                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              </div>
              <div className="flex items-center">

                <ul className="sm:flex space-x-4 hidden items-center">
                  <li><a href="/" className="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
                  <li><a href="/" className="text-gray-700 hover:text-indigo-600 text-md ">About</a></li>
                  <li><a href="/" className="text-gray-700 hover:text-indigo-600 text-md ">Services</a></li>
                  <li><a href="/" className="text-gray-700 hover:text-indigo-600 text-md ">Products</a></li>
                  <li><a href="/" className="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
                </ul>

                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
                  <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>



    </>


  );
};

export default Navbar;