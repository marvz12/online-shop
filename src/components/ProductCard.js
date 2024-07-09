import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductCard = ({ img, title, description, rating, price }) => {

    const ratingGen = (rating) => {
        let stars = []
        for(let i = 0; i < 5; i++) {
            stars.push(i < rating ? <AiFillStar key={i}/> :  <AiOutlineStar key={i}/>) 

        }
        return (
            <div className='flex gap-1 text-[20px] text-yellow-500'>
                {stars}
            </div>
        )
    }

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
        <div>
            <img className='w-full h-auto'
                src={img} width={200} height={300} alt={title}
            />
        </div>

        <div className='space-y-2 py-2'>
            <h2 className='text-brown font-medium uppercase'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{description}</p>
            <div>{ratingGen(rating)}</div>
        </div>

        <div className='font-bold flex gap-4'>$
            {price}.00<del className='text-gray-500 font-normal'> ${parseInt(price) + 50}.00</del>
        </div>
    </div>
  )
}

export default ProductCard