# nginx-for-nextjs

- https://steveholgado.com/nginx-for-nextjs/


## execute with docker compose
```bash
docker-compose up

docker-compose down
```

Note, if you need to force a re-build of the images in future you can run:
```
docker-compose up --build
```

## no docker compose
```
# Build images
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name nextjs-container nextjs-image
docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image
```
> NOTE: We need to use --link to map our Next.js container to our NGINX container as it is referenced as nextjs in default.conf.