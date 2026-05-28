import '../styles/Categories.css'

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
	return (
		<div className='rude-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='rude-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>remove filter</button>
		</div>
	)
}

export default Categories
