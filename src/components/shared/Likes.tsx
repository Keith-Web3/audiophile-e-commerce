import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../UI/Button'
import '../../sass/shared/likes.scss'

const Likes: React.FC<{ data: [string, string, string, string] }> = function ({
  data,
}) {
  return (
    <div className="product-likes">
      <img className={data[1]} src={data[0]} alt={data[2]} />
      <p>{data[2]}</p>
      <Link to={`/${data[3]}`}>
        <Button className="button-one">see product</Button>
      </Link>
    </div>
  )
}

export default Likes
