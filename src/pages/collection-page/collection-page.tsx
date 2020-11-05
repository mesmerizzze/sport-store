import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Collection from '../../components/collection/collection'
import { collections } from '../../data/data'

function CollectionPage() {
  const { collection } = useParams<{ collection: string }>()
  const findCollectionData = () => collections.find((el) => el.slug === collection)
  const data = useMemo(findCollectionData, [collection, findCollectionData])

  return <div className="collection-page">{!data ? <div>No data</div> : <Collection data={data} />}</div>
}

export default CollectionPage
