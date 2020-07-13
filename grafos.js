var Grafos = [
    {
    	vertices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    	arestas: [
			[0,2,6],[0,6,7],
			[1,5,10],[1,6,8],
			[2,0,6],
			[3,8,6],
			[4,9,8],
			[5,1,10],[5,10,11],[5,12,13],
			[6,0,7],[6,1,8],[6,7,5],[6,11,6],
			[7,2,14],[7,6,5],[7,12,8],[7,14,7],[7,15,10],
			[8,2,11],[8,3,6],[8,9,9],[8,15,12],[8,16,5],
			[9,4,8],[9,8,9],[9,16,7],
			[10,5,11],[10,11,7],
			[11,6,6],[11,10,7],[11,14,5],
			[12,5,13],[12,7,8],[12,14,5],[12,15,6],[12,18,7],[12,19,8],[12,23,15],
			[13,14,8],[13,19,7],[13,23,10],
			[14,7,7],[14,11,5],[14,12,5],[14,13,8],[14,18,11],
			[15,7,10],[15,8,12],[15,12,6],[15,16,8],[15,18,5],[15,20,10],
			[16,8,5],[16,9,7],[16,15,8],[16,17,7],[16,21,12],
			[17,16,7],[17,20,9],
			[18,12,7],[18,14,11],[18,15,5],[18,19,6],
			[19,12,8],[19,13,7],[19,18,6],[19,20,10],[19,22,9],[19,25,6],
			[20,15,10],[20,17,9],[20,18,7],[20,19,10],[20,21,7],
			[21,16,12],[21,20,7],[21,24,13],
			[22,19,9],[22,24,5],
			[23,12,15],[23,13,10],[23,25,9],
			[24,18,15],[24,21,13],[24,22,5],
			[25,19,6],[25,23,9]
			],
		
			posicao: [
			[160, 090], //0  A
			[110, 150], //1  B
			[250, 130], //2  C 
			[380, 115], //3  D
			[480, 120], //4  E     
			[050, 200], //5  F     
			[175, 190], //6  G      
			[230, 250], //7  H     
			[410, 185], //8  I     
			[490, 185], //9  J     
			[035, 290], //10  K     
			[080, 350], //11  L     
			[260, 330], //12  M     
			[90, 430], //13  N     
			[165, 380], //14  O     
			[350, 325], //15  P     
			[440, 260], //16  Q     
			[535, 260], //17  R     
			[350, 400], //18  S     
			[350, 475], //19  T     
			[445, 365], //20  U     
			[530, 385], //21  V     
			[430, 520], //22  w     
			[130, 500], //23  x
			[505, 455],  //24 y
			[240, 530]   //25 z
		]
	},
	    {			   
    	vertices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    	arestas: [
    		[0,2,5],[0,8,14], //
    		[1,2,6], //
    		[2,0,5],[2,1,6],[2,7,12],[2,8,11],[2,9,13], //
    		[3,4,6],[3,9,11], //
    		[4,3,6],[4,5,7],[4,17,10], //
    		[5,4,7],[5,10,8],[5,23,14],  //
    		[6,7,7],[6,11,8], //
    		[7,2,12],[7,6,7],[7,8,13],[7,9,14],[7,11,6],[7,12,13],[7,13,9],[7,16,14], //
    		[8,0,14],[8,2,11],[8,7,13],[8,13,5],[8,15,4], //
    		[9,2,13],[9,3,11],[9,7,14],[9,15,5],[9,17,7], //
    		[10,5,8],[10,17,9], //
    		[11,6,8],[11,7,6], //
    		[12,7,13],[12,13,8],[12,16,10], //
    		[13,7,9],[13,8,5],[13,12,8],[13,15,6],[13,16,12], //
    		[14,17,6],[14,18,11],[14,21,10],[14,23,9],  //
    		[15,8,4],[15,9,5],[15,13,6],[15,17,5],[15,18,7], //
    		[16,7,14],[16,12,10],[16,13,12],[16,17,9],[16,18,5],[16,19,4],[16,20,5], //
    		[17,4,10],[17,9,7],[17,10,9],[17,14,6],[17,15,5],[17,16,9], //
    		[18,14,11],[18,15,7],[18,16,5], //
    		[19,16,4],[19,20,6], //
    		[20,16,5],[20,19,6],[20,21,8],[20,22,7], //
    		[21,14,10],[21,20,8],[21,22,9],[21,23,7], //
    		[22,20,7],[22,21,9], //
    		[23,5,14],[23,14,9],[23,21,7] //
    	],
    	
    	posicao: [
    		[100, 040], //0  A
    		[200, 030], //1  B
    		[150, 090], //2  C
    		[320, 080], //3  D
    		[370, 040], //4  E
    		[420, 080], //5  F
    		[20, 170], //6  G
    		[90, 220], //7  H
    		[210, 225], //8  I
    		[285, 155], //9  J
    		[410, 170], //10  K
    		[20, 270], //11  L
    		[65, 385], //12  M
    		[185, 295], //13  N
    		[450, 230], //14  O
    		[285, 230], //15  P
    		[280, 400], //16  Q
    		[360, 230], //17  R
    		[280, 315], //18  S
    		[280, 480], //19  T
    		[370, 427], //20  U
    		[420, 340], //21  V
    		[465, 450], //22  X
    		[530, 305] //23  Z
    	]    	
    	
    },
];