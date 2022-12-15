import { useState } from 'react'

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

export default useList
