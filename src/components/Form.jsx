import React from 'react'
import db from '../res/ex.json'

function Form() {
	const [filteredSymptoms, setFilteredSymptoms] = React.useState(db.symptoms)
	const [input, setInput] = React.useState('')
	const onInputChange = (e) => {
		setInput(e.target.value)
		setFilteredSymptoms(
			db.symptoms.filter((item) => {
				return (
					item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
				)
			})
		)
	}
	return (
		<div className="md:w-1/3 w-3/4">
			<form className="flex items-center">
				<label className="sr-only">Search</label>
				<div className="relative w-full">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="text"
						id="voice-search"
						className="bg-gray-50 border-2 rounded-md border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none block w-full pl-10 p-2.5"
						placeholder="Chercher un symptôme..."
						onChange={(e) => onInputChange(e)}
						value={input}
					/>
				</div>
			</form>
			<ol className="w-full">
				{filteredSymptoms.map((symptom, index) => (
					<li key={'symptom' + index}>{symptom.name}</li>
				))}
			</ol>
		</div>
	)
}

export default Form
