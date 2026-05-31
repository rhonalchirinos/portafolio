# What is Rust

Rust es un lenguaje de sistemas enfocado en seguridad de memoria, concurrencia confiable y rendimiento predecible. Para alguien que empieza, lo importante no es memorizar todas sus reglas, sino entender que Rust intenta evitar errores costosos desde el compilador.

## Que es Rust

Rust es un lenguaje compilado creado para desarrollar software rapido y confiable. Se usa en CLI, servicios backend, herramientas de infraestructura, WebAssembly y componentes de bajo nivel.

Su propuesta principal es ayudarte a escribir codigo seguro sin depender de un recolector de basura. Eso permite controlar recursos con mas precision y reducir una clase grande de errores en tiempo de ejecucion.

## Por que llama tanto la atencion

- Detecta muchos errores antes de ejecutar el programa.
- Ofrece rendimiento cercano a C y C++.
- Tiene herramientas integradas como cargo, rustfmt y clippy.
- Hace mas segura la concurrencia desde el diseno del lenguaje.

## Conceptos que vas a escuchar desde el inicio

Ownership define quien es duenio de un valor en cada momento. Borrowing permite prestar referencias sin mover el valor. Lifetimes describen cuanto tiempo deben ser validas esas referencias cuando el compilador no puede inferirlo por completo.

Al principio estas reglas pueden parecer estrictas, pero terminan guiando una forma de escribir codigo mas clara y con menos sorpresas.

## Cuando vale la pena aprenderlo

- Cuando quieres construir herramientas de linea de comandos veloces.
- Cuando necesitas servicios eficientes con buen control de memoria.
- Cuando te interesa sistemas, redes, embebidos o WebAssembly.
- Cuando quieres mejorar tu forma de razonar sobre ownership y datos compartidos.

> Rust tiene una curva inicial mas exigente que otros lenguajes de entrada, pero esa exigencia viene con un retorno real en calidad de codigo.
