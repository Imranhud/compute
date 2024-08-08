import React from 'react';

function Footer() {
  return (
    <footer className=" text-white py-4 mt-0">
      <div className="container sm:flex mx-auto sm:justify-center text-center sm:text-center">
        <p className='mr-3'>&copy; {new Date().getFullYear()} Imran Hud Sufyan</p>
        <p>Bayero , Kano</p>
      </div>
    </footer>
  );
}

export default Footer;
