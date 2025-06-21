import React from 'react';
import c  from '../src/cup.png';

const About = () => {
  return (
    <div className='bg-orange-200 py-10 px-4 min-h-screen mt-6'>
      <div className='flex items-center justify-center  -mt-10'>
      <img src={c} alt="Cupcake" className='w-32 h-32 object-contain' />
      <h1 className='text-6xl font-bold mb-10 text-center text-orange-800'>About Us</h1>
      </div>
      <p className='text-center text-lg mb-10 font-medium text-gray-700'>
        To spread happiness through the magic of baking, one bite at a time.
      </p>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto'>

        {/* Our Story */}
        <div className='bg-white shadow-lg rounded-2xl p-6'>
          <h2 className='text-2xl font-bold text-orange-700 mb-4'>Our Story</h2>
          <p className='text-gray-700 mb-4'>
            Welcome to Rainbow Aromas, where every bite tells a story! Founded in 2022, our bakery
            began with a simple dream: to fill our neighborhood with the comforting aroma of freshly
            baked delights. What started in a cozy kitchen has now grown into a beloved local spot
            for sweet treats and warm memories.
          </p>
          <button className='bg-black text-white px-4 py-2 rounded hover:bg-transparent hover:text-black  transition'>
            Visit Us
          </button>
        </div>

        {/* Our Passion */}
        <div className='bg-white shadow-lg rounded-2xl p-6'>
          <h2 className='text-2xl font-bold text-orange-700 mb-4'>Our Passion</h2>
          <p className='text-gray-700 mb-4'>
            Baking is not just our business – it’s our passion. We use only the finest ingredients –
            real butter, farm-fresh eggs, and organic flour – to craft baked goods that not only look
            beautiful but taste unforgettable.
          </p>
          <button className='bg-black text-white px-4 py-2 rounded hover:bg-transparent hover:text-black transition'>
            Visit Us
          </button>
        </div>

        {/* What We Offer */}
        <div className='bg-white shadow-lg rounded-2xl p-6'>
          <h2 className='text-2xl font-bold text-orange-700 mb-4'>What We Offer</h2>
          <p className='text-gray-700 mb-4'>
            From artisan breads and decadent cakes to custom cookies and seasonal pastries, we bake
            everything from scratch with love and creativity. Whether you need a daily treat or a
            custom cake for a special event, we’ve got you covered.
          </p>
          <button className='bg-black text-white px-4 py-2 rounded hover:bg-transparent hover:text-black transition'>
            Visit Us
          </button>
        </div>

        {/* Why Choose Us */}
        <div className='bg-white shadow-lg rounded-2xl p-6'>
          <h2 className='text-2xl font-bold text-orange-700 mb-4'>Why Choose Us</h2>
          <ul className='text-gray-700 mb-4 space-y-1'>
            <li>🌿 100% Natural Ingredients</li>
            <li>🎂 Custom Cakes & Event Catering</li>
            <li>❤️ Made with Love, Always</li>
            <li>👩‍🍳 Family-Owned and Locally Operated</li>
          </ul>
          <button className='bg-black text-white px-4 py-2 rounded hover:bg-transparent hover:text-black transition'>
            Visit Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
