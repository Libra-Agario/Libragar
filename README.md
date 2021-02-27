[![shield to Agar.io Private Servers guild](https://discordapp.com/api/guilds/407210435721560065/embed.png?style=shield)](https://discord.gg/XcKgShT)

# :bulb: www.Libragar.pw :bulb:
<b>:bulb: Hi there. Here I will tell you how I created my own server. :) :bulb:</b>

Original repository -> https://github.com/Adil950/OgarMulti -> for more information -> /OgarMulti/blob/master/README.md 

## Running
Video Tutorial [![Watch the video](https://i.imgur.com/RHqwwEU.png)](https://youtube.com/libraa)






### 1 -> C.A.W.txt https://github.com/Libra-Agario/Libragar/blob/main/C.A.W.txt
open this and read the details inside.

### 2.  ~/workspace -> ssh command enter. ->

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


<b> 3.</b> ~/workspace/Libragar -> 

`cd cli`

`chmod +x autostart.sh`

`pm2 list`

`pm2 start autostart.sh`

`pm2 list`

`pm2 save`



`pm2 unstartup` 

output -> // sudo env PATH=$PATH:/home/.........

output Copy + Paste + Enter -> 



`pm2 startup`

output -> // sudo env PATH=$PATH:/home/.........

output Copy + Paste + Enter -> 

`pm2 save`

`pm2 log 0 --lines n`

<b> 4. </b> User Scripts Install ->

https://github.com/Libra-Agario/Libragar/blob/main/Libragar-Script-(developed.).txt   OR   /main/Libragar-Script-(developed.).js

<b> 5. </b> Commands you can do via pm2 ssh.

Sample 1 ->  `pm2 send 0 'players'`

Sample 2 ->  `pm2 send 0 'addminion 1 100'`

All Command -> https://github.com/Libra-Agario/Libragar/blob/main/CommandList.txt








## Configuring

- After your first run, OgarII will drop two files in `cli/` / working directory: `log-settings.json` and `settings.json`.

- To change how OgarII runs, modify `cli/settings.json`.

- To change what gets logged, modify `cli/log-settings.json`.
