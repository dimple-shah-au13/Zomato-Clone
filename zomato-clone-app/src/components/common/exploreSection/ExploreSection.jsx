import React from 'react';
import './ExploreSection.css';
import ExploreCard from './exploreCard/ExploreCard';

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width '>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'> 
        {list.map((restaurant) => {
            return <ExploreCard restaurant={restaurant} />
        })}

        </div>
        
    </div>
  )
}

export default ExploreSection;