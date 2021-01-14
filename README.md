# Training-Tracker
Proyecto para la asignatura Desarrollo Avanzado de Software

## Instalación mediante docker-compose
En caso de no querer realizar los pasos manualmente es posible ejecutar el script de docker-compose
con el comando `docker-compose up -d`

## Instalación
Para instalar la aplicacion y hacer uso de ella en localhost es necesario intalar las dependencias
y ejecutar los scripts del _package.json_.

Comenzamos levantando el backend:
1. `cd src`
2. `cd server`
3. `npm i`
4. `npm run start`

Abrimos una nueva consola para el frontend:
1. `cd src`
2. `cd client`
3. `npm i`
4. `npm run start`

En caso de que al momento de crear el fronted se nos notifique que el puereto ya esta en 
uso y que se abrirá un nuevo puerto decimos **Sí**

## Uso
Para hacer uso de la aplicacion local,si el propio React.js no lo abre en el navegador
introduciremos en el navegador *localhost:3001*.

En caso de querer probar la aplicacion desplegada en Clouding.io introducir la siguiente IP
en el navegador `http://46.183.113.226/`

## Github
https://github.com/miikel23/Training-Tracker
