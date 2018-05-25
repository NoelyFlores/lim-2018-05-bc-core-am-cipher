window.cipher = {
	encode: function(offset, cadena){debugger
	const sinCifrar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		let numero1=cadena.length;//conflictos!! tama;o de mi mensaje
		let numero2=sinCifrar.length;//conflictos!! Numero de letras-27
		let numeroDesplazamiento=parseInt(offset);// Conflictos!!! parsear
		let letra=cadena.toUpperCase();
		let textCifrado="";//inicializando mi variable que ALMACENARA mi cifrado
		let posicionText;// variable que calcula la pocision nueva de mis caracteres
		for (let i = 0; i <=numero1 ; i++) {//recorrere por la cantidad de argumentos en mi mensaje	
			//var obtenerNumero=Math.sign(letra[i]);// (1,-1,0,NaN)
			if (!isNaN(letra[i])) {// quiero determinar si el argumento es un numero o no! (NaN->true,12->false) NO ES UN NUMERO???
				textCifrado+=letra[i];
			};
			for(let q=0; q<=numero2-1;q++)// Digamos sin cifrar es 27
				{ 									
					if(letra[i]!=" "){	// .........si mi letra es un espacio en blanco??..........	
							if(letra[i]==sinCifrar[q]){// comparo cada argumento de mi mensaje con el Array abecedario
									posicionCifrado=(q+numeroDesplazamiento)%numero2;
									textCifrado+=sinCifrar[posicionCifrado];
							}
						}else{
						     textCifrado+=" ";
						}					
				}
			}
		return textCifrado.toString(); 
	}, 
	decode: function(offset, cadena){debugger
	const sinCifrar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		let numero1=cadena.length;//conflictos!! tama;o de mi mensaje
		let numero2=sinCifrar.length;//conflictos!! Numero de letras-27
		let numeroDesplazamiento=parseInt(offset);// Conflictos!!! parsear
		let letra=cadena.toUpperCase();
		let textCifrado="";//inicializando mi variable que ALMACENARA mi cifrado
		let posicionText;// variable que calcula la pocision nueva de mis caracteres
		for (let i = 0; i <=numero1 ; i++) {//recorrere por la cantidad de argumentos en mi mensaje	
			//var obtenerNumero=Math.sign(letra[i]);// (1,-1,0,NaN)
			if (!isNaN(letra[i])) {// quiero determinar si el argumento es un numero o no! (NaN->true,12->false) NO ES UN NUMERO???
				textCifrado+=letra[i];
			};
			for(let q=0; q<=numero2-1;q++)
				{ 									
					if(letra[i]!=" "){	// .........si mi letra es un espacio en blanco??..........	
							if(letra[i]==sinCifrar[q]){// comparo cada argumento de mi mensaje con el Array abecedario
								posicionCifrado2=(q-numeroDesplazamiento)%numero2;
									if(posicionCifrado2<0){
										textCifrado+=sinCifrar[posicionCifrado2+numero2];
									}else{
										textCifrado+=sinCifrar[posicionCifrado2];
									}
							
							}
					}else{
						textCifrado+=" ";
					}					
				}
			}
		return textCifrado.toString(); 
	} 
};

