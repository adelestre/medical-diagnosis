import React, { useEffect, useRef } from 'react'
import db from '../res/ex.json'
import { getDiagnostic } from '../res/dbAPI'

function Results({ symptoms }) {
	const result = useRef(null)
	useEffect(() => {
		// To Do : Calculate the result
	}, [result, symptoms])
	return (
		<div className="flex flex-col gap-6 items-center bg-slate-100 py-2 px-6 border-2 rounded-md border-gray-300">
			<div className="text-lg">Diagnostic :</div>
			<div>
				<div className="flex flex-row gap-2 items-center">
					<div className="text-2xl">
						{result.current ? result.current.name : ''}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Results
