import React from 'react'
import { CollectionType } from '../../data/data'
import CatalogueItem from '../catalogue-item/catalogue-item'

import './catalogue.styles.scss'

interface CatalogueProps {
  data: Array<CollectionType>
}

function Catalogue({ data }: CatalogueProps): React.ReactElement {
  console.log('data from catalogue', data)
  return (
    <div className="catalogue">
      {data.map((el) => {
        return <CatalogueItem key={el.id} data={el} />
      })}
    </div>
  )
}

export default Catalogue
