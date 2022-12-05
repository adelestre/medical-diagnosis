import React from 'react'
import db from '../res/new.json'
import { getFact } from '../res/dbAPI'

function Results({ symptoms }) {
  const updatedFacts = []
  symptoms.forEach((symptom) => updatedFacts.push(symptom.id))
  const getResults = () => {
    let factAdded = false
    db.regles.forEach((regle) => {
      if (
        !updatedFacts.includes(regle.consequence) &&
        regle.hypotesis.every((symptom) => {
          return updatedFacts.includes(symptom)
        })
      ) {
        updatedFacts.push(regle.consequence)
        factAdded = true
      }
    })
    if (factAdded) return getResults()
    else return filterResults(updatedFacts)
  }
  const filterResults = (facts) => {
    let ResultsToRemove = []
    facts.forEach((factId) => {
      db.regles.forEach((regle) => {
        if (regle.consequence === factId) {
          regle.hypotesis.forEach((symptom) => {
            if (facts.includes(symptom) && !ResultsToRemove.includes(factId)) {
              ResultsToRemove.push(symptom)
            }
          })
        }
      })
    })
    return facts.filter((fact) => !ResultsToRemove.includes(fact))
  }
  return (
    <div className="flex flex-col gap-6 items-center bg-slate-100 py-2 px-6 border-2 rounded-md border-gray-300">
      <div className="text-lg">Diagnostic :</div>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-2xl">
            {getResults() &&
              getResults().map((result) => {
                let fact = getFact(result)
                return fact.categorie !== 'primaire' ? (
                  <div key={fact.id}>{fact.name}</div>
                ) : null
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
