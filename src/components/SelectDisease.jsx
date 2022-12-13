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
          <div key={index}>
            <label className="form-check-label inline-block text-gray-800">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name={disease.name}
                checked={selectedDisease === disease.id}
                onClick={() => setSelectedDisease(disease.id)}
                onChange={() => {}}
              />
              {disease.name}
            </label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default SelectDisease
