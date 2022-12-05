import React, { useState, useRef } from 'react'

function Category({ category }) {
  const refIsChecked = useRef(false)
  const [isChecked, setIsChecked] = useState(refIsChecked)
  const onClickHandle = () => {
    setIsChecked(!isChecked)
  }
  const updateRef = () => {
    if (refIsChecked.current) {
      refIsChecked.current = isChecked
    }
  }
  return (
    <div className="cursor-pointer" onClick={onClickHandle}>
      <input
        type="checkbox"
        checked={isChecked}
        id={category}
        className="pointer-events-none"
        onChange={updateRef}
      />
      {category}
    </div>
  )
}

export default Category
