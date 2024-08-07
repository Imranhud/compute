import React from 'react';

function Footer() {
  return (
    <footer className="bg-red-800 w-full text-orange-300 py-4 mt-0">
      <div className="container sm:flex mx-auto sm:justify-center text-center sm:text-center">
        <span className='mr-3'>&copy; {new Date().getFullYear()} Imran Hud Sufyan</span>
        <span>Bayero University, Kano</span>
      </div>
    </footer>
  );
}

export default Footer;
