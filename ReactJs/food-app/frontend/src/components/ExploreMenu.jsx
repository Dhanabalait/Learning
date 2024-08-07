import React from 'react'
import { menu_list } from '../assets/assets'

export const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
        <div className="container">
            <h2>Explore Our Menu</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt optio ullam non, veniam aliquid qui, officia neque nobis sequi.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
export default ExploreMenu