import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../data/data'

import './product.styles.scss'

interface ProductProps {
  data: ProductType
}

function Product({ data }: ProductProps): React.ReactElement {
  return (
    <div className="product">
      <Link to="/">Link</Link>
      <p>{data.model}</p>
    </div>
  )
}

export default Product
