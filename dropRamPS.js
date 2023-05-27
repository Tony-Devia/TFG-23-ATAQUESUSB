layout('us') 
 
press("GUI r") 
delay(500) 
type("powershell\n")
delay(100)
 
type('$url1="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";$lag=0; while ($lag -lt 10){Start-Process chrome.exe -ArgumentList @($url1) }\n')

