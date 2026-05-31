# How to create a virtual environment with venv and why it matters

## Why it matters

- It isolates dependencies per project.
- It avoids version conflicts between different jobs.
- It lets you install packages without polluting the global Python environment.
- It makes it easier to reproduce an environment on another machine or across a team.

## What a virtual environment is

A virtual environment is an isolated folder that contains a local Python installation and its packages for a specific project.

If you work without `venv`, every package you install goes into the global environment. That may feel convenient at first, but it becomes fragile when you have different projects or need to reproduce the same environment on another machine.

## How to create it step by step

Python includes `venv` in the standard library, so in most cases you do not need to install anything extra.

```bash
python -m venv .venv
```

## How to activate it

- macOS or Linux: `source .venv/bin/activate`
- Windows: `.venv\Scripts\activate`

## Best practices

- Use a folder such as `.venv` or `venv` inside the project.
- Do not commit the virtual environment to the repository.
- Store dependencies in `requirements.txt` when the project needs it.
- Activate the environment before installing or running project packages.

```bash
pip install requests
pip freeze > requirements.txt
```

## Common mistakes

- Installing packages globally for every project.
- Forgetting to activate the environment before installing dependencies.
- Pushing the virtual environment folder to the repository.
- Assuming `venv` is optional even when you work with multiple Python projects.
