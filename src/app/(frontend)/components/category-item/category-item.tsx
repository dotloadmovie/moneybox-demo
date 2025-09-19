import React from 'react'
import styles from './category-item.module.css'

type CategoryItemProps = {
  children: React.ReactNode
}

const CategoryItem = ({ children }: CategoryItemProps) => {
  return (
    <article className={styles.categoryitem}>
      <div className={styles.categoryinner}>
        <h1 className={styles.categorytitle}>{children}</h1>
      </div>
    </article>
  )
}

export default CategoryItem
