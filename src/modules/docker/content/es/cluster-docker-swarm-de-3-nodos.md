# Cluster Docker Swarm de 3 nodos

Este ejercicio sirve para pasar de flujos con contenedores aislados a una orquestacion distribuida mas realista. La idea no es aprender todas las capacidades de Swarm de una sola vez, sino entender como trabajan juntos nodos, servicios, redes overlay y replicas dentro de un cluster pequeno.

## Que incluye el montaje

- Un nodo manager.
- Dos nodos worker.
- Una red overlay para comunicacion entre nodos.
- Un servicio PostgreSQL.
- Un servicio API replicado dentro del cluster.

## Una imagen API sencilla

La API puede mantenerse pequena. Solo necesita exponer un endpoint y confirmar que puede hablar con PostgreSQL desde la red de Swarm.

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

## Build y publicacion de la imagen

Si los workers necesitan descargar la imagen, publicarla en un registry es la opcion mas limpia.

```bash
docker build --tag rhonalchirinos/hello-api:latest .
docker login
docker push rhonalchirinos/hello-api:latest
```

## Inicializar el Swarm

El manager es el punto de control del cluster.

```bash
docker swarm init
```

Despues agregas los workers con el token que muestra el manager.

```bash
docker swarm join --token SWMTKN-1-xxxxx 192.168.64.6:2377
```

Si necesitas imprimir el token otra vez:

```bash
docker swarm join-token worker
```

## Crear la red overlay

Los servicios distribuidos entre distintos nodos necesitan una red overlay para comunicarse sin depender de ruteo manual a nivel host.

```bash
docker network create -d overlay hello-net
```

## Desplegar PostgreSQL como servicio

La base de datos puede correr dentro de la misma red overlay para que la API la resuelva por nombre de servicio.

```bash
docker service create \
  --name postgres \
  --env POSTGRES_PASSWORD=secret \
  --mount type=volume,source=testdb,target=/var/lib/postgresql/data \
  --network hello-net \
  postgres
```

## Desplegar la API con replicas

Una vez que la red y la base existen, puedes crear el servicio API con varias replicas.

```bash
docker service create \
  --name some-api \
  --replicas 3 \
  --publish 3000:3000 \
  --network hello-net \
  rhonalchirinos/hello-api:latest
```

Puedes inspeccionar los servicios actuales con:

```bash
docker service ls
```

Y revisar los puertos publicados con:

```bash
docker service inspect some-api --format '{{json .Endpoint.Ports}}'
```

## Que ensena este ejercicio

- Swarm distribuye replicas de servicios entre nodos.
- Las redes overlay eliminan gran parte de la configuracion manual entre hosts.
- Los servicios se resuelven por nombres logicos, no por IP de contenedor.
- El manager mantiene el estado deseado y los workers ejecutan las cargas.

## Siguiente paso recomendado

Despues de que este cluster funcione, el siguiente paso valioso es probar updates de servicios, constraints y draining de nodos. Ahi es donde Swarm empieza a sentirse operativo y no solo demostrativo.
