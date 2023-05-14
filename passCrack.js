layout('es');			
//1 caracter
var starter=48;
var ender=57;
typingSpeed(50,0);
for(var i=starter;i<=ender;i++){
	type(String.fromCharCode(i)+"\n");
  press("Enter");

}
//2caracteres
for(var i=starter;i<=ender;i++){
	for(var j=starter;j<=ender;j++){
		type(String.fromCharCode(i,j)+"\n");
      press("Enter");
	}
}
//3 caracteres
for(var i=starter;i<=ender;i++){
	for(var j=starter;j<=ender;j++){
		for(var k=starter;k<=ender;k++){
			type(String.fromCharCode(i,j,k)+"\n");
          press("Enter");
		}	
	}
}