import React from 'react'
import { ProductType } from '../../data/data'

import './product.styles.scss'

interface ProductProps {
  data: ProductType
  collection: string
}

function Product({ data, collection }: ProductProps): React.ReactElement {
  return (
    <div className="product">
      <div className="pic">
        <img src={`${process.env.PUBLIC_URL}/images/${collection}/${data.pic}`} />
      </div>
      <div className="info">
        <p>{data.model}</p>
        <span>{data.price}</span>
      </div>
    </div>
  )
}

export default Product
