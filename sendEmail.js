layout('es') 
 
press("GUI r") 
delay(500) 
type("powershell\n")
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n")
delay(500)
type("echo $usbPath.name | Set-Clipboard")

press("GUI r") 
delay(500) 
type("chrome\n")
delay(1000)
for(var i = 0; i < 3; i++){
  press ("Tab")
}
delay(500)
press ("enter")
delay(10000)
for(var i = 0; i < 12; i++){
  press ("Tab")
}
press ("enter")
delay (500)

type("wulso97@gmail.com")

for(var i = 0; i < 5; i++){
  press ("Tab")
}
delay (100)
press ("enter")

for(var i = 0; i < 5; i++){
  press ("Tab")
}
press ("enter")
press ("CTRL V")
press ("enter")


for(var i = 0; i < 4; i++){
  press ("Tab")
}

press ("CTRL E")
press ("enter")
press ("Tab")
press ("Enter")