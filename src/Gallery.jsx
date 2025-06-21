import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c from '../src/cupcake.jpg';
import d from '../src/donut.jpg';
import i from '../src/ice.jpg';
import m from '../src/milk.jpg';
import p from '../src/puffs.jpg';
import a from '../src/a1.jpg';
import cc from '../src/cake1.jpeg';
import ca from '../src/cookie.jpg';
import coo from '../src/candy.jpg';
import s from '../src/sannd.jpg';
import b from '../src/bread.jpg';
import w from '../src/wich.jpg';




const Menu = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className='bg-orange-200 py-10 px-4 min-h-screen mt-6'>
       
              <h1 className="text-6xl text-center text-orange-800 font-bold">Gallery</h1>
              
        <Slider {...settings}>
          {data.map(item => (
            <div key={item.name}>
              <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl py-6 w-90 h-100  mt-10 mb-6'>
                <img src={item.img} alt={item.name}  className='h-50 w-50 object-cover mb-4'/>
                <h3 className='text-3xl text-orange-800 font-bold'>{item.name}</h3>
                <p className='text-center px-4 mt-4'>{item.description}</p>
                <span className="mt-2 font-semibold text-2xl">{item.price}</span>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}
const data=[
    {
        img:c,
        name:"cupcake",
        price:"$5.00",
        description:"A delicious cupcake with a rich chocolate flavor, topped with creamy frosting and sprinkles."

    },
    {
        img:d,
        name:"donut",
        price:"$3.00",
        description:"A fluffy donut with a sweet glaze and colorful sprinkles."
    },
    {
        img:i,
        name:"ice cream",
        price:"$4.00",
        description:"A scoop of creamy ice cream in a crispy cone, available in various flavors."
    },
    {
        img:m,
        name:"milkshake",
        price:"$6.00",
        description:"A thick and creamy milkshake made with real ice cream and topped with whipped cream."
    },
    {
        img:p,
        name:"puffs",
        price:"$2.50",
        description:"Light and airy pastry puffs filled with sweet cream or savory fillings."
    },
    {
        img:a,
        name:"lollipops",
        price:"$3.50",
        description:"A colorful lollipop with a fruity flavor, perfect for a sweet treat."
    },
    {
        img:cc,
        name:"cake",
        price:"$20.00",
        description:"A rich and moist cake, perfect for celebrations, available in various flavors."
    },
    {
        img:ca,
        name:"cookies",
        price:"$2.00",
        description:"Freshly baked cookies with a crispy edge and chewy center, available in chocolate chip and oatmeal raisin."
    },
    {
        img:coo,
        name:"candy",
        price:"$1.50",
        description:"Assorted candies with fruity flavors, perfect for a quick sugar fix."
    },
    {
        img:s,
        name:"sandwiches",
        price:"$5.50",
        description:"Freshly made sandwiches with a variety of fillings, served on crusty bread."
    },
    {
        img:b,
        name:"bread",
        price:"$3.00",
        description:"Freshly baked bread with a golden crust and soft interior, perfect for sandwiches or toast."
    },
    {
        img:w,
        name:"sandwich",
        price:"$4.50",
        description:"Crispy sandwiches served with syrup and fresh veggies, a perfect breakfast treat."
    }
]
export default Menu
