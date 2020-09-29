
## 1. 直接把 static files, build 個 docker images
```Dockerfile
# Dockerfile

FROM nginx:latest
COPY ./build /usr/share/nginx/html
```


```bash
## build image
docker build -t webserver . 

## create container
docker run -it --rm -d -p 8080:80 --name web webserver 

```

## 2. 使用 docker-compose
> docker-compose.yml

```

```