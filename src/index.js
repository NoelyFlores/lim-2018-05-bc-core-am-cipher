window.onload=function() {
	DOMCipherEncode();
	// body...
}
DOMCipherEncode=()=>{
	var num=document.getElementById("offsetNumber");
	var textMessage=document.getElementById("cipherText");
	var offsetClave=document.getElementById("offsetClave");
	document.getElementById("buttonCipherText").addEventListener("click",()=>{debugger
		if(num.value!="" && textMessage.value!=""){
			document.getElementById("messageCipher").style.display="none";
			document.getElementById("messageDes").style.display="block";
			document.getElementById("warnnig").style.display="none";			
			document.getElementById("cipherMessage").innerHTML=cipher.encode(num.value,textMessage.value);
		}else{
			document.getElementById("warnnig").style.display="block";
		}
			

	});
	document.getElementById("buttonDecipherText").addEventListener("click",()=>{
		if(offsetClave.value!="" && offsetClave.value==num.value){
			document.getElementById("warnnig2").style.display="none";
			document.getElementById("cipherMessage").innerHTML=cipher.decode(offsetClave.value,cipher.encode(num.value,textMessage.value));
		}else{
			document.getElementById("warnnig2").style.display="block";
		}
	});

} 