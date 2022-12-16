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
          let hypothsisFact = getFact(hypotesis)
          if (hypothsisFact.categorie !== 'primaire') {
            replaceDiseaseBySymptoms(hypothsisFact)
          } else if (!updatedSymptoms.includes(hypotesis)) {
            console.log(
              'Ajout de ',
              hypothsisFact.name,
              ' dans le tableau des faits nécéssaires'
            )
            updatedSymptoms.push(hypotesis)
          }
        })
      }
    } else {
      if (!updatedSymptoms.includes(disease.id))
        console.log(
          'Ajout de ',
          disease.name,
          ' dans le tableau des faits nécéssaires'
        )
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
  if (bool.current) {
    console.log('Le diagnostic à tester est validé')
  } else {
    console.log("Le diagnostic à tester n'est pas validé")
  }
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
