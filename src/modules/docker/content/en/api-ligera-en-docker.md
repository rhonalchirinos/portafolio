# Lightweight API in Docker

This exercise is about packaging a very small API image without turning the build process into something fragile. The main idea is simple: compile in one stage, copy only the final binary into a minimal runtime image, and keep the final container focused on running the application.

## What this exercise is trying to teach

- Multi-stage builds reduce the final image size.
- Alpine is a practical base when you want a small runtime image.
- The final image should contain only what the application needs to run.
- Smaller images usually mean faster pulls, smaller attack surface, and cleaner deployments.

## Project structure

The project can stay minimal. A small binary application with a dedicated Dockerfile is enough to explain the pattern.

```text
exec01/
├── Dockerfile
└── go/
    ├── go.mod
    └── main.go
```

## Dockerfile

The key decision is separating build time from runtime. The builder image can be heavier because it contains the compiler and dependencies. The runtime image should stay small.

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

## Go module

The module file stays small because the example itself is intentionally narrow.

```go
module exec01/helloworld

go 1.24.3
```

## API entry point

The application is just enough to confirm that the image works and that the container can expose an HTTP endpoint.

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

## Why the final image stays small

The builder stage contains the Go toolchain, but the final stage only copies the compiled binary. That means the final image does not need the compiler, source code, or temporary build files.

- Build dependencies stay in the builder stage.
- The runtime image is smaller and easier to distribute.
- The container intent is clearer because it only runs the binary.

## A good next step

After this version works, the next improvement is to inspect the final image size, add a `.dockerignore`, and compare the result against a single-stage Dockerfile. That comparison makes the value of multi-stage builds very obvious.


