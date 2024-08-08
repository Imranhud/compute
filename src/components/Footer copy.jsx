import React from 'react';

function Footer() {
  return (
    <footer className=" w-full text-white-300 py-4 mt-0" id="footer">
      <div className="container sm:flex mx-auto sm:justify-center text-center sm:text-center">
        <span className='mr-3'>&copy; {new Date().getFullYear()} Compute</span>
        <span>Gloabl Program</span>
      </div>
    </footer>
  );
}

export default Footer;
