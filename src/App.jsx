import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const alreadyInCart = prev.find((item) => item.id === product.id)
      if (alreadyInCart) return prev
      return [...prev, product]
    })
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={`app-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <div className="app-container">
        <header className="app-header">
          <div className="header-top">
            <div className="brand">
              <span className="brand-icon">🛒</span>
              <div>
                <h1 className="brand-name">FreshMart</h1>
                <p className="brand-tagline">Your daily grocery companion</p>
              </div>
            </div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </header>

        <main className="app-main">
          <div className="shop-section">
            <div className="filter-bar">
              <span className="filter-label">Filter by Category:</span>
              <div className="select-wrapper">
                <select
                  className="category-select"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="all">All Products</option>
                  <option value="Fruits">🍎 Fruits</option>
                  <option value="Dairy">🥛 Dairy</option>
                </select>
              </div>
            </div>

            <ProductList
              category={category}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          </div>

          <aside className="cart-section">
            <Cart cartItems={cartItems} />
          </aside>
        </main>
      </div>
    </div>
  )
}

export default App
