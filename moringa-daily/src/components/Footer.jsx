import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-4 px-8 md:px-12 text-white flex flex-wrap md:justify-between items-center gap-8 md:gap-0'>
      <div>
        <h5 className='text-amber-400'>Feel free to email us at:</h5>
        <a href='mailto://' className='hover:underline'>
          admin@moringaschooldaily.com
        </a>
      </div>
      <div>
        <div className='flex gap-3'>
          <a href='https://facebook.com/'>
            <i className='fa fa-facebook-official' aria-hidden='true'></i>
          </a>
          <a href='https://twitter.com'>
            <i className='fa fa-twitter' aria-hidden='true'></i>
          </a>
          <a href='mailto:'>
            <i className='fa fa-envelope-o' aria-hidden='true'></i>
          </a>
          <a href='http://'>
            <i className='fa fa-instagram' aria-hidden='true'></i>
          </a>
        </div>
        <h6 className='text-sm pt-2'>Unsubscribe from mailing list</h6>
      </div>
    </footer>
  );
};

export default Footer;
