import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_dull_icon.png'
const ProductDisplay = () => {
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={Product.image} alt="" />
    <img src={Product.image} alt="" />
    <img src={Product.image} alt="" />
    <img src={Product.image} alt="" />
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={Product.image} alt="" />
</div>
        </div>
        <div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
</div>
<div className="productdisplay-right-prices">
    <div className="productdisplay-right-price-old">${product.old_price}</div>
    <div className="productdisplay-right-price-new">${product.new_price}</div>
</div>
<div className="productdisplay-right-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint facilis unde reprehenderit modi sequi. Veniam earum velit iste non! Dolorem cupiditate, sunt quidem aliquam eos labore ea excepturi quas recusandae id eaque sequi possimus animi, placeat beatae, quis mollitia quisquam laborum nobis odio voluptate vero. In suscipit culpa incidunt reprehenderit facilis itaque a deleniti vitae ducimus ipsa soluta, quasi eos repellendus quibusdam iste aliquid reiciendis numquam ex impedit exercitationem. Libero quaerat eveniet, minima sit accusantium ullam quae enim iste quo ipsam tempore error, magnam, aspernatur non architecto possimus repellendus sint fuga! Hic quae amet eos nostrum obcaecati nulla ad.
</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-size">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
</div>
        </div>
    </div>
  )
}


export default ProductDisplay