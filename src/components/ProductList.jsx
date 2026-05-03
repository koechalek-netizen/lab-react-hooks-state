import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
]

const ProductList = ({ category, onAddToCart, cartItems }) => {
  const filtered =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div className="product-list">
      <h2 className="section-title">Available Products</h2>
      {filtered.length === 0 ? (
        <p className="no-products">No products available in this category.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isInCart={cartItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
