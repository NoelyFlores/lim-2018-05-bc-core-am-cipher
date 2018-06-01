window.onload=function() {
	let offsetNumber=document.getElementById("offsetNumber");
	let textMessage=document.getElementById("cipherText");
	let offsetClave=document.getElementById("offsetClave");

	let menuHome=document.getElementById("home");
	let menuCipher=document.getElementById("divCipher");
	let menuDescipher=document.getElementById("divDescipher");
	// 	ENCRIPTAR

	document.getElementById("buttonCipherText").addEventListener("click",()=>{//debugger
		if(offsetNumber.value!="" && textMessage.value!=""){
			menuCipher.style.display="none";
			menuDescipher.style.display="block";
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
			document.getElementById("warning2").style.display="block";
		}
	});
	// VALIDAR INPUT
	offsetNumber.addEventListener("keypress",(e)=>{
		let key = window.event?e.which:e.keyCode;
		if(key < 48 || key > 57 ){
			e.preventDefault();
		}
	});
	offsetClave.addEventListener("keypress",(e)=>{
		let key = window.event?e.which:e.keyCode;
		if(key < 48 || key > 57 ){
			e.preventDefault();
		}		
	});
	// MENUS
	document.getElementById("menuHome").addEventListener("click",()=>{
		menuHome.style.display="block";
		menuCipher.style.display="none";
		menuDescipher.style.display="none";
	});
	document.getElementById("menuCifrar").addEventListener("click",()=>{
		menuHome.style.display="none";
		menuCipher.style.display="block";
		menuDescipher.style.display="none";
	});
	document.getElementById("menuDescifrar").addEventListener("click",()=>{
		menuHome.style.display="none";
		menuCipher.style.display="none";
		menuDescipher.style.display="block";
	});
}