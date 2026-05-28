import { useState } from 'react'

import '../styles/Cart.css'

const Cart = ({cart, updateCart}) => {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    return isOpen ? (
        <div className='rude-cart'>
            <button
                className='rude-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Close regret list
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} ${price} x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                    <button onClick={() => updateCart([])}>Empty cart</button>
                </div>
            ) : (
                <div>Oh no! How embarrassing: your cart is empty. Fill it up now!</div>
            )}
        </div>
    ) : (
        <div className='rude-cart-closed'>
            <button
                className='rude-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            ><strong>
                Open regret list
              </strong>
            </button>
        </div>
    )
}

export default Cart;