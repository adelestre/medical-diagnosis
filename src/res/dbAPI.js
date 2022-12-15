import db from './db.json'

const getFact = (id) => {
	return db.faits.find((d) => d.id === id)
}

const getCategories = () => {
	let categories = []
	db.faits.forEach((fait) => {
		if (fait.nature) {
			if (!categories.includes(fait.nature)) {
				categories.push(fait.nature)
			}
		}
	})
	return categories
}

const getRuleFromConsquence = (consequence) => {
	let rule = null
	db.regles.forEach((regle) => {
		if (regle.consequence === consequence) {
			rule = regle
		}
	})
	return rule
}

const getSymptomFromCategory = (category) => {
	let symptoms = []
	db.faits.forEach((fait) => {
		if (fait.categorie) {
			if (fait.categorie.includes(category)) {
				symptoms.push(fait)
			}
		}
	})
	return symptoms
}

export { getFact, getCategories, getSymptomFromCategory, getRuleFromConsquence }
