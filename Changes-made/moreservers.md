## 0. cpanel zone editor, add tip "A" , your "vps ip" , "yoursubdomain2.yourdomain.com"
## 1. New nginx configuration for the new server // difference, subdomain name and port changed

`nano /etc/nginx/sites-available/experimental.conf` 

// After replacing it with your own information, put the following code into it.

	server {
		listen 80;
		listen [::]:80;

		server_name yoursubdomain2.yourdomain.com;

		location / {
		proxy_pass http://yourserverip:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		}
	}


save -> <b>ctrl + o</b> / <b>enter</b> /<b> ctrl + x</b>

`ln -s /etc/nginx/sites-available/ffa.conf /etc/nginx/sites-enabled/`

`nginx -t`

`systemctl reload nginx` OR `systemctl restart nginx` 


### 2 - Git clone and Installer.

`mkdir experimental`

`cd experimental`

`git clone https://github.com/Libra-Agario/Libragar`

`npm install ws`

`cd cli`

`nano settings.json`


line :7 Replace port 3000 with New port -> " 4000 " 


    "listeningPort": 4000,


save -> <b>ctrl + o</b> / <b>enter</b> /<b> ctrl + x</b>


### 3 - SSL Certifica


`apt install certbot python3-certbot-nginx` # OR # `sudo apt install certbot python3-certbot-nginx`

`sudo certbot --nginx -d yoursubdomain.yourdomain.com --register-unsafely-without-email`

`A`

`2`

`sudo certbot renew --dry-run`


### 4 - pm2 server start -> 

`cd cli`

`pm2 list`

`pm2 start index.js`

`pm2 list`

`pm2 save`



`pm2 unstartup` 

`pm2 startup`

`pm2 save`



 ## Notes
 
 Ask all your questions over on the [Agar.io Private Servers](https://discord.gg/66X2ESb) Discord guild.
