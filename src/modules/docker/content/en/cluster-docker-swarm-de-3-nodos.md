# 3-node Docker Swarm cluster

This exercise is useful when you want to move from single-container workflows into distributed orchestration. The goal is not to learn every Swarm feature at once, but to understand how nodes, services, overlay networking, and replicas work together in a small cluster.

## What the setup includes

- One manager node.
- Two worker nodes.
- An overlay network for cross-node communication.
- A PostgreSQL service.
- An API service replicated across the cluster.

## A simple API image

The API can stay small. It only needs to expose one endpoint and confirm that it can talk to PostgreSQL from inside the Swarm network.

```dockerfile
FROM node:22.13-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "main.js"]
```

```json
{
  "name": "swarm-api",
  "version": "1.0.0",
  "main": "main.js",
  "license": "MIT",
  "dependencies": {
    "express": "^5.1.0",
    "pg": "^8.16.0"
  }
}
```

```js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.PGHOST || 'postgres',
  user: 'postgres',
  password: process.env.PGPASSWORD || 'secret',
  database: 'postgres',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ message: 'Hello from API', time: result.rows[0].now });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API running on port ${port}`);
});
```

## Build and publish the image

If the workers need to pull the image, publishing it to a registry is the cleanest option.

```bash
docker build --tag rhonalchirinos/hello-api:latest .
docker login
docker push rhonalchirinos/hello-api:latest
```

## Initialize the Swarm

The manager node is the control point of the cluster.

```bash
docker swarm init
```

Then add the worker nodes with the join token shown by the manager.

```bash
docker swarm join --token SWMTKN-1-xxxxx 192.168.64.6:2377
```

If you need to print the token again:

```bash
docker swarm join-token worker
```

## Create the overlay network

Swarm services on different nodes need an overlay network to communicate without manual host routing.

```bash
docker network create -d overlay hello-net
```

## Deploy PostgreSQL as a service

The database can run inside the same overlay network so the API resolves it by service name.

```bash
docker service create \
  --name postgres \
  --env POSTGRES_PASSWORD=secret \
  --mount type=volume,source=testdb,target=/var/lib/postgresql/data \
  --network hello-net \
  postgres
```

## Deploy the API with replicas

Once the network and database are ready, create the API service with multiple replicas.

```bash
docker service create \
  --name some-api \
  --replicas 3 \
  --publish 3000:3000 \
  --network hello-net \
  rhonalchirinos/hello-api:latest
```

You can inspect the current services with:

```bash
docker service ls
```

And inspect published ports with:

```bash
docker service inspect some-api --format '{{json .Endpoint.Ports}}'
```

## What this exercise teaches

- Swarm distributes service replicas across nodes.
- Overlay networking removes most of the manual network setup between hosts.
- Services are addressed by logical names, not by container IPs.
- The manager coordinates desired state while workers run workloads.

## A good next step

After this cluster works, the next valuable step is to add service updates, constraints, and node draining. That is where Swarm starts to feel operational rather than just demonstrative.
