var Kruskal = function(_grafo)
{

var grafo = _grafo;
var A = [];
var B = [];
var pi = {};
var rank = {};
var indiceInvertido = [];

var countGrau = [];

var result = {};
result.vertices = grafo.vertices;
result.posicao = grafo.posicao;

function make_set(x)
{
	pi[x] = x;
	rank[x] = 0;
}

function find_set(x)
{
	while(x != pi[x])
		x = pi[x];
	return x;
}

function union(x,y)
{
	rx = find_set(x);
	ry = find_set(y);
	if(rx==ry) return;
	if(rank[rx]>rank[ry])
		pi[ry] = rx;
	else
	{
		pi[rx] = ry;
		if(rank[rx] == rank[ry])
			rank[ry] = rank[ry] + 1;
	}
}

function contaGrau(){
	countGrau = []
	for (var i = 0; i <= 26; i++){
		countGrau[i] = 0;
		for (var v in result.arestas){
			if ((result.arestas[v][0] == i) || (result.arestas[v][1] == i))
				countGrau[i]++;
		}
	}
}

function findAndRemoveVertice(){
	B = result.vertices;
	for (var v = 0; v <= countGrau.length; v++){
		if (countGrau[v] == 1){
			B.splice(B.indexOf(v),1);
		}
	}
	result.vertices = B;
	B = [];
}

function findAndRemoveAresta(){
	B = result.arestas;
	for (var i = 0; i <= countGrau.length; i++){
		for (var v in result.arestas){
			if (countGrau[i] == 1){
				if ((result.arestas[v][0] == i) || (result.arestas[v][1] == i))
					B.splice(v,1)
					// B.push(result.arestas[v])
			}
		}
	}

	result.arestas = B;
	
	if (result.arestas.length == 0){
		result.arestas[0] = [0,0,0];
	}
	B = [];
}

var removeGrau = document.getElementById("removeGrau");
removeGrau.onclick = function()
{
	var canvas = document.getElementById("grafo");
	var grafo = new graphBuilder(canvas);

	contaGrau(result.arestas);
	findAndRemoveVertice();
	findAndRemoveAresta();

	grafo.init(result);
}

	for(var vertice in grafo.vertices)
		make_set(vertice);

    for(var i in grafo.arestas)
    {
        if(!indiceInvertido[grafo.arestas[i][2]])
            indiceInvertido[grafo.arestas[i][2]] = [];
        indiceInvertido[grafo.arestas[i][2]].push(grafo.arestas[i]);
    }
		
	for(var i in indiceInvertido)
	{
		for(var j in indiceInvertido[i])
		{
			if(find_set(indiceInvertido[i][j][0]) != find_set(indiceInvertido[i][j][1]))
			{
				A.push(indiceInvertido[i][j])
				union(indiceInvertido[i][j][0],find_set(indiceInvertido[i][j][1]));
			}
		}
	}
	result.arestas = A;
	return result;
}