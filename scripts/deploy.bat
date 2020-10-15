npm run tsc

docker stop postgres
docker rm postgres
docker run --name postgres -e POSTGRES_PASSWORD=postgres -d postgres

docker stop planet-sim
docker rm planet-sim
docker build -t planet-sim:latest .
docker run --name planet-sim -d -p 3000:3000 planet-sim
