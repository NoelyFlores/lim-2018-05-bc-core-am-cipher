window.onload=function() {
	DOMCipherEncode();
	// body...
}
DOMCipherEncode=()=>{
	var offsetNumber=document.getElementById("offsetNumber");
	var textMessage=document.getElementById("cipherText");
	var offsetClave=document.getElementById("offsetClave");
	// 	ENCRIPTAR
	document.getElementById("buttonCipherText").addEventListener("click",()=>{debugger
		if(offsetNumber.value!="" && textMessage.value!=""){
			document.getElementById("divCipher").style.display="none";
			document.getElementById("divDescipher").style.display="block";
			document.getElementById("warning").style.display="none";			
			document.getElementById("cipherMessage").innerHTML=cipher.encode(offsetNumber.value,textMessage.value);
		}else{
			document.getElementById("warning").style.display="block";
		}
	});
	// DESEMCRIPTAR
	document.getElementById("buttonDecipherText").addEventListener("click",()=>{
		if(offsetClave.value!="" && offsetClave.value==offsetNumber.value){
			document.getElementById("warning2").style.display="none";
			document.getElementById("cipherMessage").innerHTML=cipher.decode(offsetClave.value,cipher.encode(offsetNumber.value,textMessage.value));
		}else{
			document.getElementById("warnnig2").style.display="block";
		}
	});
	// VALIDAR INPUT
	offsetNumber.addEventListener("keypress",soloNumeros);
	offsetClave.addEventListener("keypress",soloNumeros);

	 function soloNumeros(e){debugger
	 	var key = window.event ? e.which : e.keyCode;
 		if (key < 48 || key > 57) {
   			 e.preventDefault();
  			}
	}
} 