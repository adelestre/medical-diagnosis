var maladies = [
	'grippe',
	'rhume',
	'gastro-entérite',
	'COVID-19',
	'otite',
	'angine',
	'bronchite',
	'allergie',
	'egratignure',
	'coupure',
	'déchirure',
	'brûlure',
]

//creer une liste de symptomes

var symptomes = [
	'fièvre',
	'toux',
	'maux de gorge',
	'courbatures',
	'diarrhée',
	"perte de l'odorat",
	'perte du goût',
	'essoufflement',
	'difficultés respiratoires',
	'douleurs thoraciques',
	'cyanose',
	'douleur',
	'maux de tête',
	'irritations',
	'rougeurs',
	'demengeaisons',
	'lesions superficielles',
	'gonflements',
]

//associer des maladies  aux symptomes correspondants

var maladies_symptomes = {
	grippe: ['fièvre', 'toux', 'maux de gorge', 'courbatures'],
	rhume: ['fièvre', 'toux', 'maux de gorge'],
	'gastro-entérite': [
		'diarrhée',
		'maux de gorge',
		"perte de l'odorat",
		'perte du goût',
	],
	'COVID-19': [
		'fièvre',
		'toux',
		'maux de gorge',
		'courbatures',
		'diarrhée',
		"perte de l'odorat",
		'perte du goût',
		'essoufflement',
		'difficultés respiratoires',
		'douleurs thoraciques',
		'cyanose',
	],
	otite: [
		'douleur',
		'fièvre',
		'maux de tête',
		'maux de gorge',
		"mal à l'oreille",
	],
	angine: ['douleur', 'fièvre', 'maux de gorge'],
	bronchite: [
		'toux',
		'essoufflement',
		'difficultés respiratoires',
		'douleurs thoraciques',
		'cyanose',
	],
	allergie: [
		'fièvre',
		'maux de tête',
		'irritations',
		'rougeurs',
		'demengeaisons',
	],
	egratignure: ['douleur', 'rougeurs', 'lesions superficielles'],
	coupure: ['douleur', 'lesions superficielles'],
	déchirure: ['douleur', 'gonflements', 'rougeurs'],
	brûlure: ['douleur', 'rougeurs', 'demeangeaisons'],
}

//creer une liste de traitements

var traitements = [
	'paracétamol',
	'antidiahréique',
	'sirop',
	'creme',
	'desinfection',
	'pansement',
	'bandage',
	'glace',
	'bequilles',
	'autotest covid-19',
	'RDV chez le médecin generaliste',
	'surveillance',
	'immobilisation',
	'repos',
]

//associer des traitements aux maladies correspondantes

var maladies_traitement = {
	grippe: ['paracétamol', 'repos', 'RDV chez le médecin generaliste'],
	rhume: ['repos'],
	'gastro-entérite': [
		'paracétamol',
		'antidiahréique',
		'repos',
		'RDV chez le médecin generaliste',
	],
	'COVID-19': [
		'paracétamol',
		'repos',
		'RDV chez le médecin generaliste',
		'autotest covid-19',
	],
	otite: ['paracétamol', 'repos', 'RDV chez le médecin generaliste'],
	angine: ['paracétamol', 'repos', 'RDV chez le médecin generaliste', 'sirop'],
	bronchite: [
		'paracétamol',
		'repos',
		'RDV chez le médecin generaliste',
		'sirop',
	],
	allergie: ['creme', 'surveillance', 'repos'],
	egratignure: ['desinfection', 'pansement'],
	coupure: ['desinfection', 'pansement'],
	déchirure: [
		'immobilisation',
		'bandage',
		'creme',
		'glace',
		'repos',
		'bequilles',
		'radio',
	],
	brûlure: ['creme'],
}
