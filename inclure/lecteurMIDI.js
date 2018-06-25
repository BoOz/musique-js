function lecteurMidi(morceau){
		
		var instruments = morceau.instruments ;
		var parties = morceau.parties ;
		var nb_mesures = morceau.nb_mesures;
		var cadence = morceau.cadence;
		var tempo = morceau.tempo ;
		var grille = morceau.grille ;
		
		// console.log(instruments,parties,nb_mesures,cadence,tempo);
		
		// Jouer la partition
		var start = 5 ;
		var time = start ; // délai de chargement
		var nb_temps = nb_mesures * cadence ;
		var ac = new AudioContext() ;
		var options = {} ;
		var accords = [] ;
		var duree_temps = 60/tempo ;
		
		// parcourir toutes les parties du morceaux et trouver les notes à jouer
		parties.forEach(function(e){
			//console.log(e.accords);
			accords = accords.concat(e.accords);
		});
		
		//console.log(accords);
		
		instruments.forEach(function(e,i) {
			
			var note = '' ;
			var noteMidi = 0 ;
			var rythme = '' ;
			
			var options = { nameToUrl: localUrl}
			if(e[0] == "percussion"){
				options = { nameToUrl: localUrl, gain:0.8 , delay:e[1]}
			}
			
			Soundfont.instrument(ac, e[0], options).then(function (inst) {
				
				//console.log("inst :> " + e[0] + " - delai : " + e[1] + " - ac.currrentTime : " + ac.currentTime);
				//console.log('Loaded notes: ', Object.keys(inst.buffers))
				
				time = start ;
				delai = e[1] ;
				// swicth par type d'instruments (percussion, basse, accompagnement)
				var index_note = 0 ;
				
				for (t=1; t <= nb_temps; t++){
					
					var temps_relatif = t%cadence ;
					
					note = accords[index_note][1];
					noteMidi = note2midi[note];
					
					var fondamentale_accord = note ;
					var type_accord = accords[index_note][2] ;
					
					//console.log(t,note,noteMidi,fondamentale_accord,type_accord);
					
					// Temps fort sur le 1
					var note_gain = 0.5 ;
					if(temps_relatif == 1)
						note_gain = 0.8 ;
					

					// "Accompagnement"
					if(e[0].match(/.*(piano|choir|phone|string|organ|brass).*/i)){
						
						//console.log(type_accord,note);
						var accord = notes_accord(type_accord,note,0);
						
						accord.forEach(function(e,i) {
							inst.play(e,time + delai, {duration: 0.8 * duree_temps, gain:note_gain});
						});
					}

					
					// "Basse"
					if(e[0].match(/.*bass.*/i)){
						
						// notes_basse(fondamentale, type_accord temps)
						note = notes_basse(fondamentale_accord, type_accord,t) ;
						
						rythme = rythmes["noire"] ;
						
						inst.play(note, time + delai, {duration: rythme * duree_temps, gain:note_gain});
					}
					//console.log(e[0] + "temps : " + temps_relatif + " /" + index_note + "/ ("+ t +")")
				// "Percu"
					if(e[0].match('percu')){
						// console.log("percu",t);
						// 49 	Crash Cymbal 1
						inst.play(35,time , {duration: duree_temps});
						if(t%2 == 0){
							inst.play(40,time, {duration: duree_temps});
						}
					}
					
					time += duree_temps ;
					
					// fragile, si pas 4 temps
					if(temps_relatif == 0)
						index_note += 1 ;
				}
				
				//  fin du morceau
				if(i == 0){ // une seule fois
					// retour à l'accueil à l a fon du morceau
					// setTimeout(function(){ window.location.href = "/"; }, time*1000);
					console.log("Fin", time,i);
				}
			});
		});
	
	// on est tot :
	// console.log("Fin 2", time);
	//console.log(ac);
	
	return true ;
}

function localUrl (name) {
	console.log('assets/' + name + '-ogg.js');
  return 'assets/' + name + '-ogg.js'
}

