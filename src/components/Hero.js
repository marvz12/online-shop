'use client';

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slidePics= [
        {
            id: 0,
            img: "/jacket1.jpg",
            title: "Trending Jacket",
            mainTitle: "MEN'S COOL JACKET",
            price : "$100",

        },
        {
            id: 1,
            img: "/jacket2.jpg",
            title: "Trending Jacket",
            mainTitle: "MEN'S COOL JACKET",
            price : "$120",

        },
        {
            id: 2,
            img: "/jacket3.jpg",
            title: "Trending Jacket",
            mainTitle: "MEN'S COOL JACKET",
            price : "$110",

        },
        {
            id: 3,
            img: "/jacket4.png",
            title: "Trending Jacket",
            mainTitle: "MEN'S COOL JACKET",
            price : "$110",

        }
    ]

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slidePics.map((item) => {
                    return (
                        <Slide 
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}

                        />
                    )
                })}

            </Slider>
        </div>
    </div>
  )
}

export default Hero