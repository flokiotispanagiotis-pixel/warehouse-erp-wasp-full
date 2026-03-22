import { useQuery } from '@wasp/queries'
import getProducts from '@wasp/queries/getProducts'
import createProduct from '@wasp/actions/createProduct'
import deleteProduct from '@wasp/actions/deleteProduct'
import { useState } from 'react'

export default function Products() {
  const { data: products, isLoading } = useQuery(getProducts)
  const [form, setForm] = useState({ name: '', sku: '', price: 0 })

  if (isLoading) return <div>Loading...</div>

  const handleCreate = () => {
    createProduct(form)
    setForm({ name: '', sku: '', price: 0 })
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Products</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="SKU"
          value={form.sku}
          onChange={e => setForm({ ...form, sku: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: Number(e.target.value) })}
        />
        <button onClick={handleCreate}>Add Product</button>
      </div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => deleteProduct({ id: p.id })}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
