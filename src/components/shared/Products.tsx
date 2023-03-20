import React from 'react'

import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg'
import '../../sass/shared/products.scss'
import Button from '../UI/Button'

const Products: React.FC = function () {
  return (
    <div className="container products">
      <div className="product">
        <img src={headphones} alt="headphones" />
        <p>headphones</p>
        <Button className="button-three">
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
      <div className="product">
        <img src={speakers} alt="speakers" />
        <p>speakers</p>
        <Button className="button-three">
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
      <div className="product">
        <img src={earphones} alt="earphones" />
        <p>earphones</p>
        <Button className="button-three">
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
    </div>
  )
}

export default Products
