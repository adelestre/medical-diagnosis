import Form from './components/Form'
import Results from './components/Results'

function App() {
	return (
		<div className="flex flex-col gap-6 h-screen w-3/4 max-w-3xl m-auto items-center md:justify-center pb-12">
			<div className="pb-8 capitalize text-3xl border-b-2">
				système expert - aide au diagnostic médical - infirmerie
			</div>
			<div
				className="flex flex-row relative w-full"
				style={{ maxHeight: '66%' }}
			>
				<Form />
				<Results />
			</div>
		</div>
	)
}

export default App
