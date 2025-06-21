import React from 'react'

const Customer = () => {
  return (
    <div className='bg-orange-200 py-10 px-4 min-h-screen mt-6'>
      <div>
        <h1 className='text-6xl font-bold mb-10 text-center text-orange-800'>Customer Reviews</h1>
      </div>

      {/* Horizontal scroll container */}
      <div className='overflow-x-auto'>
        <div className='flex flex-nowrap gap-6 px-2 scroll-smooth snap-x snap-mandatory'>
          {[
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
          ].map((customer, index) => (
            <div
              key={index}
              className='min-w-[250px] max-w-[250px] bg-white p-6 rounded shadow snap-start shrink-0'
            >
              <h2 className='text-lg font-semibold text-orange-800'>{customer.name}</h2>
              <p className='text-black'>"{customer.review}"</p>
              <p>{customer.stars}</p>
              <p>{customer.emoji}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer
