import React, { useState } from 'react'
import Banner from '../components/Banner'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';


export const Home = () => {
  const [category,setCategory] = useState('All');
  return (
      <>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      </>
  )
}
export default Home