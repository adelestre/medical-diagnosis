import React from 'react'
import 'tw-elements'

function Symptom({ children, symptoms, addSymptom, removeSymptom }) {
	const isChecked = symptoms.includes(children)
	const onClick = () => {
		if (isChecked) {
			removeSymptom(children)
		} else {
			addSymptom(children)
		}
	}
	return (
		<li
			className={
				'w-full flex flex-row gap-2 rounded-md items-center p-2 border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 cursor-pointer ' +
				(isChecked
					? 'bg-blue-200 border-blue-300'
					: 'bg-slate-50 border-slate-300')
			}
			onClick={onClick}
		>
			<input
				className="form-check-input appearance-none h-6 w-6 border pointer-events-none border-slate-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
				type="checkbox"
				checked={isChecked}
				onChange={() => {}}
				id={children.id}
			/>
			<label className="form-check-label inline-block text-gray-800 capitalize">
				{children.name}
			</label>
		</li>
	)
}

export default Symptom
