import React from 'react'
import { getSymptomFromCategory } from '../res/dbAPI'

function SelectDisease({ selectedDisease, setSelectedDisease }) {
	const disease = getSymptomFromCategory('intermediaire').concat(
		getSymptomFromCategory('terminal')
	)
	return (
		<div>
			<div className="text-lg">Sélectionnez une maladie :</div>
			<form className="grid grid-cols-3 justify-center">
				{disease.map((disease, index) => (
					<div key={index} onClick={() => setSelectedDisease(disease.id)}>
						<input
							className="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer -translate-y-px"
							type="radio"
							name={disease.name}
							checked={selectedDisease === disease.id}
							onChange={() => {}}
						/>
						<label className="form-check-label inline-block text-gray-800 capitalize translate-y-px cursor-pointer">
							{disease.name}
						</label>
					</div>
				))}
			</form>
		</div>
	)
}

export default SelectDisease
