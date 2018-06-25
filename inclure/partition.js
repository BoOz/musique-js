// lire la partition
function lirePartition(morceau){
	
	//console.log(morceau);
	
	var partition = {
			instruments:[],
			cadence:0, tempo:0, nb_mesures:0, duree:0, grille: morceau,
			parties:[]
		};
	
	var delai, duree_temps = 0 ;
	
	splitparts(morceau).forEach(function(e){
		
		//console.log(e);
		
		// intercepter les delais éventuels associés aux instrument 
		// + / -
		var delai = 0 ;
		var res = e.match(/\++/gi) ;
		if(res){
			// nombre de quart de temps de delais + ou -
			delai = res[0].length * duree_temps / cadence
			
			e = e.replace(/\++/gi, "").trim();
			console.log(">" + e + "<", res, delai);
		}
		
		switch(e) {
			case "Piano":
				instrument = accompagnements[ accompagnements.length * Math.random() << 0]
				partition.instruments.push([instrument,delai]);
				break;
			case "Choirs":
				instrument = accompagnements[ accompagnements.length * Math.random() << 0]
				partition.instruments.push([instrument,delai]);
				break;
			case "Basse":
				instrument = basses[ basses.length * Math.random() << 0]
				partition.instruments.push([instrument,delai]);
				break;
			case "Batterie":
				partition.instruments.push(["percussion",delai]);
				break;
			case "4/4":
				partition.cadence = cadence = 4 ;
				break;
		}
		
		if(parseInt(e)){
			partition.tempo = tempo = e ;
			duree_temps = 60 / tempo ;
			//console.log("tempo",e,duree_temps);
		}
		// Parties incluant des mesures ?
		if(e.match(/\|/)){
			var mesures = splitMeasures(e,cadence) ;
			var nb = mesures.length ;
			partition.nb_mesures += nb ;
			partition.parties.push({accords:mesures,melodie:[]});
		}
		
	});
	
	// durée théorique du morceau
	partition.duree = partition.cadence * partition.nb_mesures * 60 / partition.tempo ;
	
	// console.log(partition);
	return partition ;
}

function splitparts (repr) {
	return repr
		.replace(/\n/g,"`")
		.replace(/\t|\s/g,"")
		.split('||')
		.filter(function(num){
			return num != "`" ;
		})
		.map(function(n){
			return n.replace(/`\|/g,'');
		})
}

function splitMeasures (repr, cadence) {
	var accords = [] ;
	var duree = cadence ;
	repr
		.replace(/:/g,"") // ne pas tenir compte des reprises pour le moment
		.split('|')
		.forEach(function(e){
			e = e.trim();
			detail = e.match(/([A-Gb#]+)(.*)/);
			//console.log(detail[1],detail[2]);
			accords.push([e,detail[1],detail[2],duree])
		});
	return accords ;
}
