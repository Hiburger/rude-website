import CareScale from './CareScale'
import '../styles/PlantItem.css'

const descriptions = {
	'monstera': "Just like this plant that slowly suffocates its host tree to survive, you probably suffocate the mood at dinner parties by talking too much about... something? Nobody really knows what.",
	'fiddle leaf fig': "As emotionally stable as this Ficus that throws a tantrum if moved ten centimeters, your mood visibly depends on the position of the moon. \nYes, I assure you. Grab a mirror and check.",
	'satin pothos': "This Pothos is an invasive species impossible to eradicate, much like that bad habit you've been promising to quit for three years. We're not judging tho!! it's... it's just an observation.",
	'calathea': "The Calathea develops brown edges if the water contains the slightest impurity, much like you develop a migraine if your coffee isn't at the exact right temperature. It must be hard being so sensitive, no?",
	'olive tree': "This Olive tree will live 3000+ years and watch you die without flinching, silently judging your life choices over two millennia. How 'lucky'!",
	'cactus': "This Cactus developed spines to protect its resources and say no, an assertiveness skill you should consider acquiring. Try it, you'll see, it's liberating!",
	'basil' : "This Basil dies instantly if the temperature drops below 10.2 degrees, just as your productivity plummets as soon as there's a cloud in the sky. \n\nFriendly advice: delete the weather app from your life, you'll feel better.",
	'succulent': "This Succulent dies if loved too much and watered too often, proving that suffocation is as fatal for plants as it is for human relationships. \nGive some space, both will benefit.",
	'mint': "Mint is a born invader that takes up all the space and suffocates its neighbors, exactly like your personality in a group conversation. \n\n\nhappens."
};

const handleClick = (plantName, price) => {
	const text = descriptions[plantName.toLowerCase()] || `Hey, but... It's you! \nSo, you want to buy 1 ${plantName}??? \nWe won't tell you "Great choice!", because we know nothing about it. But money is coming in, and that's what counts. :3`;
	alert(`${text}\n\nPrice: $${price}`)
}

const PlantItem = ({ cover, name, water, light, price, description }) => {
	return (
		<li className='rude-plant-item' onClick={() => handleClick(name, price)}>
			<img className='rude-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div className="rude-plant-item-desc">{description}</div>
			<div className="rude-plant-item-price">
				${price} <span className="rude-plant-item-price-note">(Emotional damage included)</span>
			</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
