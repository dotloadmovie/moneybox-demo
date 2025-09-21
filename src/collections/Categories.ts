import type { CollectionConfig, Field} from 'payload'


const ProductsInCategory:Field = {
    name: 'productsInCategory',
    type: 'join',
    collection: 'products',
    on: 'Category',
    maxDepth: 4
}

export const Categories: CollectionConfig = {
  slug: 'categories',
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
    ProductsInCategory
  ],
}
