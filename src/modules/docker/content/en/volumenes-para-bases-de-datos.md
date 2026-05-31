# Volumes for databases

Containers are ephemeral by design, which is useful for reproducibility but dangerous for stateful workloads. Databases need durable storage, so the first operational concept to understand in Docker is how volumes preserve data independently from the container lifecycle.

## Why volumes matter

- Database files should survive container restarts and recreation.
- Persistent storage should not depend on the lifetime of a single container.
- Volumes make local development and operational recovery more predictable.
- Data management becomes cleaner than storing state inside the writable layer of the container.

## Create and inspect a volume

The basic workflow starts by creating a named volume and inspecting it.

```bash
docker volume create --name storage_test
docker volume ls
docker volume inspect storage_test
```

`docker volume inspect` shows where Docker stores the volume data and how the volume is configured on the host.

## Remove a volume

Unused volumes can be deleted explicitly.

```bash
docker volume rm storage_test
```

> You cannot remove a volume that is currently attached to a running container.

## Run MySQL with persistent storage

Once the volume exists, mount it into the database container so MySQL writes its data outside the container layer.

```bash
docker volume create --name storagedb

docker run --name mysql-01 \
  -v storagedb:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:latest
```

## Load a SQL script into the container

If you need to initialize data or schemas, you can execute SQL against the running database container.

```bash
docker exec -i mysql-01 \
  sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < ./mysql/databases.sql
```

## What this exercise teaches

- Docker volumes preserve state beyond the life of one container.
- Named volumes are easier to reuse and reason about than anonymous storage.
- Databases should mount explicit storage paths from the start.
- Data initialization can still happen through standard container workflows.

## A good next step

After this basic setup works, the next useful comparison is between named volumes and bind mounts. That distinction matters when you move from local practice into backup, inspection, and environment-specific storage strategies.
