layout('us') 
 
press("GUI r") 
delay(500) 
type("powershell\n")
delay(1000)
 
type("Get-Process | Where-Object {$_.MainWindowTitle -ne ""} | stop-process; (New-Object -comObject Shell.Application).Windows() | foreach-object {$_.quit()}\n")
