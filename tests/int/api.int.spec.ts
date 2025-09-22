import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('fetches users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
  })

  it('fetches products', async () => {
    const products = await payload.find({
      collection: 'products',
    })
    expect(products).toBeDefined()
  })

  it('fetches categories', async () => {
    const categories = await payload.find({
      collection: 'categories',
    })
    expect(categories).toBeDefined()
  })
})
