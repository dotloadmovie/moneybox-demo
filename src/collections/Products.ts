import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
    },
     {
      name: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'Category',
      type: 'relationship',
      relationTo: 'categories'
    },
     {
      name: 'Logo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
     {
      name: 'Link',
      type: 'text',
      required: true,
    },
  ],
}
