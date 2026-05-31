# My first app in Rust

Tu primera app en Rust no necesita ser compleja. Lo correcto es usarla para entender el papel de cargo, la funcion `main`, las variables inmutables por defecto y la compilacion con tipos estrictos.

## Crear el proyecto

La forma normal de empezar en Rust es con cargo, el gestor oficial del ecosistema. Crea la estructura del proyecto, maneja dependencias y te da comandos estandar para compilar y ejecutar.

```bash
cargo new hello-rust
cd hello-rust
cargo run
```

## Que trae la aplicacion inicial

Cargo crea un archivo `src/main.rs` con una funcion `main` minima. Ese es el punto de entrada de una aplicacion binaria.

```rust
fn main() {
    println!("Hola, Rust!");
}
```

## Leer el nombre del usuario

Un siguiente paso util es leer datos por consola. Asi introduces mutabilidad, manejo basico de strings y la idea de que algunas operaciones pueden fallar.

```rust
use std::io;

fn main() {
    let mut name = String::new();

    println!("Cual es tu nombre?");
    io::stdin()
        .read_line(&mut name)
        .expect("No se pudo leer la linea");

    println!("Hola, {}!", name.trim());
}
```

## Que aprendes con este ejercicio

- Cargo organiza y ejecuta tu proyecto.
- Las variables son inmutables por defecto.
- `String` es un tipo que puede crecer y mutar.
- `expect` permite fallar con un mensaje claro cuando algo sale mal.

## Siguiente paso recomendado

Despues de esta primera app, el siguiente buen ejercicio es construir una pequena calculadora o un adivinador de numeros. Lo importante es repetir lectura de entrada, `match` y manejo de `Result`.
