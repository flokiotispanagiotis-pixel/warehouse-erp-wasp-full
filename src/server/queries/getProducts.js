import prisma from '@wasp/db'

export default async function getProducts() {
  return await prisma.product.findMany({
    orderBy: { id: 'desc' }
  })
}
