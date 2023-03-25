import React from 'react'
import '../../sass/pages/page_not_found.scss'
import Button from '../UI/Button'

const PageNotFound = function () {
  return (
    <div className="page-not-found">
      <p className="page-not-found__header">
        Hello lost wanderer. Your destination was not found.
      </p>
      <p>
        Click here to <Button className="button-one">Go home</Button>
      </p>
    </div>
  )
}

export default PageNotFound
