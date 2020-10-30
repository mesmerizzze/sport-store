import React from 'react'
import CategoryItem from '../category-item/category-item'
import { categoriesData } from '../../data/data'

import './categories.styles.scss'

function Categories(props: unknown) {
  console.log('props', props)
  return (
    <div className="categories">
      {categoriesData.map((el) => {
        return <CategoryItem key={el.id} {...el} />
      })}
    </div>
  )
}

export default Categories
