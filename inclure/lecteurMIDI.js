function lecteurMidi(morceau){
	
	var ac = new AudioContext() ;
	var time = ac.currentTime + 3 ; // le temps de tout charger
	var start = time ;
	
	var duree_temps = 60/morceau.tempo ;
	
	console.log(morceau);
	
	// compter le temps
	// console.log("duree",morceau.duree);
	// console.log("duree d'un temps",duree_temps);
	
	// fonction avec une closure pour conserver le counter.
	// mais aussi invoquée immédiatement (function{})() pour que ca marche...
	// https://www.w3schools.com/js/js_function_closures.asp
	var add_temps = (function () {
		var counter = 0 ;
		return function () {
			counter += 1;
			document.getElementById("afficher_temps").innerHTML = counter ;
			return counter
		}
	})();
	
	// le tout dans un setInterval décalé par setTimeout.
	setTimeout(function(){
		var compteur_du_temps = setInterval(add_temps,duree_temps * 1000);
		setTimeout(function(){clearInterval(compteur_du_temps)}, morceau.duree * 1000);
	}, (start - duree_temps) * 1000);
	
	// concatener les parties
	var laMelodie = [] ;
	var lesAccords = [] ;
	morceau.parties.forEach(function(p){
		laMelodie = laMelodie.concat(p.melodie);
		lesAccords = lesAccords.concat(p.accords) ;
	});
	
	
	// console.log(laMelodie,lesAccords);
	
	/* Melodie */
	if(laMelodie.length > 0){
		
		var lead = morceau.instruments[0];
		var delai = 0 ;
		var nom = lead[0];
		// console.log(nom);
		delai = lead[1];
		
		var options = { nameToUrl: localUrl}
		Soundfont.instrument(ac, nom, options ).then(function (melodie) {
			time = start ;
			
			var notes = laMelodie ;
			
			// console.log(laMelodie);
			
			notes.forEach(function(e){
				
				var note = e[0] ;
				var duree = e[1] ;
				
				melodie.play(note , time + delai, { duration: duree * duree_temps});
				time += duree * duree_temps ;
			});
		});
	}
	
	morceau.instruments.forEach(function(instru){
		//console.log(instru);
		
		var nom = instru[0];
		var delai = instru[1];
		
		var options = { nameToUrl: localUrl }
		
		//console.log(nom,options);
		
		/* Percussions */
		if(nom == "percussion"){
			options = { nameToUrl: localUrl, gain:0.8 }
			Soundfont.instrument(ac, nom, options ).then(function (percu) {
				time = start ;
				
				for(i=0; i < morceau.nb_mesures * morceau.cadence; i++){
					// console.log("percu",t);
					// 49 	Crash Cymbal 1
					percu.play(35,time , {duration: duree_temps});
					
					if(i%2 == 1){
						percu.play(40,time + delai, {duration: duree_temps});
					}
					/**/
					time = time + duree_temps ;
				}
			});
		}
		
		/* Accords */
		if(accompagnements.indexOf(nom) > 0){
			Soundfont.instrument(ac, nom, options ).then(function (inst2) {
				
				// on reset le temps dans l'instru
				time = start ;
				
				lesAccords.forEach(function(e){
					
					// console.log(e);
					
					var fondamentale = e[1] ;
					var type = e[2] ;
					var duree = e[3] ;
					
					var notes = notes_accord(type,fondamentale,true);
					
					//console.log(notes);
					
					notes.forEach(function(n){
						inst2.play(n , time + delai , { duration: duree * duree_temps});
					});
					
					time += duree * duree_temps ;
				});
				
			});
		}
		
		/* Basse */
		if(nom.match(/bass/)){
			Soundfont.instrument(ac, nom, options ).then(function (basse) {
				
				// on reset le temps dans l'instru
				time = start ;
				
				lesAccords.forEach(function(e){
					
					// console.log(e);
					
					var fondamentale = e[1] ;
					var type = e[2] ;
					var duree = e[3] ;
					
					var note = notes_basse(fondamentale, type, 1);
					
					//console.log(notes);
					
					basse.play(note , time + delai , { duration: duree * duree_temps});
					
					time += duree * duree_temps ;
				});
			});
		}
		
	});
	
	return true ;
}

function localUrl (name) {
	console.log('assets/' + name + '-ogg.js');
  return 'assets/' + name + '-ogg.js'
}

