import { useState, useEffect } from 'react'

import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import TouchGrassModal from './components/TouchGrassModal'
import logo from './assets/logo.png'
import './styles/Layout.css'


const App = () => {
    const [cart, updateCart] = useState([])
    const [showGrassModal, setShowGrassModal] = useState(false)
    const [ignoreCount, setIgnoreCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGrassModal(true)
        }, 120000)

        // Clear timeout if unmounted
        return () => clearTimeout(timer)
    }, [])

    const handleGoingOutside = () => {
        setShowGrassModal(false)
        window.location.href = "https://www.google.com/maps/search/parks+near+me" // Redirect to Google Maps with parks near search. This is genious. Now i don't like google but this was an easy way to do it so.... 
    }

    const handleIgnoringReality = () => {
        setShowGrassModal(false)
        const newCount = ignoreCount + 1
        setIgnoreCount(newCount)
        if (newCount >= 2) {
            alert("Looks like the message didn't get through. I'll try again tomorrow. Maybe i wasn't rude enough.")
        } else {
            // Optionally, restart the timer to annoy the stupid user again after another 5 mins 
            setTimeout(() => {
                setShowGrassModal(true)
            }, 120000)
        }
    }

    return (
        <div className="rude-layout-outer">
            <Banner>
                <img src={logo} alt='The Judgmental Leaf Logo' className='rude-logo' />
                <h1 className='rude-title'>The Judgmental Leaf</h1>
            </Banner>
            <div className='rude-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
            <TouchGrassModal 
               isOpen={showGrassModal} 
               onClose={handleGoingOutside} 
               onIgnore={handleIgnoringReality} 
            />
        </div>
    )
}

export default App