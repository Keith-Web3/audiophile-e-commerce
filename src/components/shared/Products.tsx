import React from 'react'

import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg'
import '../../sass/shared/products.scss'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'

const Products: React.FC = function () {
  const navigate = useNavigate()

  return (
    <div className="container products">
      <div className="product__main">
        <img src={headphones} alt="headphones" />
        <p>headphones</p>
        <Button
          onClick={() => navigate('/headphones')}
          className="button-three"
        >
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
      <div className="product__main">
        <img src={speakers} alt="speakers" />
        <p>speakers</p>
        <Button onClick={() => navigate('/speakers')} className="button-three">
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
      <div className="product__main">
        <img src={earphones} alt="earphones" />
        <p>earphones</p>
        <Button onClick={() => navigate('/earphones')} className="button-three">
          shop
          <img src={arrowRight} alt="shop" />
        </Button>
      </div>
    </div>
  )
}

export default Products
