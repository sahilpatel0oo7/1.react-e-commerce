import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)

  const [showMore, setShowMore] = useState(false);
  const imagesToShow = showMore ? all_product : all_product.slice(0, 36);

  const handleExploreMore = () => {
    setShowMore(true);
  };


  return (
    <div className='shop-category'>
      <div className="shopcategory-banner">
      <img src={props.banner} alt="" />

      </div>
    <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
       {imagesToShow.map((item,i)=>{
        if (props.category===item.category){
return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
       })}
    </div>

    {!showMore && (
      <button type='button' onClick={handleExploreMore} className="shopcategory-loadmore">
  Explore More
</button>      
)}

    </div>
  )
}

export default ShopCategory