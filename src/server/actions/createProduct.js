import prisma from '@wasp/db'

export default async function createProduct(args) {
  return await prisma.product.create({
    data: {
      name: args.name,
      sku: args.sku,
      price: args.price,
      stock: 0
    }
  })
}
