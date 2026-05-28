import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}

	const handleBlur = () => {
		if (!inputValue.includes('@')) {
			alert('We might be a Judgmental Leaf, but not a Judgmental Spam! Please enter a valid email immediately. Do you even know what is an email??? Go scream "help" very loudly in public so we can effectively assist you :)')
		} else {
			alert("Thank you for your email, it has been successfully sold: " + inputValue + "\n\nSold for 12.9 bitcoins to @arcane_hacker_1246 on the dark web!")
		}
	}

	return (
		<footer className='rude-footer'>
			<div className='rude-footer-elem'>
				The Judgmental Leaf © 3021 - All rights reserved
			</div>
			<div className='rude-footer-elem'>Buy a plant, feel bad about yourself</div>
			<div className='rude-footer-elem'>Kindly give us your email, we loves personal infos. Also, we won't sell anything to anyone, ever!</div>
			<input
				placeholder='Enter your email'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
