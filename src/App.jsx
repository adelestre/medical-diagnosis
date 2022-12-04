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
		<div className="flex flex-col gap-6 h-screen w-3/4 max-w-5xl m-auto items-center md:justify-center pb-12">
			<div className="pb-8 w-full capitalize text-3xl border-b-2">
				système expert - aide au diagnostic médical - infirmerie
			</div>
			<div
				className="flex flex-row gap-2 relative w-full"
				style={{ maxHeight: '66%' }}
			>
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
