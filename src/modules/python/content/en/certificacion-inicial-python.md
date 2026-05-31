# How to prepare for an entry-level Python certification

## Programming fundamentals

Before studying structures, functions, or collections, it is useful to understand what makes an instruction valid within a language. Python is approachable, but it is still a formal system with precise rules.

Separating lexicon, syntax, and semantics helps you read errors with better judgment and understand why an instruction can be well written yet still poorly framed.

- Lexicon: the set of words and symbols made available by the language.
- Syntax: the rules that determine whether a sequence is correctly formed.
- Semantics: the meaning of the instruction and its coherence with the problem it is trying to solve.

> A large share of beginner Python mistakes becomes easier to understand when you separate syntax problems from logic problems.

## The interpreter

- It reads the source code from top to bottom and from left to right.
- It checks lexical and syntactic validity as well as semantic coherence.
- It runs the program and reports errors when the flow breaks.

## Python as a language

Python is a high-level, interpreted, general-purpose programming language with dynamic semantics and syntax designed for readability.

Its name comes from Monty Python’s Flying Circus and it was created by Guido van Rossum. Its popularity comes from an unusual combination: low entry barrier and professional usefulness.

- Easy and intuitive.
- Open source.
- Readable and close to English.
- Suitable for everyday tasks and real projects.

## Versions and implementations

- CPython: the canonical implementation maintained by the Python Software Foundation.
- Cython: allows Python code with minor adjustments to be translated toward C.
- Jython: an implementation built on top of Java.
- PyPy: focused on performance, with different behavior in some compatibility areas.

## Literals, numbers, and operators

A literal is a value written directly in the code. For an entry-level certification, it is essential to recognize integers, floats, octal values, hexadecimal values, and scientific notation.

You also need to understand the real behavior of division, modulo, exponentiation, and operator precedence.

```python
users = 11_111_111
octal_value = 0o123
hex_value = 0x123
speed_of_light = 3E8
electron_mass = 1E-22
```

- Positive integers do not need a `+` sign, although using it is valid.
- Floats can be written as `0.5` or `.5`.
- Python prefers shorter representations when displaying a number.
- `**` has high precedence and right-to-left associativity.
- `/` always returns a float.
- `//` performs floor division.
- `%` returns the remainder.

## Operations you should recognize

```python
print(6 / 4)        # 1.5
print(6 // 4)       # 1
print(-6 // 4)      # -2
print(6 % 4)        # 2
print(2 ** 3 ** 2)  # 512
```

## Variables and style

Python does not impose strict limits on name length and allows a wide set of characters, but a clear variable is always better than a variable that is merely valid.

- They must start with a letter or underscore.
- They must not contain spaces.
- The name should communicate intent.
- Variables and functions should use lowercase words separated by underscores.
- Readability comes first: style is not decoration, it is maintainability.

```python
total_price = 10
user_name = "Rhonal"
counter += 2 * j
repeated = "James" * 3
```

## Control flow and logic

Both `while` and `for` loops can use an `else` clause, which runs when the loop finishes without hitting `break`.

It is also worth mastering basic logic tables to understand `and`, `or`, and `not`.

- Conjunction: `1 and 1 = 1`; any other case results in `0`.
- Disjunction: `0 or 0 = 0`; any other case results in `1`.

## Bits, shifts, and negatives

Bitwise operators and binary shifts are also common topics in an entry-level certification.

- `&`: bit-level conjunction.
- `|`: bit-level disjunction.
- `~`: bitwise negation.
- `^`: xor.
- `<<` shifts left and `>>` shifts right.

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

> Python represents negative numbers using two’s complement. Conceptually, the process is: convert to binary, invert bits, and add one.

## Collections and mutability

The most important structures for an entry-level certification are lists, tuples, and dictionaries. It is also critical to understand the difference between mutable and immutable data.

- Lists: `append` adds to the end, `insert` adds at a specific position, and slicing lets you copy or extract parts.
- Tuples: immutable sequences, and a single-item tuple needs a trailing comma: `(1,)`.
- Dictionaries: `popitem` removes and returns the last pair in modern versions; since Python 3.7, they preserve insertion order.
- Mutable data can be changed in place. Immutable data cannot be altered that way.

```python
arr = [10, 8, 6, 4, 2]
print(arr[1:3])   # [8, 6]

copy_arr = arr[:]
single_tuple = (1,)
user = {"name": "Rhonal", "role": "developer"}
```

## Functions and exceptions

In the core Python portion, you should understand scope, the use of `global`, recursion, and error handling.

- An outer variable can be read inside a function if there is no local variable with the same name.
- `global` extends the scope so you can read and modify a variable defined outside the function.
- The default maximum recursion depth is usually 1000.
- Exception arguments are stored in `args` as a tuple.

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
