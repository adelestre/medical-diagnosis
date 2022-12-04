import db from './ex.json'

const getDiagnostic = (id) => {
	return db.diagnostics.find((d) => d.id === id)
}

export { getDiagnostic }
