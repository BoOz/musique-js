function gamme(tonic,scale){
	// gamme indexée a partir de 1
	var g = new Array(); ;
	var i;
	for(i=0; i < scales[scale].length ; i++){
		g[i] = tonic + scales[scale][i] ;
	}
	return g;
}

function melodie(gamme, nb_temps){
	// durée possibles, double croche (0.25), croche (0.5), noire (1), blanche (2), (ronde (4)).
	subdivisions = [0.25,0.5,1,2]
	
	var duree_melodie = 0 ;
	var duree ;
	var m = [] ;
	while(duree_melodie < nb_temps){
		// une note de la gamme au hasard
		note = gamme[ gamme.length * Math.random() << 0]
		// une durée au hasard
		duree = subdivisions[ subdivisions.length * Math.random() << 0]
		if (duree_melodie + duree > nb_temps){
			duree = nb_temps - duree_melodie ;
		}
		//console.log(duree_melodie,duree);
		m.push({note:note,duree:duree}) ;
		duree_melodie += duree ;
	}
	
	// voilà la mélodie est prête.
	return m ;
}

function notes_accord(gamme,degre){
	var a = [] ;
	if(degre=="I")
		a = [gamme[1] -12, gamme[3]-12, gamme[5]-12,gamme[7]-12] ;
	if(degre=="II")
		a = [gamme[2]-12, gamme[4]-12, gamme[6]-12,gamme[8]-12] ;
	if(degre=="V")
		a = [gamme[2]-12, gamme[4]-12, gamme[7]-12] ;
	return a ;
}

// https://gist.github.com/gleitz/6845751
var scales = {
	//'natural major':	[0,2,4,5,7,9,11,12],
	'major':			[0,2,4,5,7,9,11,12],
	'ionian':			[0,2,4,5,7,9,11,12],
	//'lydian':			[0,2,4,6,7,9,11,12],
	'mixolydian':		[0,2,4,5,7,9,10,12],

	//'phrygian':			[0,1,3,5,7,8,10,12],
	//'locrian':			[0,1,3,5,6,8,10,12],

	//'natural minor':	[0,2,3,5,7,8,10,12],
	//'minor':			[0,2,3,5,7,8,10,12],
	//'melodic minor':	[0,2,3,5,7,9,11,12],
	'harmonic minor':	[0,2,3,5,7,8,11,12],

	//'locrian natural': [0,2,3,5,6,8,10,12],
	//'aeolian': [0,2,3,5,7,8,10,12],
/*
	
	'chromatic': [0,1,2,3,4,5,6,7,8,9,10,11,12],
	'spanish 8 tone': [0,1,3,4,5,6,8,10,12],
	'flamenco': [0,1,3,4,5,7,8,10,12],
	'symmetrical': [0,1,3,4,6,7,9,10,12],
	'inverted diminished': [0,1,3,4,6,7,9,10,12],
	'diminished': [0,2,3,5,6,8,9,11,12],
	'whole tone': [0,2,4,6,8,10,12],
	'augmented': [0,3,4,7,8,11,12],
	'3 semitone': [0,3,6,9,12],
	'4 semitone': [0,4,8,12],
	'locrian ultra': [0,1,3,4,6,8,9,12],
	'locrian super': [0,1,3,4,6,8,10,12],
	'indian': [0,1,3,4,7,8,10,12],
	'neapolitan minor': [0,1,3,5,7,8,11,12],
	'javanese': [0,1,3,5,7,9,10,12],
	'neapolitan major': [0,1,3,5,7,9,11,12],
	'todi': [0,1,3,6,7,8,11,12],
	'persian': [0,1,4,5,6,8,11,12],
	'oriental': [0,1,4,5,6,9,10,12],
	'phrygian major': [0,1,4,5,7,8,10,12],
	'spanish': [0,1,4,5,7,8,10,12],
	'jewish': [0,1,4,5,7,8,10,12],
	'double harmonic': [0,1,4,5,7,8,11,12],
	'gypsy': [0,1,4,5,7,8,11,12],
	'byzantine': [0,1,4,5,7,8,11,12],
	'chahargah': [0,1,4,5,7,8,11,12],
	'marva': [0,1,4,6,7,9,11,12],
	'enigmatic': [0,1,4,6,8,10,11,12],
	'algerian 2': [0,2,3,5,7,8,10,12],
	'hungarian minor': [0,2,3,6,7,8,11,12],
	'algerian': [0,2,3,6,7,8,11,12],
	'algerian 1': [0,2,3,6,7,8,11,12],
	'mohammedan': [0,2,3,5,7,8,11,12],
	'dorian': [0,2,3,5,7,9,10,12],
	'hungarian gypsy': [0,2,3,6,7,8,11,12],
	'romanian': [0,2,3,6,7,9,10,12],
	'locrian major': [0,2,4,5,6,8,10,12],
	'arabian': [0,1,4,5,7,8,11,12],
	'hindu': [0,2,4,5,7,8,10,12],
	'ethiopian': [0,2,4,5,7,8,11,12],
	'mixolydian augmented': [0,2,4,5,8,9,10,12],
	'harmonic major': [0,2,4,5,8,9,11,12],
	'lydian minor': [0,2,4,6,7,8,10,12],
	'lydian dominant': [0,2,4,6,7,9,10,12],
	'overtone': [0,2,4,6,7,9,10,12],
	'lydian augmented': [0,2,4,6,8,9,10,12],
	'leading whole tone': [0,2,4,6,8,10,11,12],
	'blues': [0,3,5,6,7,10,12],
	'hungarian major': [0,3,4,6,7,9,10,12],
	'pb': [0,1,3,6,8,12],
	'balinese': [0,1,3,7,8,12],
	'pe': [0,1,3,7,8,12],
	'pelog': [0,1,3,7,10,12],
	'iwato': [0,1,5,6,10,12],
	'japanese': [0,1,5,7,8,12],
	'kumoi': [0,1,5,7,8,12],
	'hirajoshi': [0,2,3,7,8,12],
	'pa': [0,2,3,7,8,12],
	'pd': [0,2,3,7,9,12],
	'pentatonic major': [0,2,4,7,9,12],
	'chinese': [0,2,4,7,9,12],
	'chinese 1': [0,2,4,7,9,12],
	'mongolian': [0,2,4,7,9,12],
	'pfcg': [0,2,4,7,9,12],
	'egyptian': [0,2,3,6,7,8,11,12],
	'pentatonic minor': [0,3,5,7,10,12],
	'chinese 2': [0,4,6,7,11,12],
	'bebop dominant': [0,2,4,5,7,9,10,11,12],
	'bebop dominant flatnine': [0,1,4,5,7,9,10,11,12],
	'bebop major': [0,2,4,5,7,8,9,11,12],
	'bebop minor': [0,2,3,5,7,8,9,10,12],
	'bebop tonic minor': [0,2,3,5,7,8,9,11,12],
	'altered': [0,1,3,4,6,8,10,12]
*/

};
