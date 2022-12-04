import { useState } from 'react'
import Form from './components/Form'

function App() {
	return (
		<div className="flex flex-col h-screen w-screen items-center justify-center pb-12">
			<div className="m-6 pb-8 capitalize text-3xl border-b-2">
				système expert - aide au diagnostic médical - infirmerie
			</div>
			<Form />
		</div>
	)
}

export default App
