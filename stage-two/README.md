# Dockerizing a React App

1. Setting up a development environment with code hot-reloading

```bash
docker build -t sample:dev .
```

```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

2. Configuring a production-ready image using multistage builds
