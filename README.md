```yml
version: '3'

services:
  backend:
    container_name: items-api
    image: items-api-img
    build: ./backend
    ports:
      - '4000:4000'
    environment:
      - DB_URL=mongodb://mongo:27017/itemsDb
    depends_on:
      - mongo

  frontend:
    container_name: items-ui
    image: items-ui-img
    build: ./frontend
    ports:
      - '3000:3000'
    environment:
      - REACT_APP_BACKEND_URL=http://localhost:4000
    depends_on:
      - backend

  mongo:
    container_name: mongo-database
    image: mongodb/mongodb-community-server:6.0-ubi8
    ports:
      - '27017:27017'
    environment:
      - MONGO_INITDB_DATABASE=itemsDb
    volumes:
      - type: bind
        source: ./data
        target: /data/db
```

```
    There is a Dockerfile under ./backend location. Please use that Dockerfile to build an image called items-api-img and run that image to create a container called items-api. Map the host machine port 4000 to docker container's port 4000.
```

```
    Docker volumes represent the data storage. Here, we want to bind container's data under /data/db to the host machine's ./data
```
