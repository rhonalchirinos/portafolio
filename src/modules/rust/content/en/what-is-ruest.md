# What is Rust

Rust is a systems language focused on memory safety, reliable concurrency, and predictable performance. As a beginner, the key is not to memorize every rule, but to understand that Rust tries to prevent costly mistakes directly from the compiler.

## What Rust is

Rust is a compiled language built for fast and reliable software. It is used for CLIs, backend services, infrastructure tools, WebAssembly, and low-level components.

Its main promise is to help you write safe code without relying on a garbage collector. That gives you tighter resource control and removes a large class of runtime problems.

## Why it stands out

- It catches many problems before you run the program.
- It delivers performance close to C and C++.
- It ships with integrated tools such as cargo, rustfmt, and clippy.
- It makes concurrency safer by language design.

## Concepts you will hear early

Ownership defines who owns a value at any given time. Borrowing lets you pass references without moving that value. Lifetimes describe how long those references must remain valid when the compiler cannot infer everything.

At first these rules can feel strict, but they usually guide you toward clearer code with fewer surprises.

## When it is worth learning

- When you want to build fast command-line tools.
- When you need efficient services with solid memory control.
- When you are interested in systems, networking, embedded software, or WebAssembly.
- When you want to improve how you reason about ownership and shared data.

> Rust has a steeper initial curve than some beginner languages, but that cost usually pays back in code quality.
