import React from 'react';
import './TopBrands.css';
import Slider from 'react-slick';
import PreviousArrow from '../../common/corousel/PreviousArrow';
import NextArrow from '../../common/corousel/NextArrow';

const topBrandsList = [
    {
        id: 1,
        time: "32 min",
        title: "Domino's Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png"
    },
    {
        id: 2,
        time: "36 min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png"
    }, 
    {
        id: 3,
        time: "27 min",
        title: "Burger King",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png"
    },
    {
        id: 4,
        time: "26 min",
        title: "La Pino'z Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },
    {
        id: 5,
        time: "28 min",
        title: "Mr. Brown Bakery",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png"
    },
    {
        id: 6,
        time: "28 min",
        title: "Pizza Hut",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id: 7,
        time: "32 min",
        title: "Domino's Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png"
    },
    {
        id: 8,
        time: "36 min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png"
    }, 
    {
        id: 9,
        time: "27 min",
        title: "Burger King",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png"
    },
    {
        id: 10,
        time: "26 min",
        title: "La Pino'z Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },
    {
        id: 11,
        time: "28 min",
        title: "Mr. Brown Bakery",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png"
    },
    {
        id: 12,
        time: "28 min",
        title: "Pizza Hut",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
   

]


const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />         , 
    prevArrow: <PreviousArrow />
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        
        <Slider {...settings}>
            {topBrandsList.map((brand) => {
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.title}/>
                    </div>
                    <div className='top-brands-title'>{brand.title} </div>
                    <div className='top-brands-time'>{brand.time} </div>
                </div>
            })}

        </Slider>

    </div>
  )
}

export default TopBrands;