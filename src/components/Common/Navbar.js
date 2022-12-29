import React from 'react';

const Navbar = () => {
  return (



    <div className='ui fixed menu'>

      <h2 className='ui right'>ZERO SNAP</h2>

      <div class="ui secondary right menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Messages
        </a>
        <a class="item">
          Friends
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;