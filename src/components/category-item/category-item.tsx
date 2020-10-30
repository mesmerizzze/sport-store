import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../../data/data'

import './menu-item.styles.scss'

function CategoryItem({ title, pic, slug }: CategoryType) {
  return (
    <div className="category-item">
      <Link
        to={`/${slug}`}
        className="background-picture"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${pic})` }}
      ></Link>
      <div className="content">
        <p className="title">{title}</p>
        <p>SHOP NOW</p>
      </div>
    </div>
  )
}

export default CategoryItem
