var dmin = 10000000.0;
var N = 0;
var NEdges = 0;
var p = [];
var k = 0;
var l = 0;
var j = 0;
var sleep;
var nodes=null;
var edges=null;
var options={};
var container=null;
var data={};
var x_encontrada = 0, y_encontrada = 0;
$(document).ready(function()
{

    function distancia(a, b){
        return Math.sqrt((a.x - b.x)*(a.x - b.x)+(a.y - b.y)*(a.y - b.y));
    }

    function combinatoria(n, p){
        return math.factorial(n)/(math.factorial(n-p)*math.factorial(p));
    }

    function limpiar(options){
        if(edges != null || nodes != null)
        {
            edges.clear();
            nodes.clear();
        }
        else
        {
            edges = null;
            nodes = null;
        }
        
        dmin = 10000000.0;
        if(options){
            var domN = anime({
                targets: '#N',
                value: 2,
                round: 2,
                easing: 'easeInOutExpo'
            });
            var domAttributes = anime({
                targets: '#domAttributes input',
                value: 0,
                round: 2,
                easing: 'easeInOutExpo'
            });
        }
        
        N = 0;
        NEdges = 0;
        p = [];
        k = 0;
        l = 0;
        j = 0;

        if(sleep != null){
            clearInterval(sleep);
        }

        sleep = null;
        options={};
        container=null;
        data={};
        x_encontrada = 0;
        y_encontrada = 0;
    }
    
    $('.modal').modal();

    $('#cargar').click(function()
    {
        limpiar(0);
        nodes = [];
        edges = [];
        N = parseInt($("#N").val()); 
        NEdges = parseInt(combinatoria(N, 2));
        
        if(N != 0)
        {
            for(i = 0; i< N; i++)
            {
                p[i] = new Object();
                p[i].x = Math.random()*500;
                p[i].y = Math.random()*500;
                nodes.push({
                    id: i,
                    x: p[i].x,
                    y: p[i].y,
                    shape: "star",
                    color: "yellow",
                    fixed: true,
                    size: 8,
                    label: ""+i
                });
            }
            for(x = 0; x < N; x++)
            {
                for(y = x + 1; y < N; y++)
                {
                    edges.push({
                        id: j,
                        from: x,
                        to: y,
                        hidden: true
                        
                    });
                    j++;
                }
            }
            nodes = new vis.DataSet(nodes);
            edges = new vis.DataSet(edges);
            
            container = $('#mynetwork')[0];   
            data = {
                nodes: nodes,
                edges: edges
            };
            options = 
            {
                interaction:{
                    dragNodes: false,
                    dragView: false
                },
                edges:{
                    smooth: 
                    {
                        enabled: true,
                        type: "discrete",
                        roundness: 0
                    }
                } 
            };
            
            network = new vis.Network(container, data, options);
        }
    });

    function FBruta(){
        if(k > 0){
            edges.update({
                id: k-1, 
                hidden: true
            });
        }
        if(k >= NEdges)
        {
            edges.update({
                from: x_encontrada,
                to: y_encontrada,
                hidden: false
            });
            k = 0;
            clearInterval(sleep);
            return;
        }
        
        edges.update({
            id: k, 
            hidden: false
        });
        //Inicio algoritmo Fuerza bruta
        var dist = 0;
        var e = edges.get(k);
        var x_local = e.from;
        var y_local = e.to;
        
        if((dist = distancia(p[x_local], p[y_local])) < dmin){
            dmin = dist;
            x_encontrada = x_local;
            y_encontrada = y_local;
        }

        var domAttributes = anime({
            targets: '#domAttributes input',
            value: dmin,
            round: 2,
            easing: 'easeInOutExpo'
        });
        k++;
    }

    function shell(arreglo, n){
        var k = Math.trunc(n/2), b = 0, i = 0;
        var tempx = 0, tempy = 0;
        while(k >= 1){
            b = 1;
            while(b != 0){
                b = 0;
                for(i = k;i <= (n-1);i++){
                    if(arreglo[i-k].x > arreglo[i].x){
                        tempx = arreglo[i].x;
                        tempy = arreglo[i].y;
                        arreglo[i].x = arreglo[i-k].x;
                        arreglo[i].y = arreglo[i-k].y;
                        arreglo[i-k].x = tempx;
                        arreglo[i-k].y = tempy;
                        b = b + 1;
                    }
                }
            }
            k = Math.trunc(k/2);
        }
        
        return arreglo;
    }
    
    //Algoritmo DyV
    function DyVCumulo(stars, num){
        var inicio, fin, w, z, dist = 0;
        console.log(num+": ok");
        console.log(stars);
        //Si no hay pares de puntos, salimos
        if(num <= 1){
            
            return;
        }

        
        //Ordenamos los puntos con respecto a la coordenada x
        stars = shell(stars, num);
        //Buscar en la izquierda recursivamente
        DyVCumulo(stars, Math.trunc(num/2));

        //Buscar en la derecha recursivamente
        //DyVCumulo(stars + Math.trunc(num/2), Math.trunc((num+1)/2));
        
        

        //Hallar los límites del conjunto central
        console.log(stars[num/2].x - stars[num/2].x);
	    for(inicio = num/2; inicio > 0 && stars[num/2].x - stars[inicio].x < dmin; inicio--);
        for(fin = num/2; fin < num-1 && stars[fin].x - stars[num/2].x < dmin; fin++);
        
        //Búsqueda exhaustiva en el conjunto central
	    for(w = inicio; w <= fin; w++)
        for(z = w + 1; z <= fin; z++)
        if((dist = distancia(stars[w], stars[z])) < dmin){
            dmin = dist;
            var domAttributes = anime({
                targets: '#domAttributes input',
                value: dmin,
                round: 2,
                easing: 'easeInOutExpo'
            });
        }
    }

    $('#bruta').click(function()
    {   
        sleep = setInterval(FBruta, 800);
    });   

    $('#limpiar').click(function()
    {   
        limpiar(1);
    }); 

    $('#dyv').click(function()
    {   
        var s = [];
        for(i = 0; i < N; i++){
            s[i] = new Object();
            s[i].x = p[i].x;
            s[i].y = p[i].y;
        }

       DyVCumulo(s, N);
    }); 
});