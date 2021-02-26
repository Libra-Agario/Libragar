# Libragar
#
#1.
#CodeAnyWhere, "Caw"
#-------
#Caw ->

#git clone https://github.com/Libra-Agario/Libragar
#sudo apt install nodejs
#Y
#node -v
ls
cd Libragar
ls
npm install in
sudo apt update
sudo apt install build-essential
sudo apt-get install manpages-dev
gcc --version
  sudo apt-get install nano
  npm install pm2@latest -g
last cd Libragar/cli
last node index



Caw <-
-------





2. Change -> 

cd /Libragar/src/gamemodes/FFA.js
FFA.js //Open.
// replace with similar one. (possibly line 13) 

        cellId: player.ownedCells[0]?player.ownedCells[0].id:undefined,

// Change - save or (CTRL+S) - Exit.







3. AutoRun Create ->

cd /Libragar/cli/ 
nano autostart.sh 

// Paste the code below into the window that opens.

while :
do
node index
echo "press ctrl+c to interrupt autorestart"
sleep 3
done

// Save ->
CTRL+O
ENTER
CTRL+X

chmod +x autostart.sh





4.
cd /Libragar/cli/ 	
pm2 list
pm2 start autostart.sh
pm2 save

pm2 unstartup
output-> ///[PM2] To unsetup the Startup Script, copy/paste the following command: !
output Copy + Paste + Enter -> sudo env PATH=$PATH:/home/cabox/.nvm/versions/node/v10.15.0/bin /home/cabox/.nvm/versions/node/v10.15.0/lib/node_modules/pm2/bin/pm2 unstartup systemd -u cabox --hp /home/cabox

pm2 startup
output-> // [PM2] To unsetup the Startup Script, copy/paste the following command: !
output Copy + Paste + Enter -> sudo env PATH=$PATH:/home/cabox/.nvm/versions/node/v10.15.0/bin /home/cabox/.nvm/versions/node/v10.15.0/lib/node_modules/pm2/bin/pm2 startup systemd -u cabox --hp /home/cabox

pm2 save

pm2 log 0  // LOG EXIT ->> CTRL + C
pm2 send 0 'bot 1 100'
pm2 log 0  // LOG EXIT ->> CTRL + C


pm2 log 0
pm2 log 1 --lines 100
pm2 log 1 --lines n


5. Game Play :) #Thanks For Watching Libra - Agario YT :)

