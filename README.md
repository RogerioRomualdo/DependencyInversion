# Dependency Inversion

## About
Study project to get the grasp of some concepts as i try them out for the first time, namely
- Docker
- Dependency Inversion
- **GRPC**
- Unit Testing with **Jest**

## Setup
In order to run the project you will need a `.env` file as follows
```
DB_HOST = 0.0.0.0
DB_PORT = 0000
DB_USER = database user
DB_PASS = database password
DB_NAME = database name
```
Run the following commands to install dependencies  
```bash
yarn
# or npm i
```
then, to run MySQL on a docker container use:
```
docker-compose up -d
```

build the project and run the migration(s) with:
```bash
yarn build
yarn typeorm:run
```
finally you can run the project with:
```
yarn dev
```
