import React from 'react'
import Catalogue from '../../components/catalogue/catalogue'
import { collections as collectionsData } from '../../data/data'

import './homepage.styles.scss'

function Homepage() {
  return (
    <div className="homepage">
      <Catalogue data={collectionsData} />
    </div>
  )
}

export default Homepage
