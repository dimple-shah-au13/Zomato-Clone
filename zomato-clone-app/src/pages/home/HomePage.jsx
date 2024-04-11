import React, { useState } from 'react'
import Header from '../../components/common/header/Header';
import TabOptions from '../../components/common/tabOptions/TabOptions';
import Footer from '../../components/common/footer/Footer';
import Delivery from '../../components/delivery/Delivery';
import DiningOut from '../../components/diningOut/DiningOut';
import NightLife from '../../components/nightLife/NightLife';


const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <>
    <Header />
    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
    {getCorrectScreen(activeTab)}
    <Footer />
    
    </>

  )

}

const getCorrectScreen = (tab) => {
  switch(tab) {
    case "Delivery" :
      return <Delivery /> ;
    case "Dining Out" :
      return <DiningOut />;
    case "Night Life" :
      return <NightLife />;
    default :
    return <div>Delivery</div>
  }
}

export default HomePage