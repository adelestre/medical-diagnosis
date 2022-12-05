import db from './new.json'

const getFact = (id) => {
  return db.faits.find((d) => d.id === id)
}

const getCategories = () => {
  let categories = []
  db.faits.forEach((fait) => {
    if (fait.categories) {
      fait.categories.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category)
        }
      })
    }
  })
  return categories
}

export { getFact, getCategories }
