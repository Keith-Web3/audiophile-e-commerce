import React from 'react'
import { nanoid } from 'nanoid'

import Product from '../shared/Product'
import x992 from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import x991 from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import x59 from '../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import '../../sass/pages/category.scss'

const HeadPhones: React.FC = function () {
  return (
    <>
      {productsInfo.map(el => (
        <Product {...el} key={nanoid()} />
      ))}
    </>
  )
}

const productsInfo = [
  {
    newProduct: true,
    img: x992,
    header: 'XX99 Mark II Headphones',
    desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    className: 'x992',
    link: 'x992-mark-two',
  },
  {
    img: x991,
    header: 'XX99 Mark I Headphones',
    desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    className: 'x991',
    link: 'x992-mark-one',
  },
  {
    img: x59,
    header: 'XX59 Headphones',
    desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    className: 'x59',
    link: 'x59-headphone',
  },
]

export default HeadPhones
