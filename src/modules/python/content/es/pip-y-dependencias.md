# Como instalar paquetes con pip y manejar dependencias sin desorden

## Que hace pip

pip es el gestor de paquetes mas comun en Python. Te permite instalar, actualizar y remover librerias que tu proyecto necesita.

## Instalacion basica

```bash
pip install requests
pip install flask
```

- Instala siempre dentro de un entorno virtual activo.
- Revisa que paquete estas instalando y para que lo necesitas.

## Como verificar el entorno

```bash
pip list
pip show requests
```

## Guardar dependencias

Cuando un proyecto ya tiene un conjunto de librerias definido, conviene exportarlas para poder recrear el entorno en otra maquina o en otro momento.

```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

## Por que esto importa

- Evita instalar paquetes que luego olvidas documentar.
- Hace mas facil compartir el proyecto.
- Reduce diferencias entre tu maquina y la de otra persona.
