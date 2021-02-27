[![shield to Agar.io Private Servers guild](https://discordapp.com/api/guilds/407210435721560065/embed.png?style=shield)](https://discord.gg/XcKgShT)

# :bulb: www.Libragar.pw :bulb:
<b>:bulb: Hi there. Here I will tell you how I created my own server. :) :bulb:</b>

Original repository -> 

https://github.com/Adil950/OgarMulti -> for more information-> /OgarMulti/blob/master/README.md 

## Running
Video Tutorial [![Watch the video](https://i.imgur.com/RHqwwEU.png)](https://youtube.com/libraa)






### 1 -> Read "C.A.W" if you want it to be "Always On".
https://github.com/Libra-Agario/Libragar/blob/main/C.A.W.txt    &   /Libragar/C.A.W.txt

### 2.  ~/workspace/Libragar -> ssh command enter. ->

`git clone https://github.com/Libra-Agario/Libragar`

`sudo apt install nodejs` And `Y`

`node -v`

`cd Libragar`

`npm install in`

`sudo apt update`

`sudo apt install build-essential`

`sudo apt-get install manpages-dev`

`gcc --version`

`sudo apt-get install nano`


### 3. ~/workspace/Libragar/cli -> 

`cd cli`
`autostart.sh`  <-- double click, then delete the line indicated in it. SAVE and then EXIT.

### 3.1  ~/workspace/Libragar/cli -> 

`chmod +x autostart.sh`

`pm2 list`

`pm2 start autostart.sh`

`pm2 list`

`pm2 save`



`pm2 unstartup` 

sample output! -> // `sudo env PATH=$PATH:/................`

output Copy + Paste + Enter -> 



`pm2 startup`

sample output! -> // `sudo env PATH=$PATH:/................`

output Copy + Paste + Enter -> 

`pm2 save`

`pm2 log 0 --lines n`


### 4. User Scripts + Tampermonkey Install ->

1. <center><a href="https://www.tampermonkey.net" "target=_blank"><font color=Blue> Install TamperMonkey (Click)</a>
2. Auto Script Install https://www.libragar.pw (Click) 
 
2.Manuel Script Install <center><a href=https://github.com/Libra-Agario/Libragar/blob/main/Libragar-Script-1.5V-(developed.).js/ target=_blank><font color=Blue>Libragar Script 1.5V (Click)</a>   &   /Libragar/Libragar-Script-1.5V-(developed.).js or .txt ->> Code Select All Copy ->> Tampermonkey (+) New Script  ->>  Select All Delete and Paste.


### 5. </b> Commands you can do via pm2 ssh.

Sample 1 ->  `pm2 send 0 'players'`

Sample 2 ->  `pm2 send 0 'addminion 1 100'`

All Command -> https://github.com/Libra-Agario/Libragar/blob/main/CommandList.txt   &   /Libragar/CommandList.txt








## Configuring

- To change how Libragar runs, modify `cli/settings.json`. // Game mode and in-game settings.

- After your first run, Libragar will drop two files in `cli/` / working directory: `log-settings.json` and `settings.json`.

- To change what gets logged, modify `cli/log-settings.json`.
