import { useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'

function App() {
	const useList = (initialList) => {
		const [list, setList] = useState(initialList)
		const add = (item) => {
			setList([...list, item])
		}
		const remove = (item) => {
			setList(list.filter((i) => i !== item))
		}
		return [list, add, remove]
	}
	const [symptoms, addSymptom, removeSymptom] = useList([])
	return (
		<div className="relative flex flex-col gap-6 md:w-3/4 max-w-5xl mx-6 md:mx-auto py-6 items-center">
			<div className="relative pb-8 w-full capitalize text-xl sm:text-2xl md:text-3xl border-b-2">
				système expert - aide au diagnostic médical - infirmerie
			</div>
			<div className="flex flex-col gap-2 relative w-full">
				<Form
					symptoms={symptoms}
					addSymptom={addSymptom}
					removeSymptom={removeSymptom}
				/>
				<Results symptoms={symptoms} />
			</div>
		</div>
	)
}

export default App
