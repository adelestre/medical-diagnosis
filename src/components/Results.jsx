import React from 'react'
import db from '../res/db.json'
import { getFact } from '../res/dbAPI'

function Results({ symptoms }) {
  const updatedFacts = []
  symptoms.forEach((symptom) => updatedFacts.push(symptom.id))
  console.log('Tableau des symptômes : ', updatedFacts)
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
        console.log('Ajout de ', regle.consequence, ' dans le diagnostic')
        factAdded = true
      }
    })
    if (factAdded) {
      console.log(
        'Un fait ou plusieurs faits ont été déterminés, on relance la fonction de recherche'
      )
      return getResults()
    } else return filterResults(updatedFacts)
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
    if (ResultsToRemove.length > 0)
      console.log(
        'Tableau des maladies secondaires à ne pas afficher dans le diagnostic : ',
        ResultsToRemove
      )
    return facts.filter((fact) => !ResultsToRemove.includes(fact))
  }
  let results = getResults()
    .map((result) => getFact(result))
    .filter((fact) => fact.categorie !== 'primaire')
  return (
    <div className="flex flex-col gap-2 bg-slate-100 py-2 px-6 border-2 rounded-md border-gray-300">
      <div className="text-lg">Diagnostic :</div>
      <div>
        <ul className="flex flex-col gap-4 px-6 text-xl list-disc">
          {results &&
            results.length > 0 &&
            results.map((fact) => {
              return (
                <div key={fact.id}>
                  <li
                    className="font-semibold capitalize"
                    style={{ color: 'green' }}
                  >
                    {fact.name}
                  </li>
                  <ul>
                    <li className="ml-6">Protocole : </li>
                    {fact.protocol &&
                      fact.protocol.map((protocol, index) => {
                        return (
                          <li key={index} className="ml-6">
                            {'=> ' + (index + 1) + '. ' + protocol}
                          </li>
                        )
                      })}
                  </ul>
                </div>
              )
            })}
          {results.length === 0 && (
            <div className="text-center font-semibold" style={{ color: 'red' }}>
              Aucune maladie trouvée
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Results
