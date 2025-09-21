import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Header from './components/header/header'
import Carousel from './components/carousel/carousel'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: categories } = await payload.find({ collection: 'categories' })

  return (
    <div className="core">
      <Header />

      <h1 className="page-heading">Explore accounts</h1>

      <div className="content">
        <Carousel items={categories} />
      </div>
    </div>
  )
}
