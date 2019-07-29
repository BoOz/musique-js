// lire la partition
function lirePartition(morceau){
	
	//console.log(morceau);
	
	var partition = {
			instruments:[],
			cadence:0, tempo:0, nb_mesures:0, duree:0, grille: morceau,
			parties:[{melodie:[],accords:[]}]
		};
	
	var delai, duree_temps = 0 ;
	
	var lesParties = splitparts(morceau) ;
	
	// console.log("hop", partition);
	
	lesParties.forEach(function(e,i){
		
		// console.log(i,e);
		
		// intercepter les delais éventuels associés aux instrument 
		// + / -
		var delai = 0 ;
		var res = e.match(/\++/gi) ;
		if(res){
			// nombre de quart de temps de delais + ou -
			delai = res[0].length * duree_temps / cadence
			
			e = e.replace(/\++/gi, "").trim();
			//console.log(">" + e + "<", res, delai);
		}
		
		switch(e.trim()) {
			case "Saxophone":
				instrument = "alto_sax"
				partition.instruments.push([instrument,delai]);
				break;
			case "Vent":
				instrument = vents[ vents.length * Math.random() << 0]
				partition.instruments.push([instrument,delai]);
				break;
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
			partition.tempo = tempo = e.trim() ;
			duree_temps = 60 / tempo ;
			//console.log("tempo",e,duree_temps);
		}
		
		// Parties incluant des mesures ?
		if(e.match(/\|/)){
			var mesures = splitMeasures(e,cadence) ;
			
			// console.log("mesures lues dans une partie", partition.parties);
			// (function(partition.parties) {})(partition.parties);
			
			var mel = partition.parties[partition.parties.length-1].melodie ;
			var acc = partition.parties[partition.parties.length-1].accords ;
			
			if(mesures.accords.length > 0){
				
				var nb = mesures.accords.length ;
				partition.nb_mesures += (e.split("|").length - 1 + 1) ;
				
				if(mel.length > 0 || partition.parties[0] == {melodie:[],accords:[]}){
					partition.parties[partition.parties.length-1] = {melodie:mel,accords:mesures.accords};
				}
				else
					partition.parties.push({melodie:mel,accords:mesures.accords});
			}
			
			if(mesures.melodie.length > 0){
				// cette égalité ne marche pas... du coup partie vide
				// console.log(partition.parties[0],{melodie:[],accords:[]});
				if(acc.length > 0 || partition.parties[0] == {melodie:[],accords:[]}){
					//console.log("hopla");
					partition.parties[partition.parties.length-1] = {melodie:mesures.melodie,accords:acc};
				}
				else
					partition.parties.push({melodie:mesures.melodie,accords:acc});
			}
			
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
		.replace(/\t/g," ")
		.split('||')
		.filter(function(num){
			return num != "`" ;
		})
		.map(function(n){
			return n.replace(/`\|/g,'');
		})
}

/*

Renvoie une mélodie ou des accords en fonction de la notation

Mélodie avec des lettres minuscules et des < ou >
<<<< = demi croche
<<< = demi croche pointée
<<c = croche
<c = croche pointée
c = noire
c> = noire pointée
c>> = blanche
c>>> = blanche pointée
c>>>> = ronde

Accords en notation anglosaxone
C7mb5
C°
...
*/

function splitMeasures (repr, cadence) {
	
	var accords = [] ;
	var melodie = [] ;
	
	var duree = cadence ;
	
	repr
		.replace(/:/g,"") // ne pas tenir compte des reprises pour le moment
		.split('|')
		.forEach(function(e,i){
			
			//console.log("mesure",i,e);
			
			var accords_lus = e.match(/([A-G](?:[b#])?)([^ ]*)/);
			var melodie_lue = e.match(/(?:<*)?[a-g]{1}(?:[b#])?([1-9]*)(?:>*)?(?=\s)/g);
			
			if(accords_lus){
				// splitter sur espaces si plusieurs accords
				var acc_mesure = e.split(" ").filter(function(n){
						return n != "" ;
				});
				
				acc_mesure.forEach(function(a){
					accords_lus = a.match(/([A-G](?:[b#])?)([^ ]*)/);
					// console.log("ac",accords_lus,accords_lus[1],accords_lus[2]);
					accords.push([e,accords_lus[1],accords_lus[2].trim(),duree / acc_mesure.length]) ;
				});
				
			}else if(melodie_lue){
				//console.log("mel",e,melodie_lue);
				
				melodie_lue.forEach(function(note){
					var d = note.match(/(<*)([a-g](?:[b#])?[0-9]*)(>*)/) ;
					var note = d[2];
					var duree = (d[3])? d[3] : (d[1])? d[1] : 1 ;
					// console.log(note,duree);
					
					switch(duree) {
						case ">>>>":
							duree = 4 ;
							break;
						case ">>>":
							duree = 3 ;
							break;
						case ">>":
							duree = 2 ;
							break;
						case ">":
							duree = 1.5 ;
							break;
						case "<":
							duree = 1/2 ;
							break;
						case "<<":
							duree = 1/4 ;
							break;
						case "<<<":
							duree = 1/16 ;
							break;
						case "<<<<":
							duree = 1/12 ;
							break;
						default:
							duree = 1 ;
					}
					// la note et son altération éventuelle
					// console.log({"note":note,"duree":duree, "nombre_midi":note2midi(note)})
					melodie.push([note2midi(note),duree]);
				});
			}
		});
	
	return {accords:accords, melodie:melodie} ;
}
