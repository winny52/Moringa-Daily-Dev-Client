import React from "react";

const FeaturedView = () => {
  return (
    <div className='bg-default-green grid grid-cols-2'>
      <div className='col-span-1'>
        <img src='/assets/images/moringa-bg.jpeg' alt='featured article' />
      </div>
      <div className='col-span-1 flex flex-col p-12 relative'>
        <h6 className='text-default-gold text-xl uppercase italic'>
          Top Story
        </h6>
        <h2 className='text-default-gold text-2xl py-3 font-semibold'>
          FT05 Students to Graduate
        </h2>
        <h4 className='text-white uppercase text-3xl'>
          Our Highest Ranking <br /> Class In So Far
        </h4>
        <hr className='w-12 h-1 bg-default-gold rounded-full border-none mt-3' />
        <p className='text-gray-400 text-md py-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          fugiat. Sequi eveniet dignissimos suscipit praesentium nisi voluptate
          consectetur, hic at accusamus a ad rerum aperiam nulla qui ratione
          nemo officiis.
        </p>
        <h4 className='text-gray-400 uppercase text-lg cursor-pointer'>
          <span className='text-default-gold'>Read</span> More
        </h4>
        {/* <p className='text-gray-600 text-md absolute top-0 right-0 flex flex-col items-end transform translate-y-1/2'>
          Published: <br /> 30th Nov <br /> 2023
        </p> */}
      </div>
    </div>
  );
};

export default FeaturedView;
