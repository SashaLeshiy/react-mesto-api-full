ls
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
wget -q0 - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
ls
sudo systemctl start mongod
sudo systemctl enable mongod
sudo service mongodb status
sudo systemctl start mongodb
gpg --keyserver subkeys.pgp.net --recv 4B7C549A058F8B6B
gpg --export --armor 4B7C549A058F8B6B | sudo pt-key add -
gpg --export --armor 4B7C549A058F8B6B | sudo apt-key add -
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo apt-key list | grep "expired: " | sed -ne 's|pub .*/\([^ ]*\) .*|\1|gp' | xargs -n1 sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-4B7C549A058F8B6B
sudo apt-key list | grep "expired: " | sed -ne 's|pub .*/\([^ ]*\) .*|\1|gp' | xargs -n1 sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 4B7C549A058F8B6B
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo systemctl enable mongod.service
mongo
sudo apt update
sudo apt install git
git --version
pwd
ls
git clone git@github.com:SashaLeshiy/express-mesto.git
git clone https://github.com/SashaLeshiy/express-mesto.git
ls
cd express-mesto
npm install
npm start
sudo npm install pm2 -g
ls
cd express-mesto
pm2 start app.js
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u zomlesh --hp /home/zomlesh
pm2 save
scp -r C:\Users\1\Downloads\OSPanel\domains\react-mesto-auth\react-mesto-auth/build/* zomlesh@178.154.200.97:/home/zomlesh/mesto-frontend
scp -r ../Users/1/Downloads/OSPanel/domains/react-mesto-auth/react-mesto-auth/build/* zomlesh@178.154.200.97:/home/zomlesh/mesto-frontend
ls
scp -r /Users/1/Downloads/OSPanel/domains/react-mesto-auth/react-mesto-auth/build/* zomlesh@178.154.200.97:/home/zomlesh/mesto-frontend
scp -r /users/1/downloads/ospanel/domains/react-mesto-auth/react-mesto-auth/build/* zomlesh@178.154.200.97:/home/zomlesh/mesto-frontend
sudo apt-get update
sudo apt-get install nginx
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
sudo systemctl start nginx
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
cd /etc/
ls
cd nginx
ls
cd ..
ls
cd ..
sudo nano /etc/nginx/sites-available/dafault
sudo nginx -t
sudo systemctl restart nginx
ls
cd home
ls
cd zomlesh
ls
cd express-mesto
git pull origin main
pm2 restart app
ls
cd express-mesto
ls
cd ..
ls
cd ..
ls
mdir mesto-frontend
mkdir mesto-frontend
~/mesto-frontend
mkdir ~/mesto-frontend
ls
cd zomlesh
ls
ls
cd express-mesto
ls
cd ..
ls
git init
ls
git remote add origin https://github.com/SashaLeshiy/react-mesto-api-full.git
git status
ls
cd express-mesto
ls
cd ..
cd mesto-frontend
ls
св юю
cd ..
pwd
ls
git pull origin main
ls
git status
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx
scp -r /c/users/1/downloads/ospanel/domains/react-mesto-auth/react-mesto-auth/build/* zomlesh@178.154.200.97:/home/zomlesh/mesto-frontend
ls
cd mesto-frontend
ls
cd ..
sudo nano /etc/nginx/sites-available/defaut
sudo nginx -t
sudo systemctl restart nginx
sudo nano /etc/nginx/sites-available/defaut
sudo nginx -t
sudo systemctl restart nginx
sudo apt-get update
sudo apt-get install sofware-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx
sudo systemctl restart nginx
ls
cd home
ls
cd zomlesh
ls
cd express-mesto
ls
