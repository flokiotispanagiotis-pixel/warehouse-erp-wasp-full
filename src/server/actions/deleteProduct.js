import prisma from '@wasp/db'

export default async function deleteProduct({ id }) {
  return await prisma.product.delete({
    where: { id }
  })
}
