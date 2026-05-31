# Rust toolchain for beginners

Antes de profundizar en ownership o traits, conviene saber que herramientas trae el ecosistema por defecto. Esa base te evita trabajo manual y te acerca a un flujo profesional desde el primer dia.

## Rustup como punto de entrada

rustup instala y administra versiones del compilador y del toolchain. En la practica es la manera normal de tener Rust actualizado y cambiar entre canales cuando lo necesitas.

## Comandos de cargo que usaras siempre

- `cargo new` crea un proyecto nuevo.
- `cargo run` compila y ejecuta.
- `cargo build` genera el binario.
- `cargo test` ejecuta pruebas.
- `cargo check` valida rapido sin generar binario final.

## Formateo y analisis

rustfmt aplica un estilo consistente a todo el proyecto. clippy analiza patrones dudosos y sugiere mejoras idiomaticas.

```bash
cargo fmt
cargo clippy
cargo check
```

## Rutina minima recomendada

- Crear proyecto con cargo.
- Compilar temprano con `cargo check`.
- Formatear antes de cerrar cambios.
- Ejecutar clippy para detectar mejoras faciles.

> Si aprendes esta rutina desde el inicio, tu experiencia con Rust se vuelve mucho menos friccionada.
