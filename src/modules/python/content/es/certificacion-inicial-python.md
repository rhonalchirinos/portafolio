# Como obtener una certificacion inicial de Python

## Fundamentos de programacion

Antes de estudiar estructuras, funciones o colecciones, conviene entender que hace que una instruccion sea valida dentro de un lenguaje. Python es amigable, pero sigue siendo un sistema formal con reglas precisas.

Separar lexico, sintaxis y semantica ayuda a leer errores con mas criterio y a entender por que una instruccion puede estar bien escrita, pero aun asi estar mal planteada.

- Lexico: conjunto de palabras y simbolos que el lenguaje pone a disposicion.
- Sintaxis: reglas que determinan si una secuencia esta correctamente construida.
- Semantica: significado de la instruccion y coherencia con el problema que intenta resolver.

> Una gran parte de los errores iniciales en Python se entienden mejor si separas problemas de sintaxis de problemas de logica.

## El interprete

- Lee el codigo fuente de arriba hacia abajo y de izquierda a derecha.
- Verifica validez lexico-sintactica y coherencia semantica.
- Ejecuta el programa y comunica errores cuando el flujo se rompe.

## Python como lenguaje

Python es un lenguaje de programacion de alto nivel, interpretado, de proposito general, con semantica dinamica y una sintaxis orientada a la legibilidad.

Su nombre proviene de Monty Python’s Flying Circus y fue creado por Guido van Rossum. Su popularidad viene de una combinacion poco comun: facilidad de entrada y utilidad profesional.

- Facil e intuitivo.
- Codigo abierto.
- Legible y cercano al ingles.
- Adecuado para tareas cotidianas y proyectos reales.

## Versiones e implementaciones

- CPython: implementacion canonica mantenida por la Python Software Foundation.
- Cython: permite traducir codigo Python con ajustes menores hacia C.
- Jython: implementacion construida sobre Java.
- PyPy: enfocada en rendimiento y con un comportamiento distinto en algunas compatibilidades.

## Literales, numeros y operadores

Un literal es un valor escrito directamente en el codigo. En una certificacion inicial es fundamental reconocer enteros, flotantes, octales, hexadecimales y notacion cientifica.

Tambien necesitas entender el comportamiento real de division, modulo, exponenciacion y precedencia.

```python
users = 11_111_111
octal_value = 0o123
hex_value = 0x123
speed_of_light = 3E8
electron_mass = 1E-22
```

- Los enteros positivos no necesitan signo `+`, aunque es valido usarlo.
- Los flotantes pueden escribirse como `0.5` o `.5`.
- Python prefiere representaciones cortas cuando muestra un numero.
- `**` tiene alta prioridad y asociatividad de derecha a izquierda.
- `/` siempre devuelve flotante.
- `//` hace floor division.
- `%` devuelve el residuo.

## Operaciones que debes reconocer

```python
print(6 / 4)        # 1.5
print(6 // 4)       # 1
print(-6 // 4)      # -2
print(6 % 4)        # 2
print(2 ** 3 ** 2)  # 512
```

## Variables y estilo

Python no impone restricciones fuertes sobre la longitud de los nombres y permite un amplio conjunto de caracteres, pero una variable clara siempre vale mas que una variable solo valida.

- Deben comenzar con una letra o guion bajo.
- No deben usar espacios.
- El nombre debe comunicar intencion.
- Variables y funciones en minusculas con palabras separadas por guion bajo.
- La legibilidad es prioridad: el estilo no es decoracion, es mantenibilidad.

```python
total_price = 10
user_name = "Rhonal"
counter += 2 * j
repeated = "James" * 3
```

## Control de flujo y logica

Los ciclos `while` y `for` pueden usar una clausula `else`, que se ejecuta cuando el bucle termina sin haber pasado por `break`.

Tambien conviene dominar las tablas basicas de logica para entender `and`, `or` y `not`.

- Conjuncion: `1 and 1 = 1`; cualquier otro caso da `0`.
- Disyuncion: `0 or 0 = 0`; cualquier otro caso da `1`.

## Bits, desplazamientos y negativos

En una certificacion inicial tambien es comun ver operadores bit a bit y desplazamientos binarios.

- `&`: conjuncion a nivel de bits.
- `|`: disyuncion a nivel de bits.
- `~`: negacion bit a bit.
- `^`: xor.
- `<<` desplaza a la izquierda y `>>` desplaza a la derecha.

```python
i = 15
j = 20

bit_and = i & j
bit_or = i | j
bit_xor = i ^ j
bit_not = ~i

print(17 >> 1)  # 8
print(17 << 2)  # 68
```

> Python representa negativos usando complemento a dos. El proceso conceptual es: pasar a binario, invertir bits y sumar uno.

## Colecciones y mutabilidad

Las estructuras mas importantes para una certificacion inicial son listas, tuplas y diccionarios. Tambien es clave entender la diferencia entre datos mutables e inmutables.

- Listas: `append` agrega al final, `insert` agrega en una posicion especifica y el slicing permite copiar o extraer partes.
- Tuplas: son secuencias inmutables y una tupla de un elemento necesita coma: `(1,)`.
- Diccionarios: `popitem` elimina y retorna el ultimo par en versiones modernas; desde Python 3.7 conservan orden de insercion.
- Un dato mutable puede modificarse in situ. Un dato inmutable no puede alterarse de esa manera.

```python
arr = [10, 8, 6, 4, 2]
print(arr[1:3])   # [8, 6]

copy_arr = arr[:]
single_tuple = (1,)
user = {"name": "Rhonal", "role": "developer"}
```

## Funciones y excepciones

En la parte base de Python debes entender alcance, uso de `global`, recursividad y manejo de errores.

- Una variable externa puede leerse dentro de una funcion si no hay otra local con el mismo nombre.
- `global` extiende el alcance para leer y modificar una variable definida fuera de la funcion.
- La profundidad maxima de recursion suele ser 1000 por defecto.
- Los argumentos de una excepcion quedan en `args` y se almacenan como tupla.

```python
def my_function():
    global var
    var = 2
    print(var)


var = 1

my_function()
print(var)

try:
    1 / 0
except ZeroDivisionError as e:
    print(e.args)
```
