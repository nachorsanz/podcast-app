# Podcast App

Este es un proyecto llamado "Podcast App" que utiliza las siguientes tecnologías:

- React
- Vite
- TypeScript
  Este proyecto también incluye pruebas unitarias y de interfaz de usuario utilizando Jest y React Testing Library.

# Scripts

Este proyecto viene con varios scripts predefinidos en el archivo package.json. Aquí hay una descripción rápida de cada uno:

- dev: ejecuta la aplicación en modo de desarrollo usando Vite.
- build: compila la aplicación en una carpeta de distribución para su implementación en producción.
- start:dev: ejecuta la aplicación en modo de desarrollo en un puerto específico, configurando las variables de entorno para desarrollo.
- start:prod: ejecuta la aplicación en modo de producción en un puerto específico, configurando las variables de entorno para producción.
- preview: compila la aplicación y la ejecuta en modo de previsualización.
- test:ui-jest: ejecuta pruebas de interfaz de usuario utilizando Jest y React Testing Library.
- test:unit: ejecuta pruebas unitarias utilizando Jest y Node.js.
- prettier: formatea automáticamente el código fuente utilizando Prettier.
- typecheck: verifica los tipos de TypeScript en el código fuente.
- precommit: ejecuta automáticamente las pruebas de interfaz de usuario y el formateo de código antes de confirmar los cambios en el repositorio.

# Proxy-server

Para solucionar el problema de cors he montado un proxy con nodeJS

# Iniciar el Proyecto

Para iniciar el proyecto primero debemos levantar el proxy-server.

Para ello iremos a la ruta src/infra/proxy-server y ejecutaremos el comando "npm i" o bien "yarn" para instalar las dependencias necesarias.

Luego ejecutaremos "npm run start" o "yarn start" para levantar nuestro server en el puerto 3001

Una vez levantado el proxy-server, iremos a la ruta principal del proyecto y ejecutaremos el comando "npm i" o bien "yarn" para instalar las dependencias necesarias.

Y usaremos el script necesario para levantar la aplicación. "npm run start:dev" o "yarn start:dev"
