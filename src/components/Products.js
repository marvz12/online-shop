import React from 'react'
import ProductCard from './ProductCard'

const productData = [
  {
    img: "/cap.jpg",
    title: "Cap",
    price: "20",
    description: "cool cap",
    rating: 3,
  },
  {
    img: "/pants.jpg",
    title: "Cargo Pants",
    price: "40",
    description: "trendy cargo pants",
    rating: 4,
  },
  {
    img: "/shirt.jpg",
    title: "Cool Shirt",
    price: "10",
    description: "Cool and trendy shirt",
    rating: 5,
  },
  {
    img: "/shoes.jpg",
    title: "Black Shoes",
    price: "40",
    description: "New trendy shoes",
    rating: 3,
  },
  {
    img: "/watch.jpg",
    title: "Golden Watch",
    price: "100",
    description: "New trendy watch for men",
    rating: 5,
  },
]

const Products = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productData.map((item, index) => {
            return (
              <ProductCard 
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                description={item.description}
                rating={item.rating}

              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products