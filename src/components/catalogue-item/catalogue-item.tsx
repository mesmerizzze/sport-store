import React from 'react'
import { Link } from 'react-router-dom'
import { CollectionType } from '../../data/data'

import './catalogue-item.styles.scss'

interface CatalogueItemProps {
  data: CollectionType
}

function CatalogueItem({ data }: CatalogueItemProps): React.ReactElement {
  return (
    <div className="catalogue-item">
      <div
        className="background-picture"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${data.pic})` }}
      />
      <div className="content">
        <p className="title">{data.title}</p>
        <p>SHOP NOW</p>
      </div>
      <Link to={`/${data.slug}`} className="link" />
    </div>
  )
}

export default CatalogueItem
