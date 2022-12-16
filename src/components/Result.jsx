import React, { useRef } from 'react'
import db from '../res/db.json'
import { getFact, getRuleFromConsquence } from '../res/dbAPI'

function Result({ symptoms, selectedDisease }) {
	let bool = useRef(null)
	const updatedFacts = []
	const updatedSymptoms = []
	const replaceDiseaseBySymptoms = (disease) => {
		if (
			disease.categorie === 'intermediaire' ||
			disease.categorie === 'terminal'
		) {
			let rule = getRuleFromConsquence(disease.id)
			if (rule) {
				rule.hypotesis.forEach((hypotesis) => {
					if (getFact(hypotesis).categorie !== 'primaire') {
						replaceDiseaseBySymptoms(getFact(hypotesis))
					} else if (!updatedSymptoms.includes(hypotesis))
						updatedSymptoms.push(hypotesis)
				})
			}
		} else {
			if (!updatedSymptoms.includes(disease.id))
				updatedSymptoms.push(disease.id)
		}
	}
	symptoms.forEach((symptom) => {
		replaceDiseaseBySymptoms(symptom)
	})
	const recursive = (disease) => {
		db.regles.forEach((regle) => {
			if (regle.consequence === disease) {
				regle.hypotesis.forEach((symptom) => {
					if (getFact(symptom).categorie !== 'primaire') {
						recursive(symptom)
					} else {
						if (!updatedFacts.includes(symptom)) updatedFacts.push(symptom)
					}
				})
			}
		})
	}
	recursive(selectedDisease)
	bool.current = updatedFacts.every((symptom) => {
		return updatedSymptoms.includes(symptom)
	})
	return (
		<div
			className="bg-slate-100 p-4 text-center font-semibold text-lg rounded-md"
			style={bool.current ? { color: 'green' } : { color: 'red' }}
		>
			{bool.current ? 'Positif' : 'Négatif'}
		</div>
	)
}

export default Result
