# Volumenes para bases de datos

Los contenedores son efimeros por diseno, lo cual es util para reproducibilidad pero peligroso para cargas con estado. Las bases de datos necesitan almacenamiento durable, asi que el primer concepto operativo que conviene dominar en Docker es como los volumenes preservan datos de forma independiente al ciclo de vida del contenedor.

## Por que importan los volumenes

- Los archivos de la base de datos deben sobrevivir reinicios y recreacion del contenedor.
- El almacenamiento persistente no deberia depender de la vida de un contenedor individual.
- Los volumenes vuelven el desarrollo local y la recuperacion mas predecibles.
- Manejar datos asi es mas limpio que guardarlos en la capa writable del contenedor.

## Crear e inspeccionar un volumen

El flujo basico empieza creando un volumen con nombre e inspeccionandolo.

```bash
docker volume create --name storage_test
docker volume ls
docker volume inspect storage_test
```

`docker volume inspect` muestra donde guarda Docker los datos del volumen y como esta configurado en el host.

## Eliminar un volumen

Los volumenes que no estan en uso pueden eliminarse de forma explicita.

```bash
docker volume rm storage_test
```

> No puedes eliminar un volumen que este conectado a un contenedor en ejecucion.

## Ejecutar MySQL con almacenamiento persistente

Una vez creado el volumen, montalo dentro del contenedor para que MySQL escriba los datos fuera de la capa interna del contenedor.

```bash
docker volume create --name storagedb

docker run --name mysql-01 \
  -v storagedb:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:latest
```

## Cargar un script SQL en el contenedor

Si necesitas inicializar datos o esquemas, puedes ejecutar SQL contra la base que ya corre dentro del contenedor.

```bash
docker exec -i mysql-01 \
  sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < ./mysql/databases.sql
```

## Que ensena este ejercicio

- Los volumenes de Docker preservan estado mas alla de la vida de un contenedor.
- Los volumenes con nombre son mas faciles de reutilizar y razonar que el almacenamiento anonimo.
- Las bases de datos deberian montar almacenamiento explicito desde el inicio.
- La inicializacion de datos puede seguir pasando por flujos normales de contenedor.

## Siguiente paso recomendado

Despues de que este montaje basico funcione, la siguiente comparacion util es entre named volumes y bind mounts. Esa diferencia importa cuando pasas de practica local a backup, inspeccion y estrategias de almacenamiento por entorno.
