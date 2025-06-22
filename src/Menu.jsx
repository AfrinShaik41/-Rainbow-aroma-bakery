import React from 'react'
import c from '../src/sc.png'
import r from '../src/ddooo.png'
import cc from '../src/cream.jpg'

const Menu = () => {
  return (
    <div className='bg-orange-200 py-10 px-4 min-h-screen mt-6'>
        <h1 className="text-6xl text-center text-orange-800 font-bold">Menu of Aroma</h1>
        <div className='bg-white rounded-2xl max-w-4xl mx-auto p-6'>
        <div className='flex flex-col md:flex-row items-center justify-center mt-5 gap-6'>
            <div>
                <h1 className="text-4xl  text-orange-800 font-bold">Cakes</h1>
                <p className='mt-2 text-2xl'>Cheese Cake - $20.00</p>
                <p>A cheese cake is very special in our bakery and is made with the finest ingredients.</p>
                <p className='mt-2 text-2xl'>Chocolate Cake - $25.00</p>
                <p>A rich chocolate cake made with premium cocoa and topped with ganache.</p>
                <p className='mt-2 text-2xl'>Red Velvet Cake - $20.00</p>
                <p>A classic red velvet cake with a hint of cocoa, topped with cream cheese frosting.</p>
                <p className='mt-2 text-2xl'>Vanilla Cake - $20.00</p>
                <p>A vanilla cake is very special in our bakery and is made with the finest ingredients.</p>
            </div>
            <div>
                <img src={c} alt="Cheese Cake" className="w-full md:w-80 h-auto md:h-80 rounded-lg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row  items-center justify-center mt-5 gap-6'>
            <div>
                <img src={r} alt="Cheese Cake" className="w-full md:w-80 h-auto md:h-80 rounded-lg"/>
            </div> 
            <div>
                <h1 className="text-4xl  text-orange-800 font-bold">DONUTS</h1>
                <p className='mt-2 text-2xl'>Glazed Donut - $2.00</p>
                <p>A classic glazed donut, light and fluffy with a sweet glaze.</p>
                <p className='mt-2 text-2xl'>Chocolate Frosted Donut - $2.50</p>
                <p>A rich chocolate-frosted donut, topped with sprinkles.</p>
                <p className='mt-2 text-2xl'>Boston Cream Donut - $3.00</p>
                <p>A donut filled with creamy custard and topped with chocolate glaze.</p>
                <p className='mt-2 text-2xl'>Jelly Filled Donut - $2.50</p>
                <p>A soft donut filled with sweet jelly and dusted with powdered sugar.</p>
            </div>
           
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center  gap-6'>
            <div>
                <h1 className="text-4xl  text-orange-800 font-bold">ICE CREAMS</h1>
                <p className='mt-2 text-2xl'>Vanilla Ice Cream - $3.00</p>
                <p>A classic vanilla ice cream made with real vanilla beans.</p>
                <p className='mt-2 text-2xl'>Chocolate Ice Cream - $3.50</p>
                <p>A rich chocolate ice cream made with premium cocoa.</p>
                <p className='mt-2 text-2xl'>Strawberry Ice Cream - $3.00</p>
                <p>A refreshing strawberry ice cream made with real strawberries.</p>
                <p className='mt-2 text-2xl'>Mint Chocolate Chip Ice Cream - $3.50</p>
                <p>A cool mint ice cream with delicious chocolate chips.</p>
            </div>
            <div>
                <img src={cc} alt="Cheese Cake" className="w-full md:w-80 h-auto md:h-80 rounded-lg"/>
            </div>
        </div>
        <button className='bg-orange-800 text-white px-6 py-2 rounded-lg mt-6 hover:bg-orange-700 transition duration-300 items-center justify-center flex mx-auto'>
            Order Now
        </button>
      </div>
    </div>
  )
}

export default Menu
