import React from 'react'
import { CollectionType } from '../../data/data'
import Product from '../product/product'

import './collection.styles.scss'

interface CollectionProps {
  data: CollectionType
}

function Collection({ data }: CollectionProps): React.ReactElement {
  return (
    <div className="collection">
      <h1>{data.title}</h1>
      <div className="collection-block">
        {data.products.map((el) => (
          <Product key={el.id} data={el} collection={data.slug} />
        ))}
      </div>
    </div>
  )
}

export default Collection
