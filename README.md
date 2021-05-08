[![shield to Libra's guild](https://discordapp.com/api/guilds/538054682699104256/embed.png?style=shield)](https://discord.gg/UuVHSZR)


# :bulb: www.Libragar.pw :bulb:
<b>:bulb: Hi there. Here I will tell you how I created my own server. :) :bulb:</b>

Original repository -> 

https://github.com/Adil950/OgarMulti -> for more information-> /OgarMulti/blob/master/README.md 

## Running
Video Tutorial [![Watch the video](https://i.imgur.com/RHqwwEU.png)](https://youtube.com/libraa)


### 1 - Vps General installation / Ubuntu 16.04 , 18.04 or 20.04. 


`sudo apt-get update`

`sudo apt-get install nodejs`


`sudo apt-get install nano`


`sudo apt-get install npm`

`apt install npm`



`apt-get update`

`apt-get install git`

`git --version`


### 3 - Nginx install 

`sudo apt-get update`


`sudo apt-get upgrade`


`sudo apt-get install nginx`


`sudo systemctl start nginx`

`sudo systemctl enable nginx`


`systemctl status nginx `

`nginx -t `

`rm /etc/nginx/sites-enabled/default`






### 4 <b> Nginx ffa Configirasyon</b>

`nano /etc/nginx/sites-available/ffa.conf` 

	server {
		listen 80;
		listen [::]:80;

		server_name yoursubdomain.yourdomain.com;

		location / {
		proxy_pass http://you.server.ip:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		}
	}


<b>ctrl + o</b> / <b>enter</b> /<b> ctrl + x</b>

 
`ln -s /etc/nginx/sites-available/ffa.conf /etc/nginx/sites-enabled/`

`nginx -t`

`systemctl reload nginx` OR `systemctl restart nginx` 



### 5 - git clone and installer.

`mkdir ffa`

`cd ffa`

`git clone https://github.com/Libra-Agario/Libragar`

`cd Libragar`

`sudo apt install nodejs`

`node -v`

`npm install ws`

`sudo apt update`

`sudo apt install build-essential`

`sudo apt-get install manpages-dev`

`gcc --version`

`sudo apt-get install nano`

`npm install pm2@latest -g`

`cd cli`

`nano settings.json` // port 3000 // save, <b>ctrl + o</b> / <b>enter</b> /<b> ctrl + x</b>



### 6 - SSL Certifica (https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx

`apt install certbot python3-certbot-nginx`  # OR # `sudo apt install certbot python3-certbot-nginx`


`sudo certbot --nginx -d yoursubdomain.yourdomain.com --register-unsafely-without-email`

`A`

`2`





### 7 - pm2 server start -> 

`cd cli`

`pm2 list`

`pm2 start index.js`

`pm2 list`

`pm2 save`



`pm2 unstartup` 

`pm2 startup`

`pm2 save`


### 8 - Libragar Script + Tampermonkey Install -> 
1. https://www.libragar.pw OR /Libragar/User-Scripts (https://github.com/Libra-Agario/Libragar/tree/main/User-Scripts
OR https://greasyfork.org/en/scripts/420590-www-libragar-pw-libra-agario-yt-public-betatest-server 

### 8.1 Libragar Script in edit ->
1. Libragar Script -> in Search -> `core.disableIntegrityChecks(true); core.connect` replace the same ones with your own link.
 - <b> Sample -> </b> core.disableIntegrityChecks(true); core.connect("wss://`ffa.libragar.pw`");
 - <b> Change -> </b>  core.disableIntegrityChecks(true); core.connect("wss://`yoursubdomain.yourdomain.com`");


### 9 - </b> Commands you can do via pm2 ssh.

for the feedback -> `pm2 log 0 --lines n` (CTRL+C = Log Exit)

Sample 1 ->  `pm2 send 0 'help'`  &   /Libragar/CommandList.txt

Sample 2 ->  `pm2 send 0 'addminion 1 100'` 





### 10 To create more servers -> (not mandatory)
<b> 4. 5. 6. and 7. repeat these steps </b>
only. <b>ffa</b> name changed instead, example <b>experimental</b> write. and port <b>3000</b> instead, example <b>4000</b> write. 
<b>just replace with the same ones</b>

## Configuring

- To change how Libragar runs, modify `cli/settings.json`. // Game mode and in-game settings.

