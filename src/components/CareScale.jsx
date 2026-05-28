import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import '../styles/CareScale.css'


const quantityLabel = {
	1: 'little',
	2: 'moderately',
	3: 'a lot'
}

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img className='rude-care-icon' src={Sun} alt='sun-icon' />
		) : (
			<img className='rude-care-icon' src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`This plant requires ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'light' : "watering"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
