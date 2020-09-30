# Dockerizing a React App

1. Setting up a development environment with code hot-reloading

```bash
docker build -t sample:dev .
```

```bash
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

p.s. 
> {PWD} may not work on Windows. See this Stack Overflow question for more info.

2. Configuring a production-ready image using multistage builds


```bash
docker build -f Dockerfile.prod -t sample:prod .
```
```bash
 docker run -it --rm -p 1337:80 sample:prod
 
 # or using docker compose
 docker-compose -f docker-compose.prod.yml up -d --build
```