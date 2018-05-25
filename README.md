# musique-js

Musique MIDI programmée en javascript en utilisant l'API [WebAudio](https://www.w3.org/TR/webaudio/). 

# Usage
Les sons MIDI sont joués sur commande dans le navigateur.

# Démo
Écouter une mélodie aléatoire : [index.html](https://booz.github.io/musique-js/), voir tous les instruments MIDI : [demo.html](https://booz.github.io/musique-js/demo.html)

> Utilise le lecteur https://github.com/danigb/soundfont-player et les soundfonts https://gleitz.github.io/midi-js-soundfonts/

# Notes MIDI

```
Octave  	Note Numbers
	C 	C# 	D 	D# 	E 	F 	F# 	G 	G# 	A 	A# 	B
-1 	0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10 	11
0 	12 	13 	14 	15 	16 	17 	18 	19 	20 	21 	22 	23
1 	24 	25 	26 	27 	28 	29 	30 	31 	32 	33 	34 	35
2 	36 	37 	38 	39 	40 	41 	42 	43 	44 	45 	46 	47
3 	48 	49 	50 	51 	52 	53 	54 	55 	56 	57 	58 	59
4 	60 	61 	62 	63 	64 	65 	66 	67 	68 	69 	70 	71
5 	72 	73 	74 	75 	76 	77 	78 	79 	80 	81 	82 	83
6 	84 	85 	86 	87 	88 	89 	90 	91 	92 	93 	94 	95
7 	96 	97 	98 	99 	100 	101 	102 	103 	104 	105 	106 	107
8 	108 	109 	110 	111 	112 	113 	114 	115 	116 	117 	118 	119
9 	120 	121 	122 	123 	124 	125 	126 	127

```
# Instruments MIDI

```
Prog# 	Instrument Name 	Prog# 	Instrument Name 	Prog# 	Instrument Name
1 	Acoustic Grand Piano 	44 	Contrabass 	87 	Lead 7 (fifths)
2 	Bright Acoustic Piano 	45 	Tremolo Strings 	88 	Lead 8 (bass + lead)
3 	Electric Grand Piano 	46 	Pizzicato Strings 	89 	Pad 1 (new age)
4 	Honky-tonk Piano 	47 	Orchestral Harp 	90 	Pad 2 (warm)
5 	Electric Piano 1 	48 	Timpani  	91 	Pad 3 (polysynth)
6 	Electric Piano 2 	49 	String Ensemble 1 	92 	Pad 4 (choir)
7 	Harpsichord 	50 	String Ensemble 2 	93 	Pad 5 (bowed)
8 	Clavi 	51 	SynthStrings 1 	94 	Pad 6 (metallic)
9 	Celesta 	52 	SynthStrings 2 	95 	Pad 7 (halo)
10 	Glockenspiel 	53 	Choir Aahs 	96 	Pad 8 (sweep)
11 	Music Box 	54 	Voice Oohs 	97 	FX 1 (rain)
12 	Vibraphone 	55 	Synth Voice 	98 	FX 2 (soundtrack)
13 	Marimba  	56 	Orchestra Hit 	99 	FX 3 (crystal)
14 	Xylophone 	57 	Trumpet 	100 	FX 4 (atmosphere)
15 	Tubular Bells 	58 	Trombone 	101 	FX 5 (brightness)
16 	Dulcimer 	59 	Tuba 	102 	FX 6 (goblins)
17 	Drawbar Organ 	60 	Muted Trumpet 	103 	FX 7 (echoes)
18 	Percussive Organ 	61 	French Horn 	104 	FX 8 (sci-fi)
19 	Rock Organ 	62 	Brass Section 	105 	Sitar
20 	Church Organ 	63 	SynthBrass 1 	106 	Banjo
21 	Reed Organ 	64 	SynthBrass 2 	107 	Shamisen
22 	Accordion 	65 	Soprano Sax 	108 	Koto
23 	Harmonica 	66 	Alto Sax 	109 	Kalimba
24 	Tango Accordion 	67 	Tenor Sax 	110 	Bag pipe
25 	Acoustic Guitar (nylon) 	68 	Baritone Sax 	111 	Fiddle
26 	Acoustic Guitar (steel) 	69 	Oboe 	112 	Shanai
27 	Electric Guitar (jazz) 	70 	English Horn 	113 Tinkle Bell
28 	Electric Guitar (clean) 	71 	Bassoon 	114 	Agogo
29 	Electric Guitar (muted) 	72 	Clarinet 	115 	Steel Drums
30 	Overdriven Guitar 	73 	Piccolo 	116 	Woodblock
31 	Distortion Guitar 	74 	Flute 	117 	Taiko Drum
32 	Guitar harmonics 	75 	Recorder 	118 	Melodic Tom
33 	Acoustic Bass 	76 	Pan Flute 	119 	Synth Drum
34 	Electric Bass (finger) 	77 	Blown Bottle 	120 	Reverse Cymbal
35 	Electric Bass  (pick) 	78 	Shakuhachi 	121 	Guitar Fret Noise
36 	Fretless Bass 	79 	Whistle 	122 	Breath Noise
37 	Slap Bass 1 	80 	Ocarina 	123 	Seashore
38 	Slap Bass 2 	81 	Lead 1 (square) 	124 	Bird Tweet
39 	Synth Bass 1 	82 	Lead 2 (sawtooth) 	125 	Telephone Ring
40 	Synth Bass 2 	83 	Lead 3 (calliope) 	126 	Helicopter
41 	Violin 	84 	Lead 4 (chiff) 	127 	Applause
42 	Viola 	85 	Lead 5 (charang) 	128 	Gunshot
43 	Cello 	86 	Lead 6 (voice) 	  	 

Select 	Drum Type
35 	Bass Kick
36 	Rock Kick
37 	Side Kick
38 	Acoustic Snare
39 	Handclap
40 	Electric Snare
41 	Low Floor Tom
42 	Closed Hi-Hat
43 	High Floor Tom
44 	Pedal Hi-Hat
45 	Low Tom
46 	Open Hi-Hat
47 	Low Mid-Tom
48 	High Mid-Tom
49 	Crash Cymbal 1
50 	High Tom
51 	Ride Cymbal 1
52 	Chinese Cymbal
53 	Ride Bell
54 	Tambourine
55 	Splash Cymbal
56 	Cowbell
57 	Crash Cymbal 2
58 	Vibraslap
59 	Ride Cymbal 2
60 	High Bongo
61 	Low Bongo
62 	Mute High Conga
63 	Open High Conga
64 	Low Conga
65 	High Timbale
66 	Low Timbale
67 	High Agogo
68 	Low Agogo
69 	Cabasa
70 	Maracas
71 	Short Whistle
72 	Long Whistle
73 	Short Guiro
74 	Long Guiro
75 	Claves
76 	High Woodblock
77 	Low Woodblock
78 	Mute Cuica
79 	Open Cuica
80 	Mute Triangle
81 	Open Triangle
```
