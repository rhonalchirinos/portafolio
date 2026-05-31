# Reverse proxy para microservicios

Este ejercicio mueve el foco desde contenedores aislados hacia una arquitectura distribuida mas realista. La idea es enrutar trafico a traves de un unico punto de entrada mientras varios servicios corren detras. En la practica, ahi es donde Docker, Swarm, la ubicacion de servicios y un reverse proxy empiezan a funcionar como arquitectura y no como herramientas separadas.

## Que incluye el stack

- Un cluster Swarm con nodos manager y worker.
- Un servicio de base de datos.
- Tres servicios de aplicacion.
- Un servicio de reverse proxy como punto de entrada publico.
- Un visualizador opcional para inspeccionar el cluster.

## Inicializar el Swarm

Comienza en el nodo manager:

```bash
docker swarm init
```

Despues une los workers usando el token generado por el manager:

```bash
docker swarm join --token <WORKER_TOKEN> <MANAGER_IP>:2377
```

Si necesitas volver a imprimir el token:

```bash
docker swarm join-token worker
```

## Etiquetar nodos por responsabilidad

Las etiquetas ayudan a ubicar servicios con intencion, en lugar de dejar todo a una decision generica del scheduler.

```bash
docker node ls
docker node update --label-add db=true NODE_ID
docker node update --label-add worker=true NODE_ID
```

## Definicion del stack

El stack de abajo muestra una base de datos, tres servicios, un reverse proxy y un visualizador. Lo importante no son exactamente los nombres de imagen, sino como se reparten y restringen las responsabilidades.

```yaml
version: '3.8'

services:
  db:
    image: mongo:latest
    ports:
      - 27017:27017
    volumes:
      - db-data:/data/db
    deploy:
      placement:
        constraints:
          - node.labels.db == true
      resources:
        limits:
          cpus: '8.0'
          memory: 8G

  survey:
    image: rhonalchirinos/exec04-survey:latest
    ports:
      - 3000:3000
    command: sh -c "node /app/src/main.js"
    depends_on:
      - db
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
      placement:
        constraints:
          - node.labels.worker == true

  auth:
    image: rhonalchirinos/exec04-auth:latest
    ports:
      - 3001:3001
    command: sh -c "node /app/src/main.js"
    depends_on:
      - db
    environment:
      - MONGO_DB=mongodb://db:27017/app
      - PORT=3001
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
      placement:
        constraints:
          - node.labels.worker == true

  stats:
    image: rhonalchirinos/exec04-stats:latest
    ports:
      - 3002:3002
    depends_on:
      - db
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
      placement:
        constraints:
          - node.labels.worker == true

  haproxy:
    image: rhonalchirinos/exec04-haproxy:latest
    ports:
      - "80:8080"
    depends_on:
      - stats
      - auth
      - survey
    deploy:
      placement:
        constraints:
          - node.role == manager

  visualizer:
    image: dockersamples/visualizer:latest
    ports:
      - "8080:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    deploy:
      placement:
        constraints:
          - node.role == manager
      replicas: 1

volumes:
  db-data:
```

## Desplegar el stack

Cuando las imagenes existen y los nodos estan listos, despliega el stack desde el manager.

```bash
docker stack deploy -c docker-compose.yml mystack
```

## Por que importa el reverse proxy

El proxy se convierte en la puerta de entrada publica del sistema. En vez de exponer cada servicio interno de forma directa, centralizas el ingreso y enrutas solicitudes segun hostnames, paths o puertos.

- El punto de entrada queda controlado.
- Los servicios internos pueden escalar de forma independiente.
- Las reglas de routing quedan concentradas en un solo lugar.
- La arquitectura se vuelve mas facil de evolucionar.

## Que ensena este ejercicio

- Swarm puede orquestar multiples servicios con replicas.
- Las etiquetas de nodo ayudan a separar roles de infraestructura.
- Un reverse proxy da al sistema un punto de acceso externo estable.
- Los archivos Compose para Swarm funcionan como un contrato operativo legible.

## Siguiente paso recomendado

Despues de que el stack funcione, la mejora mas valiosa es definir reglas de routing explicitas, health checks y rolling updates. Ahi es donde el montaje empieza a parecerse a una base real de produccion.
