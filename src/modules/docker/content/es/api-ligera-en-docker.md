# API ligera en Docker

Este ejercicio busca empaquetar una API muy pequena sin volver fragil el proceso de build. La idea principal es simple: compilar en una etapa, copiar solo el binario final a una imagen minima de runtime y dejar el contenedor enfocado unicamente en ejecutar la aplicacion.

## Que intenta ensenar este ejercicio

- Los builds multi-stage reducen el tamano final de la imagen.
- Alpine es una base practica cuando buscas una imagen de runtime pequena.
- La imagen final deberia contener solo lo necesario para ejecutar la aplicacion.
- Imagenes mas chicas suelen implicar descargas mas rapidas, menor superficie de ataque y despliegues mas limpios.

## Estructura del proyecto

El proyecto puede mantenerse minimo. Una aplicacion binaria pequena con un Dockerfile dedicado alcanza para explicar el patron.

```text
exec01/
├── Dockerfile
└── go/
    ├── go.mod
    └── main.go
```

## Dockerfile

La decision clave es separar build y runtime. La imagen de build puede ser mas pesada porque incluye compilador y dependencias. La imagen final deberia mantenerse pequena.

```docker
FROM golang:1.24.3-alpine AS builder

WORKDIR /app
COPY ./go .
RUN go build -o app && chmod +x app

FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/app /app/app

EXPOSE 8080
CMD ["/app/app"]
```

## Modulo de Go

El archivo del modulo se mantiene pequeno porque el ejemplo es intencionalmente acotado.

```go
module exec01/helloworld

go 1.24.3
```

## Punto de entrada de la API

La aplicacion hace lo minimo necesario para confirmar que la imagen funciona y que el contenedor puede exponer un endpoint HTTP.

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}
```

## Por que la imagen final queda pequena

La etapa de build contiene el toolchain de Go, pero la etapa final solo copia el binario compilado. Eso significa que la imagen final no necesita compilador, codigo fuente ni archivos temporales de build.

- Las dependencias de build quedan encapsuladas en la etapa builder.
- La imagen de runtime es mas pequena y mas facil de distribuir.
- La intencion del contenedor queda mas clara porque solo ejecuta el binario.

## Siguiente paso recomendado

Despues de que esta version funcione, el siguiente buen paso es inspeccionar el tamano final de la imagen, agregar un `.dockerignore` y comparar el resultado contra un Dockerfile de una sola etapa. Esa comparacion deja muy clara la ventaja de multi-stage.
