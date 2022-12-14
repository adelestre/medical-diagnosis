import { useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'
import useToggle from './components/hooks/useToggle'
import useList from './components/hooks/useList'
import SelectDisease from './components/SelectDisease'
import Result from './components/Result'

function App() {
  const [symptoms1, addSymptom1, removeSymptom1] = useList([])
  const [symptoms2, addSymptom2, removeSymptom2] = useList([])
  const [selectedDisease, setSelectedDisease] = useState('grippe')

  const [model, toggleModel] = useToggle(true)
  return (
    <div className="relative flex flex-col gap-6 md:w-3/4 max-w-5xl mx-6 md:mx-auto py-6 items-center">
      <div className="relative pb-6 w-full capitalize text-center text-xl sm:text-2xl md:text-3xl border-b-2">
        système expert - aide au diagnostic médical - infirmerie
      </div>
      <div>
        <button
          onClick={toggleModel}
          className="bg-slate-100 p-4 rounded-md border-2"
        >
          {model
            ? "Aller vers : Vérification d'un diagnostic"
            : "Aller vers : Établissement d'un diagnostic"}
        </button>
      </div>
      <div className="flex flex-col gap-2 relative w-full">
        {model ? (
          <>
            <div className="relative p-6 pr-4 pt-2 rounded-md bg-gray-200">
              <Form
                symptoms={symptoms1}
                addSymptom={addSymptom1}
                removeSymptom={removeSymptom1}
              />
            </div>
            <Results symptoms={symptoms1} />
          </>
        ) : (
          <>
            <div className="relative p-6 pr-4 pt-2 rounded-md bg-gray-200">
              <SelectDisease
                selectedDisease={selectedDisease}
                setSelectedDisease={setSelectedDisease}
              />
              <Form
                symptoms={symptoms2}
                addSymptom={addSymptom2}
                removeSymptom={removeSymptom2}
              />
            </div>
            <Result symptoms={symptoms2} selectedDisease={selectedDisease} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
