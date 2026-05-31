# My first app in Rust

Your first Rust app does not need to be complex. The right goal is to understand cargo, the main function, default immutability, and strict typed compilation.

## Create the project

The normal way to start in Rust is cargo, the official package and workflow tool. It creates the project structure, manages dependencies, and gives you standard commands to build and run.

```bash
cargo new hello-rust
cd hello-rust
cargo run
```

## What the starter app looks like

Cargo creates a `src/main.rs` file with a minimal `main` function. That is the entry point of a binary application.

```rust
fn main() {
    println!("Hello, Rust!");
}
```

## Read the user name

A useful next step is to read from standard input. That introduces mutability, basic string handling, and the idea that some operations can fail.

```rust
use std::io;

fn main() {
    let mut name = String::new();

    println!("What is your name?");
    io::stdin()
        .read_line(&mut name)
        .expect("Could not read line");

    println!("Hello, {}!", name.trim());
}
```

## What this teaches you

- Cargo organizes and runs your project.
- Variables are immutable by default.
- String is a growable and mutable type.
- `expect` lets you fail with a clear message when something goes wrong.

## A good next step

After this first app, a small calculator or number guessing game is a good follow-up. The point is to repeat input reading, `match`, and `Result` handling.
