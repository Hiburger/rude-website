import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

const ShoppingList = ({ cart, updateCart }) => {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	const addToCart = (name, price) => {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='rude-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='rude-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, description, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								description={description}
							/>
							<button onClick={() => addToCart(name, price)}>Add to my regret list</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
