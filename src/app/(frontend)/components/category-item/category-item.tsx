import React from 'react'
import styles from './category-item.module.css'
import ProductList from '../product-list/product-list'
import { Category, Product } from '@/payload-types'

type CategoryItemProps = {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  console.log(category.productsInCategory?.docs)
  return (
    <article className={styles.categoryitem}>
      <div className={styles.categoryinner}>
        <h1 className={styles.categorytitle}>{category.Name}</h1>
        {category.productsInCategory?.docs ? (
          <ProductList products={category.productsInCategory?.docs as Product[]} />
        ) : (
          <></>
        )}
      </div>
    </article>
  )
}

export default CategoryItem
