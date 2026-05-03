import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''} ${isInCart ? styles.inCart : ''}`}>
      <div className={styles.categoryBadge}>{product.category}</div>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.price}>{product.price}</p>
      <span className={`${styles.stockBadge} ${product.inStock ? styles.inStock : styles.outOfStockBadge}`}>
        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
      </span>
      <button
        data-testid={'product-' + product.id}
        className={`${styles.addBtn} ${isInCart ? styles.addedBtn : ''}`}
        onClick={() => onAddToCart(product)}
      >
        {isInCart ? '✓ Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
