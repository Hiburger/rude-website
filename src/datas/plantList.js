import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classic',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 499.99,
		description: "Includes a free structural engineer consultation. It will eat your ceiling."
	},
	{
		name: 'fiddle leaf fig',
		category: 'classic',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 89.00,
		description: "Base price. +50$  fee if you move it more than 2.31cm. Drama queen guarantee."
	},
	{
		name: 'satin pothos',
		category: 'classic',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 15.00,
		description: "Cheap now, expensive later. Invasive species special."
	},
		{
		name: 'olive tree',
		category: 'exterior',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 350.00,
		description: "Pay to watch it do nothing for 2000 years. Peace is expensive."
	},
	{
		name: 'calathea',
		category: 'classic',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 120.00,
		description: "Price includes a small bottle of Evian. Tap water is forbidden."
	},
	{
		name: 'cactus',
		category: 'succulent',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 45.00,
		description: "Comes with a free tetanus shot voucher. Do NOT hug."
	},
	{
		name: 'basil',
		category: 'exterior',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 25.00,
		description: "Fragile! Dies if the temperature drops 1 degree. Handle with fear."
	},
	{
		name: 'succulent',
		category: 'succulent',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 60.00,
		description: "Premium price because you WILL overwater it. Death by love... how sad."
	},
	{
		name: 'mint',
		category: 'exterior',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 5.00,
		description: "Entry fee to let the invasion begin. Good luck stopping it."
	}
]
