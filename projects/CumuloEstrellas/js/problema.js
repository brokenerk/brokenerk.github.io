// ----------------------------------------------------- 
//			DESCRIPCION DE CUMULO DE ESTRELLAS
// -----------------------------------------------------

descripcion = document.getElementById("problemaDesc");
descripcion.innerHTML = '' +
	'<font size=4>' +
		'<div class="text-normal">' +
			'El problema es: <span class="cfont"> Dado un conjunto de puntos P, hallar el par de puntos más cercanos</span>.' +
			' Sabemos que la distancia entre dos puntos <span class="cfont">i</span> y <span class="cfont">j</span> es: ' +
		'</div>' +
		'<div>' +
			'<img src="./images/distancia.PNG">' +
		'</div>' +
		'<div class="sub-container">' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons">bookmark</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
						'<span><font size=5 face="Comic Sans MS">Solución Bruta</font></span> ' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="text-normal">' +
			'Podríamos obtener todos los pares de puntos que existen, comparar dichos pares y quedarse con el más pequeño. ' +
			'Eso nos generaría:	' +
		'</div> ' +
		'<div class="images-container"> ' +
			'<div class="images-row">' +
				'<img src="./images/Pares.PNG"> ' +
			'</div>' +
			'<div class="images-row">' +
				'<img src="./images/Complejidad.PNG"> ' +
			'</div>' +
		'</div> ' +
		'<div class="text-normal"> ' +
			'La solución es rápida y corta con casos pequeños, pero al incrementar el número se convertiría en una búsqueda exhaustiva.	' +
		'</div>' +
		'<br> ' +
		'<div class="sub-container">' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons">bookmark</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
						'<span><font size=5 face="Comic Sans MS">Solución con Divide y vencerás</font></span> ' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="text-normal"> ' +
			'Podríamos obtener todos los pares de puntos que existen, comparar dichos pares y quedarse con el más pequeño. ' +
			'Eso nos generaría: ' +	
		'</div>' +
	'</font>';
	


