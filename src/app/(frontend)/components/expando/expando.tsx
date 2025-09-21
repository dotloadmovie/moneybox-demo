import { Media, Product } from '@/payload-types'
import React, { useState, MouseEvent } from 'react'
import styles from './expando.module.css'

type ExpandoProps = {
  product: Product
}

const Expando = ({ product }: ExpandoProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
    setOpen(!open)
  }

  const logo = product.Logo as Media

  return (
    <div className={styles.expando} aria-expanded={open}>
      <a href="/" onClick={handleClick} className={styles.expandotoggle}>
        {product.Name}
      </a>
      {open ? (
        <div className={styles.expandocontent}>
          <img src={logo.url ? logo.url : ''} />
          <p>{product.Description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Expando
