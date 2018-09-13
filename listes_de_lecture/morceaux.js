/* Playliste

|| %Cadence 		|| (4/4 | 6/8 | ..)
|| %Tempo 			|| (100 // 60  = 1 temp par seconde.)
|| %Instrument 		|| (Piano | Basse | percussion | ...)
|| %delai attaque / temps	|| (+|++|-|--)

*/

var liste_de_lecture = {

"01": {
	"titre" : "II-V-I Majeur",
	"accompagnement" : `
|| 4/4 ||
|| 100 ||
|| Piano ||
|| Basse ||
|| Batterie ||
||:	Dm7 	|	G7	|	Cmaj7	|	Cmaj7	  |
|	Gm7 	|	C7	|	Fmaj7	|	Fmaj7	  |
|	Cm7 	|	F7	|	Bbmaj7	|	Bbmaj7	  |
|	Fm7 	|	Bb7	|	Ebmaj7	|	Ebmaj7	  |
|	Bbm7	|	Eb7	|	Abmaj7	|	Abmaj7	  |
|	Ebm7	|	Ab7	|	Dbmaj7	|	Dbmaj7	  |
|	Abm7	|	Db7	|	Gbmaj7	|	Gbmaj7	  |
|	C#m7	|	F#7	|	Bmaj7	|	Bmaj7	  |
|	F#m7	|	B7	|	Emaj7	|	Emaj7	  |
|	Bm7 	|	E7	|	Amaj7	|	Amaj7	  |
|	Em7 	|	A7	|	Dmaj7	|	Dmaj7	  |
|	Am7 	|	D7	|	Gmaj7	|	Gmaj7	:||
`},

"02": {
		"titre" : "Jean-Pierre",
		"accompagnement" : `
|| 4/4 ||
|| 100 ||
|| Vent ||
|| b>> g>> | b b g>> | <e g <e g a | bb a g>> |
| <e g <e g>> | <e g <e g>> | <e g <e g a | bb a g>> |
| | | | ||
|| Piano ||
|| Basse ++ ||
|| Batterie ||
||:	G7	|	G7	|	G7	|	G7	  |
|	G7	|	G7	|	G7	|	G7	  |
|	G7	|	G7	|	G7	|	G7	:||
`},

"03": {
		"titre" : "Paroles",
		"accompagnement" : `
|| 4/4 ||
|| 120 ||
|| Piano ||
|| Basse ||
|| Batterie ||
||	Gb9 	|	C7  	|	Fm  	|	Fm  	||
||:	Fm7 	|	Bbm7	|	Eb9 	|	Fm  	|	Fm7 	|	Dbmaj7	|	C7	:||
|	Fm7 	|	Bbm7	|	Eb6 	|	Abmaj7	|	Dbmaj7	|	Csus	|	C7	|	Csus	|	C7	|
|	Fm7 	|	Fm7 	|	Bbm7	|	Bbm7	|
|	Fm7 	|	Fm7 	|	Bbm7	|	Eb6 	|	Abmaj7	|	Dbmaj7	|
|	Dbmaj7	|	Dbmaj7	|	Fm6 	|	G7  	|	C7  	|	C7	|
|	Fm7 	|	Fm7 	|	Bbm7	|	Bbm7	|
|	Eb9 	|	Eb9 	|	Abmaj7	|	Dbmaj7	|
|	G7  	|	C7  	|	Fm7 	|	Fm7 	:||
`},

"04": {
		"titre" : "Ben",
		"accompagnement" : `
|| 4/4 ||
|| 70 ||
|| Piano ||
|| Basse ||
|| Batterie ||
||	F	Bb7	|	F	Bb7	||
||:	F   	|	C7			|	F			|	C7sus		|
|	F7M 	|	Em7b5	A7	|	Eb7#11	D7	|	Db7#11	C7	|	F	Bb	|	F	Bb	|
|	Gm7	C7	|	F7M			|	Gm7	C7		|	F7M		|
|	Fm  	|	C7			|	Fm			|	C7sus		|
|	F7M 	|	Em7b5	A7	|	Eb7#11	D7	|	Db7#11	C7	|	F	Bb	|	F	Bb	|
|	F	Bb	|	F  	Bb  	|	F7M	 :||
`},

}
