import { Product } from '@/payload-types'
import React from 'react'
import Expando from '../expando/expando'

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => {
        return <Expando key={product.id} product={product} />
      })}
    </div>
  )
}

export default ProductList
