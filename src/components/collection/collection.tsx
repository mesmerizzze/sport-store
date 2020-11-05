import React from 'react'
import { CollectionType } from '../../data/data'
import Product from '../product/product'

interface CollectionProps {
  data: CollectionType
}

function Collection({ data }: CollectionProps): React.ReactElement {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.products.map((el) => (
        <Product key={el.id} data={el} />
      ))}
    </div>
  )
}

export default Collection
