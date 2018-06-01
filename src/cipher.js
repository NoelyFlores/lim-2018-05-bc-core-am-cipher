window.cipher = {
	encode: (offset, string)=>{//debugger
		const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		let displacement=parseInt(offset);// Conflictos!!! parsear
		let upperString=string.toUpperCase();
		let resultEncryption="";//inicializando mi variable que ALMACENARA mi cifrado
		let positionEncryption;
		for (let i = 0; i <=string.length ; i++) {//recorrere por la cantidad de argumentos en mi mensaje	
			if (!isNaN(upperString[i])) {// quiero determinar si el argumento es un numero o no! (NaN->true,12->false) NO ES UN NUMERO???
				resultEncryption+=upperString[i];
			}
			if(upperString[i]==" "){// Si mi letra es un espacio en blanco?
				resultEncryption+="";
			}
			for(let q=0; q<=alphabet.length-1;q++){// Digamos sin cifrar es 27
				if(upperString[i]==alphabet[q]){// comparo cada argumento de mi mensaje con el Array abecedario
					positionEncryption=(q+displacement)%alphabet.length;
					resultEncryption+=alphabet[positionEncryption];
					}						
				}
		}
		return resultEncryption.toString(); 
	}, 
	decode: (offset, string)=>{//debugger
		const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		let displacement=parseInt(offset);
		let upperString=string.toUpperCase();
		let resultEncryption="";
		let positionEncryption;
		for (let i = 0; i <=string.length ; i++) {
			if (!isNaN(upperString[i])) {
				resultEncryption+=upperString[i];
			}
			if(upperString[i]==" "){
				resultEncryption+="";
			}
			for(let q=0; q<=alphabet.length-1;q++){									
				if(upperString[i]==alphabet[q]){
					positionEncryption=(q-displacement)%alphabet.length;
					if(positionEncryption<0){// si mi posicion es negativo sumarlo la cantidad del array
						resultEncryption+=alphabet[positionEncryption+alphabet.length];
					}else{
						resultEncryption+=alphabet[positionEncryption];
					}
				}
			}
		}
		return resultEncryption.toString(); 
	}
	/*createCipherWithOffset: (offset)=>{

	}*/
};