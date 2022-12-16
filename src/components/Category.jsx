import React, { useState, useRef } from 'react'

function Category({ category, addFilter, removeFilter }) {
	const refIsChecked = useRef(false)
	const [isChecked, setIsChecked] = useState(refIsChecked.current)
	const onClickHandle = () => {
		if (refIsChecked.current) {
			refIsChecked.current = isChecked
		}
		if (!isChecked) {
			addFilter(category)
		} else {
			removeFilter(category)
		}
		setIsChecked(!isChecked)
	}
	return (
		<div className="flex flex-row gap-2" onClick={onClickHandle}>
			<input
				className="form-check-input appearance-none h-6 w-6 border border-slate-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
				type="checkbox"
				checked={isChecked}
				onChange={() => {}}
			/>
			<label className="form-check-label inline-block text-gray-800 capitalize select-none cursor-pointer">
				{category}
			</label>
		</div>
	)
}

export default Category
