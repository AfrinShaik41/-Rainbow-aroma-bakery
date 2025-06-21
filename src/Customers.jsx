
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c from '../src/cake.png'

const Customers = () => {
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
  };
  return (
    <div className='bg-orange-200 py-10 px-4 min-h-screen mt-6'>
      <div className='flex items-center justify-center  -mt-10'>
      <img src={c} alt="Cake" className="h-32 w-32 object-contain" />
      <h1 className="text-4xl text-center text-orange-800 font-bold">Customer Review</h1>
      </div>
    <div className='w-120  m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
        {data.map((d)=>(
          <div>
          <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl py-6 mb-6'>
            <h3 className='text-lg font-semibold text-orange-800'>{d.name}</h3>
            <p className='text-black'>{d.review}</p>
            <p>{d.stars}</p>
            <p>{d.emoji}</p>
          </div>
          </div>
        ))}
        </Slider>
      </div>
      </div>
    </div>
  )
}
const data=[
  {
              name: "John Doe",
              review: "Great service and delicious pastries!",
              stars: "⭐⭐⭐⭐⭐",
              emoji: "😃"
            },
            {
              name: "Jane Smith",
              review: "I love the cozy atmosphere and friendly staff.",
              stars: "⭐⭐⭐⭐⭐",
              emoji: "😃"
            },
            {
              name: "Alice Johnson",
              review: "The best bakery in town! Highly recommend.",
              stars: "⭐⭐⭐⭐☆",
              emoji: "🙂"
            },
            {
              name: "Bob Brown",
              review: "Amazing cupcakes! Will definitely come back.",
              stars: "⭐⭐⭐⭐⭐",
              emoji: "😃"
            },
            {
              name: "Emily White",
              review: "A delightful experience every time I visit.",
              stars: "⭐⭐⭐⭐⭐",
              emoji: "😃"
            },
            {
              name: "Michael Green",
              review: "Their pastries are a work of art!",
              stars: "⭐⭐⭐⭐⭐",
              emoji: "😃"
            }
          ]

export default Customers

