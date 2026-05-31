# How to install packages with pip and manage dependencies without chaos

## What pip does

`pip` is the most common package manager in Python. It lets you install, update, and remove the libraries your project needs.

## Basic installation

```bash
pip install requests
pip install flask
```

- Always install packages inside an active virtual environment.
- Check which package you are installing and why you need it.

## How to verify the environment

```bash
pip list
pip show requests
```

## Saving dependencies

When a project already has a defined set of libraries, it is worth exporting them so the environment can be recreated on another machine or at a later time.

```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

## Why this matters

- It prevents you from installing packages that you later forget to document.
- It makes the project easier to share.
- It reduces differences between your machine and someone else’s.
