[![shield to Agar.io Private Servers guild](https://discordapp.com/api/guilds/407210435721560065/embed.png?style=shield)](https://discord.gg/XcKgShT)

# www.Libragar.pw



## Running
Video Tutorial [![Watch the video](https://i.imgur.com/RHqwwEU.png)](https://youtube.com/libraa)


1. Make sure you have node.js version 8 or greater. https://nodejs.org/ja/blog/release/v8.11.1/  choose your system bits


2. Make sure you have a C++11 compliant compiler for building uWebSockets.
    - If you're on Windows, `npm install -g windows-build-tools`.
    - If you're on GNU/Linux, use your package manager to install a supported C++ compiler such as GCC.

3.  ssh command. ->

3.1`git clone https://github.com/Libra-Agario/Libragar`
3.2`sudo apt install nodejs` and `Y`
3.3`node -v`
3.4`cd Libragar`
3.5`npm install in`
3.6`sudo apt update`
3.7`sudo apt install build-essential`
3.8`sudo apt-get install manpages-dev`
3.9`gcc --version`
3.9`sudo apt-get install nano`
3.0`npm install pm2@latest -g`


## Configuring

- After your first run, OgarII will drop two files in `cli/` / working directory: `log-settings.json` and `settings.json`.

- To change how OgarII runs, modify `cli/settings.json`.

- To change what gets logged, modify `cli/log-settings.json`.

## Expanding

- To create your own commands, check out `src/commands/CommandList.js` on the command API. To add it to the CLI use `ServerHandle.commands.register`, and for chat commands use `ServerHandle.chatCommands.register`.

- To create your own gamemodes, inherit `src/Gamemode.js`'s `Gamemode` abstract class, modify event handling to your wish, then add it with `ServerHandle.gamemodes.register` before the handle starts.

- The `ServerHandle` class is standalone, which means that you can completely ditch the `cli/` folder, `require("./src/ServerHandle.js")` and do whatever you want with it. OgarII is also available as an npm package for this exact purpose.
