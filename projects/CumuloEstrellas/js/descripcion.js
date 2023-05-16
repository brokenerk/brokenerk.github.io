// ----------------------------------------------------- 
//			DESCRIPCION DE DIVIDE Y VENCERAS
// -----------------------------------------------------

var descripcion = document.getElementById("dyvDesc");
descripcion.innerHTML = '' +
	'<font size=4>' +
			'La técnica Divide y vencerás (Divide and conquer) consiste en los siguientes pasos:'+
			'<br>' +
		'<br>' +
		'<div class="flex-container">' +
		'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle green">done_all</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Descomponer el problema en una serie de subproblemas de menor tamaño ' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle green">done_all</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Resuelve los subproblemas usando siempre la misma técnica' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle green">done_all</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Combina las soluciones parciales' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<div class="myrow">' +			
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle green">done_all</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Obtiene la solución del problema original' +
					'</span>' +
				'</div>' +
			'</div>' +	
			'<br>' +
		'</div>' +
		'<div class="text-normal">' +
			'<br>' +
			'Dividir y vencer es la base de varios algoritmos eficientes para casi cualquier tipo'+
			' de problema como, por ejemplo, algoritmos de ordenamiento '+
			'(<span class="cfont">mergesort, quicksort, entre otros</span>), multiplicar números '+
			'grandes (<span class="cfont">Karatsuba</span>), análisis sintácticos (<span class="cfont">top-down</span>)'+
			' la transformada discreta de Fourier, multiplicación rápida de matrices (<span class="cfont">Strassen</span>), etc.' +
		'</div>' +
		'<br>' +
		'<div class="code-contener">' +
			'<div class="code-row">' +
				'<span class="cfont-function"> divideYvenceras</span>' +
				'<span class="cfont">(</span>'+ 
				'<span class="cfont-variable"> problema </span>' +
				'<span class="cfont">)</span>' +
			'</div> ' +
			'<div class="code-row">' +
				'<span class="cfont"> { </span>' +
			'</div> ' + 
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-level1">' +
					'<span class="cfont-if"> si </span>' + 
					'<span class="cfont-variable"> el problema es trivial </span>' +
				'</div> ' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-identation"> </div>' +
				'<div class="code-level2">' +
					'<span class="cfont"> entonces resolver el problema </span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-level1">' +
					'<span class="cfont-if"> si no </span>' +
					'<span class="cfont-variable"> es trivial </span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-level1">' +
					'<span class="cfont"> { </span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-identation"> </div>' +
				'<div class="code-level2">' +
					'<span class="cfont"> descomponer el problema en n subproblemas más pequeños;</span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-identation"> </div>' +	
				'<div class="code-level2">' +
					'<span class="cfont-if"> para </span>' + 
					'<span class="cfont">i </span> ' +
					'<span class="cfont-if">= </span>' +
					'<span class="cfont">1</span>' +
					'<span class="cfont-if">hasta  </span>' +
					'<span class="cfont"> n </span>' +
					'<span class="cfont-if">hacer</span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-identation"> </div>' +
				'<div class="code-identation"> </div>' +		
				'<div class="code-level3">' +
					'<span class="cfont-function"> divideYvenceras</span>' +
	 				'<span class="cfont">(</span>' +
	 				'<span class="cfont-variable"> subproblemaK </span>' +
	 				'<span>)</span>' +
	 				'<span class="cfont"></span>;</span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-identation"> </div>' +		
				'<div class="code-level2">' +
					'<span class="cfont"> combinar las n soluciones; </span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<div class="code-identation"> </div>' +	
				'<div class="code-level1">' +
					'<span class="cfont"> }</span>' +
				'</div>' +
			'</div>' +
			'<div class="code-row">' +
				'<span class="cfont"> } </span>' +
			'</div>' +
		'</div>' +
		'<div class="text-normal">' +
			'<br>' +
			'Para que la aplicación del método divide y vencerás, convenga debe cumplirse que:'+
		'</div>' +
	'<br>' +
		'<div class="flex-container">' +
		'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle pink">arrow_forward</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Las operaciones descomponer y combinar deben ser bastante eficientes.' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle pink">arrow_forward</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' El número de subproblemas generados sea pequeño.' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<div class="myrow">' +
				'<div class="space-class"> </div>' +
				'<div class="icons-container">' + 
					'<i class="small material-icons circle pink">arrow_forward</i>' +
				'</div>' +
				'<div class="space-class"> </div>' +
				'<div class="text-container">' +
					'<span>' +
						' Los subproblemas sean aproximadamente del mismo tamaño y no solapen entre sí.' +
					'</span>' +
				'</div>' +
			'</div>' +
			'<br>' +
			'<br>' +
		'</div>' +
	'</font>';

		/* dividir " +
		"el problema original en subproblemas más sencillos de tal forma que estos " + 
		"se puedan calcdivar de forma sencilla. Como último paso, se combinan los " +
		"resdivtados de cada subproblema para obtener la solución del problema original " ; 
*/
