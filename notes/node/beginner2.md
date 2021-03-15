yum   -y install  nginx  

vi /etc/nginx/nginx.conf 
## /usr/share/nginx/html

cd  /usr/share/nginx/html
cp /root/my-blog/test3.html   ./

scp -r     my-blog   root@47.105.55.125:/root/

yum -y install  nginx

nginx -t


cd /etc/nginx/conf.d/

cd /etc/nginx/

vim nginx.conf

pwd

vi /etc/nginx/nginx.conf

cd /usr/share/nginx/html/

 rm -rf *

 cp /root/my-blog/

 cp /root/my-blog/test3.html   ./

 pwd

 netstat -tupln
 上面这个命令： 可以nginx 部署在哪个端口上


nginx -t 启动

curl  https://api.ip.la 看ip 命令