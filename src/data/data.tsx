export interface CollectionType {
  id: number
  title: string
  slug: string
  pic: string
  products: Array<ProductType>
}

export interface ProductType {
  id: number
  price: number
  model: string
  pic: string
}

export const collections: Array<CollectionType> = [
  {
    id: 5,
    title: 'Equipment',
    slug: 'equipment',
    pic: 'equipment.jpg',
    products: [
      {
        id: 1,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 2,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 3,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 4,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 5,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Pants',
    slug: 'pants',
    pic: 'pants.jpg',
    products: [
      {
        id: 6,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 7,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 8,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 9,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 10,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'T-shirts',
    slug: 't-shirts',
    pic: 't-shirts.jpg',
    products: [
      {
        id: 11,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 12,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 13,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 14,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 15,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
    ],
  },
  {
    id: 1,
    title: 'Shoes',
    slug: 'shoes',
    pic: 'shoes.jpg',
    products: [
      {
        id: 16,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 17,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 18,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 19,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 20,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Shorts',
    slug: 'shorts',
    pic: 'shorts.jpg',
    products: [
      {
        id: 21,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 22,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 23,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 24,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
      {
        id: 25,
        price: 100,
        model: 'Nike',
        pic: 'pic1.jpg',
      },
    ],
  },
]
