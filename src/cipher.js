window.cipher = {
	encode: (offset, string)=>{
		return cipher.hibrido(offset,string,true);
		}, 
	decode: (offset, string)=>{	
		return cipher.hibrido(offset,string,false);
		},
	createCipherWithOffset: (offset)=>{
		let WihtOffset={
			encode: (string)=>{
				return cipher.hibrido(offset,string,true);
			},
			decode: (string)=>{
				return cipher.hibrido(offset,string,false);
			}
		}
		return WihtOffset;
		},

	hibrido: (offSet,string,boolean)=>{
		const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		let displacement=parseInt(offSet);
		let upperString=string.toUpperCase();
		let resultEncryption="";
		let positionEncryption;
		let positionEncryption2;
		for (let i = 0; i <=string.length ; i++) {
			if (!isNaN(upperString[i])) {
				resultEncryption+=upperString[i];
			}
			if(upperString[i]==" "){
				resultEncryption+="";
			}
			for(let q=0; q<=alphabet.length-1;q++){									
				if(upperString[i]==alphabet[q]){
					if(boolean==true){
						positionEncryption=(q+displacement)%alphabet.length;
						resultEncryption+=alphabet[positionEncryption];
					}else{
						positionEncryption2=(q-displacement)%alphabet.length;
						if(positionEncryption2<0){
							resultEncryption+=alphabet[positionEncryption2+alphabet.length];
						}else{
							resultEncryption+=alphabet[positionEncryption2];
						}
					}
				}
			}
		}
		return resultEncryption.toString(); 
	}
};
