[![shield to Agar.io Private Servers guild](https://discordapp.com/api/guilds/407210435721560065/embed.png?style=shield)](https://discord.gg/XcKgShT)

# :bulb: www.Libragar.pw :bulb:
Hi :bulb: Hello there. Here I will tell you how I created my own server. :) :bulb:

Original repository -> https://github.com/Adil950/OgarMulti -> for more information -> /OgarMulti/blob/master/README.md 

## Running
Video Tutorial [![Watch the video](https://i.imgur.com/RHqwwEU.png)](https://youtube.com/libraa)


1. Make sure you have node.js version 8 or greater. https://nodejs.org/ja/blog/release/v8.11.1/  choose your system bits


2. Make sure you have a C++11 compliant compiler for building uWebSockets.
    - If you're on Windows, `npm install -g windows-build-tools`.
    - If you're on GNU/Linux, use your package manager to install a supported C++ compiler such as GCC.
    - 

3.  ~/workspace -> ssh command enter. ->

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


4. ~/workspace/Libragar -> 

`cd cli`

`chmod +x autostart.sh`

`pm2 list`

`pm2 start autostart.sh`

`pm2 list`

`pm2 save`



`pm2 unstartup` 

// output-> ///[PM2] To unsetup the Startup Script, copy/paste the following command: !

// output Copy + Paste + Enter -> 



`pm2 startup`
`output-> // [PM2] To unsetup the Startup Script, copy/paste the following command: !
// output Copy + Paste + Enter -> `


`pm2 save`

`pm2 log 0 --lines n`

`pm2 send 0 'addminion 1 100'`

5. Commands you can do via pm2 ssh.

Sample 1 ->  `pm2 send 0 'players'`
Sample 2 ->  `pm2 send 0 'addminion 1 100'`
All Command -> https://github.com/Libra-Agario/Libragar/blob/main/CommandList


















## Configuring

- After your first run, OgarII will drop two files in `cli/` / working directory: `log-settings.json` and `settings.json`.

- To change how OgarII runs, modify `cli/settings.json`.

- To change what gets logged, modify `cli/log-settings.json`.

## Expanding

- To create your own commands, check out `src/commands/CommandList.js` on the command API. To add it to the CLI use `ServerHandle.commands.register`, and for chat commands use `ServerHandle.chatCommands.register`.

- To create your own gamemodes, inherit `src/Gamemode.js`'s `Gamemode` abstract class, modify event handling to your wish, then add it with `ServerHandle.gamemodes.register` before the handle starts.

- The `ServerHandle` class is standalone, which means that you can completely ditch the `cli/` folder, `require("./src/ServerHandle.js")` and do whatever you want with it. OgarII is also available as an npm package for this exact purpose.
