import { useState } from 'react'

const useArray = (initialArray) => {
	const [array, setArray] = useState(initialArray)
	const add = (item) => {
		setArray([...array, item])
	}
	const remove = (item) => {
		setArray(array.filter((i) => i !== item))
	}

	return [array, add, remove]
}

export default useArray
