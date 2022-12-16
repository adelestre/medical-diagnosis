import React, { useState } from 'react'
import db from '../res/db.json'
import { getCategories } from '../res/dbAPI'
import Symptom from './Symptom'
import Category from './Category'
import useArray from './hooks/useArray'

function Form({ symptoms, addSymptom, removeSymptom }) {
  const filteredSymptoms = () => {
    let tempFilter = []
    if (filters.length > 0) {
      tempFilter = db.faits.filter((item) => {
        return filters.includes(item.nature)
      })
    } else {
      tempFilter = db.faits
    }
    return tempFilter.filter((item) => {
      return item.name.toLowerCase().search(input.toLowerCase()) !== -1
    })
  }
  const [filters, addFilter, removeFilter] = useArray([])
  const [filterOpen, setFilterOpen] = useState(false)
  const [input, setInput] = useState('')
  const onInputChange = (e) => {
    setInput(e.target.value)
  }
  const onFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }
  return (
    <div className="">
      <form className="relative flex flex-col pr-2 mb-2">
        <div
          className="flex flex-row w-min items-center cursor-pointer select-none"
          onClick={onFilterOpen}
        >
          <div className="capitalize">filtres</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500 scale-75"
            fill="currentColor"
          >
            <path d="M24 30.15q-.3 0-.55-.1-.25-.1-.5-.35l-9.9-9.9q-.4-.4-.375-1.075.025-.675.425-1.075.5-.5 1.075-.425.575.075 1.025.475l8.8 8.8 8.8-8.8q.4-.4 1.075-.45.675-.05 1.075.45.5.4.425 1.05-.075.65-.475 1.1l-9.85 9.85q-.25.25-.5.35-.25.1-.55.1Z" />
          </svg>
        </div>
        {filterOpen && (
          <div className="flex flex-col gap-1 py-2 -translate-y-2">
            {getCategories().map((category) => {
              return (
                <Category
                  key={category}
                  category={category}
                  addFilter={addFilter}
                  removeFilter={removeFilter}
                />
              )
            })}
          </div>
        )}
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
            className="bg-slate-100 border-2 rounded-md border-slate-300 text-gray-900 text-lg focus:border-blue-500 focus:outline-none block w-full pl-10 p-2.5"
            placeholder="Chercher un symptôme..."
            onChange={(e) => onInputChange(e)}
            value={input}
          />
        </div>
      </form>
      <ol
        className="relative w-full flex flex-col gap-1 pr-2 overflow-y-auto"
        style={{ height: '40vh' }}
      >
        {filteredSymptoms().map(
          (symptom, index) =>
            !symptom.categorie.includes('terminal') && (
              <Symptom
                symptoms={symptoms}
                addSymptom={addSymptom}
                removeSymptom={removeSymptom}
                key={'symptom' + index}
              >
                {symptom}
              </Symptom>
            )
        )}
      </ol>
    </div>
  )
}

export default Form
