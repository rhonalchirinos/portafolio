# Como crear un entorno virtual con venv y por que es tan importante

## Por que importa

- Aisla dependencias por proyecto.
- Evita conflictos de versiones entre trabajos distintos.
- Te permite instalar paquetes sin contaminar el Python global.
- Hace mas facil reproducir un entorno en otra maquina o dentro de un equipo.

## Que es un entorno virtual

Un entorno virtual es una carpeta aislada que contiene una instalacion local de Python y sus paquetes para un proyecto especifico.

Si trabajas sin venv, cada paquete que instales va al entorno global. Eso parece comodo al principio, pero se vuelve fragil cuando tienes proyectos distintos o necesitas reproducir el mismo entorno en otra maquina.

## Como crearlo paso a paso

Python incluye venv en la libreria estandar, asi que no necesitas instalar nada adicional en la mayoria de los casos.

```bash
python -m venv .venv
```

## Como activarlo

- macOS o Linux: `source .venv/bin/activate`
- Windows: `.venv\Scripts\activate`

## Buenas practicas

- Usa una carpeta como `.venv` o `venv` dentro del proyecto.
- No subas el entorno virtual al repositorio.
- Guarda dependencias en `requirements.txt` cuando el proyecto lo necesite.
- Activa el entorno antes de instalar o ejecutar paquetes del proyecto.

```bash
pip install requests
pip freeze > requirements.txt
```

## Errores comunes

- Instalar paquetes globalmente para todos los proyectos.
- Olvidar activar el entorno antes de instalar dependencias.
- Subir la carpeta del entorno virtual al repositorio.
- Pensar que venv es opcional incluso cuando trabajas con varios proyectos de Python.
