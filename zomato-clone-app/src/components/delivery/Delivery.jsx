import React from 'react';
import './Delivery.css';
import Filters from '../common/filters/Filters';
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';
import ExploreSection from '../common/exploreSection/ExploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters = [
  {
    id: 1,
    icon : <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating 4.0+"
  },
  {
    id: 3,
    title: "Pure Veg"
  },
  {
    id: 4,
    title: "Cuisines",
    icon : <i className="fi fi-rr-caret-down absolute-center icon-right"></i>
  }
  
]

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <>
    <div className='max-width' >
      <Filters filterList={deliveryFilters} />
    </div>
    <DeliveryCollections/>
    <TopBrands />
    <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Mumbai" />
    </>
  )
}

export default Delivery