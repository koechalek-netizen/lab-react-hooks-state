import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Shopping Cart
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">{item.name} is in your cart.</span>
              <span className="cart-item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <span>Total Items:</span>
          <strong>{cartItems.length}</strong>
        </div>
      )}
    </div>
  )
}

export default Cart
